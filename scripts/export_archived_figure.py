"""Export the archived MATLAB tee-branch display geometry without smoothing.
Requires h5py, numpy, trimesh, scipy. Duplicate graphics objects are exported once.
"""
import argparse,hashlib,json
from pathlib import Path
import h5py,numpy as np,trimesh
from scipy.spatial import cKDTree
p=argparse.ArgumentParser();p.add_argument('source',type=Path);a=p.parse_args()
out=Path(__file__).resolve().parents[1]/'assets/models'
with h5py.File(a.source) as f:
 groups=[]
 def collect(name,o):
  if isinstance(o,h5py.Group) and 'Vertices' in o and 'Faces' in o: groups.append(o)
 f.visititems(collect)
 assert len(groups)==2
 v=groups[0]['Vertices'][()].T;faces=groups[0]['Faces'][()].T.astype(int)-1
 assert np.array_equal(v,groups[1]['Vertices'][()].T) and np.array_equal(faces,groups[1]['Faces'][()].T.astype(int)-1)
mesh=trimesh.Trimesh(v,faces,process=False)
components=trimesh.graph.connected_components(mesh.face_adjacency,nodes=np.arange(len(faces)),min_len=1)
assert len(components)==1 and np.all(mesh.area_faces>1e-12)
# The saved MATLAB plot reverses Z. Restore the source mesh coordinate convention.
mesh.apply_transform(np.diag([1,1,-1,1]))
original=trimesh.load(out/'tee-surface.glb',force='mesh',process=False)
error=float(cKDTree(original.vertices).query(mesh.vertices)[0].max());assert error<1e-5
mesh.visual=trimesh.visual.TextureVisuals(material=trimesh.visual.material.PBRMaterial(name='Archived research surface',baseColorFactor=[20,70,60,255],metallicFactor=.1,roughnessFactor=.65,doubleSided=True))
mesh.export(out/'tee-processed.glb')
check=trimesh.load(out/'tee-processed.glb',force='mesh',process=False)
assert len(check.faces)==len(faces) and np.allclose(check.bounds,mesh.bounds,atol=1e-5)
record=dict(source_file=a.source.name,source_sha256=hashlib.sha256(a.source.read_bytes()).hexdigest(),vertices=len(v),triangles=len(faces),edge_connected_components=len(components),degenerate_triangles=0,source_mesh_coordinate_error=error,description='Archived rendered tee-branch structure, saved as 200_struct.fig; not claimed as final convergence.',conversion='One of two identical graphics objects exported; Z reflection restores original INP coordinates and corrects face winding. No smoothing, hole filling, component removal or invented geometry.')
(out/'tee-processed.json').write_text(json.dumps(record,indent=2)+'\n');print(json.dumps(record))
