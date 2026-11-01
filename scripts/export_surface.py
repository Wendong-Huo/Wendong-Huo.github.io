"""Export the archived torus S3 surface, preserving vertices and connectivity.

Usage: python scripts/export_surface.py path/to/Job-torus_v3.inp
Requires numpy and trimesh. No solver results or boundary conditions are exported.
"""
from pathlib import Path
import hashlib
import json
import sys
import numpy as np
import trimesh

source = Path(sys.argv[1])
nodes, faces = {}, []
mode = None
for line in source.read_text().splitlines():
    if line.startswith('**'):
        continue
    if line.startswith('*'):
        if line.lower().startswith('*end part'):
            break
        mode = 'node' if line.lower() == '*node' else ('face' if line.lower().startswith('*element, type=s3') else None)
        continue
    values = [x.strip() for x in line.split(',') if x.strip()]
    if mode == 'node':
        nodes[int(values[0])] = list(map(float, values[1:4]))
    elif mode == 'face':
        faces.append(list(map(int, values[1:4])))
ids = {node: i for i, node in enumerate(nodes)}
vertices = np.array(list(nodes.values()))
triangles = np.array([[ids[n] for n in f] for f in faces])
mesh = trimesh.Trimesh(vertices=vertices, faces=triangles, process=False)
mesh.visual = trimesh.visual.TextureVisuals(material=trimesh.visual.material.PBRMaterial(
    name='Research surface', baseColorFactor=[76, 115, 100, 255], metallicFactor=0.1,
    roughnessFactor=0.65, doubleSided=True))
out = Path(__file__).resolve().parents[1] / 'assets/models'
out.mkdir(parents=True, exist_ok=True)
mesh.export(out / 'torus-surface.glb')
check = trimesh.load(out / 'torus-surface.glb', force='mesh', process=False)
assert len(check.faces) == len(triangles)
assert np.allclose(check.bounds, mesh.bounds, atol=1e-5)
record = dict(source_file=source.name, source_sha256=hashlib.sha256(source.read_bytes()).hexdigest(),
              vertices=len(vertices), triangles=len(triangles), bounds=mesh.bounds.tolist(),
              description='Archived torus shell geometry; not an optimized layout or simulation result.',
              conversion='Original S3 connectivity; no geometry simplification; coordinates preserved as model units.')
(out / 'torus-surface.json').write_text(json.dumps(record, indent=2)+'\n')
print(json.dumps(record))
