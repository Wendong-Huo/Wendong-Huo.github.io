"""Export the archived torus S3 surface, preserving vertices and connectivity.

Usage: python scripts/export_surface.py path/to/Job-torus_v3.inp
Requires numpy and trimesh. No solver results or boundary conditions are exported.
"""
from pathlib import Path
import hashlib
import json
import argparse
import numpy as np
import trimesh

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('source', type=Path)
parser.add_argument('--solid-set', help='Export only this explicit element set; no inferred density threshold.')
parser.add_argument('--name', default='torus-surface')
parser.add_argument('--description', help='Verified geometry description for provenance.')
args = parser.parse_args()
source = args.source
nodes, faces, selected = {}, {}, []
mode = None
for line in source.read_text().splitlines():
    if line.startswith('**'):
        continue
    if line.startswith('*'):
        if line.lower().startswith('*end part'):
            break
        mode = 'node' if line.lower() == '*node' else ('face' if line.lower().startswith('*element, type=s3') else None)
        if args.solid_set and line.lower() == '*elset, elset=' + args.solid_set.lower():
            mode = 'selected'
        continue
    values = [x.strip() for x in line.split(',') if x.strip()]
    if mode == 'node':
        nodes[int(values[0])] = list(map(float, values[1:4]))
    elif mode == 'face':
        faces[int(values[0])] = list(map(int, values[1:4]))
    elif mode == 'selected':
        selected.extend(map(int, values))
ids = {node: i for i, node in enumerate(nodes)}
vertices = np.array(list(nodes.values()))
if args.solid_set:
    assert selected and len(selected) == len(set(selected)), 'Explicit solid element set must be nonempty and unique'
else:
    selected = list(faces)
triangles = np.array([[ids[n] for n in faces[e]] for e in selected])
mesh = trimesh.Trimesh(vertices=vertices, faces=triangles, process=False)
mesh.remove_unreferenced_vertices()
mesh.visual = trimesh.visual.TextureVisuals(material=trimesh.visual.material.PBRMaterial(
    name='Research surface', baseColorFactor=([20, 70, 60, 255] if args.solid_set else [76, 115, 100, 255]), metallicFactor=0.1,
    roughnessFactor=0.65, doubleSided=True))
out = Path(__file__).resolve().parents[1] / 'assets/models'
out.mkdir(parents=True, exist_ok=True)
mesh.export(out / (args.name + '.glb'))
check = trimesh.load(out / (args.name + '.glb'), force='mesh', process=False)
assert len(check.faces) == len(triangles)
assert np.allclose(check.bounds, mesh.bounds, atol=1e-5)
record = dict(source_file=source.name, source_sha256=hashlib.sha256(source.read_bytes()).hexdigest(),
              vertices=len(mesh.vertices), triangles=len(triangles), source_triangles=len(faces), bounds=mesh.bounds.tolist(),
              description=args.description or ('Archived torus topology optimization, iteration 310, explicitly solid region.' if args.solid_set else 'Archived torus shell geometry; not an optimized layout or simulation result.'),
              element_set=args.solid_set, excluded_regions=('Void and transition elements' if args.solid_set else None),
              conversion='Original S3 connectivity; no smoothing or geometry simplification; coordinates preserved as model units.')
(out / (args.name + '.json')).write_text(json.dumps(record, indent=2)+'\n')
print(json.dumps(record))
