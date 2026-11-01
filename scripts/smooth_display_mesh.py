"""Conservative display-only boundary smoothing; raw research geometry is retained."""
from pathlib import Path
import json,hashlib
import numpy as np
import trimesh
from scipy.sparse import coo_matrix,diags
root=Path(__file__).resolve().parents[1];out=root/'assets/models'
source=out/'tee-processed.glb';m=trimesh.load(source,force='mesh',process=False)
v=m.vertices.copy();base=v.copy();f=m.faces.copy();norm=m.vertex_normals.copy()
edges,count=np.unique(np.sort(m.edges,axis=1),axis=0,return_counts=True);boundary=edges[count==1]
ids,degree=np.unique(boundary,return_counts=True);movable=ids[degree==2]
def adjacency(e):
 a=coo_matrix((np.ones(2*len(e)),(np.r_[e[:,0],e[:,1]],np.r_[e[:,1],e[:,0]])),shape=(len(v),len(v))).tocsr();return diags(1/np.maximum(np.array(a.sum(axis=1)).ravel(),1))@a
all_adj=adjacency(edges);bound_adj=adjacency(boundary)
weight=np.zeros(len(v));weight[movable]=1
for w in [.45,.15]:
 near=np.asarray(all_adj@(weight>0)).ravel()>0;weight[(weight==0)&near]=w
weight[ids[degree!=2]]=0
length=np.linalg.norm(v[edges[:,0]]-v[edges[:,1]],axis=1);scale=float(np.median(length));cap=1.0*scale
raw_cross=np.cross(base[f[:,1]]-base[f[:,0]],base[f[:,2]]-base[f[:,0]]);raw_len=np.linalg.norm(raw_cross,axis=1)
steps=[]
for iteration in range(20):
 delta=(all_adj@v-v)*weight[:,None];delta[movable]=(bound_adj@v-v)[movable]
 # Tangential movement keeps the original curved surface shape to first order.
 delta-=np.sum(delta*norm,axis=1)[:,None]*norm
 rate=.35
 for trial in range(12):
  target=v+rate*delta;disp=target-base;d=np.linalg.norm(disp,axis=1);target=base+disp*np.minimum(1,cap/np.maximum(d,1e-15))[:,None]
  cross=np.cross(target[f[:,1]]-target[f[:,0]],target[f[:,2]]-target[f[:,0]]);lens=np.linalg.norm(cross,axis=1)
  if np.all(lens>raw_len*.2) and np.all(np.einsum('ij,ij->i',cross,raw_cross)>lens*raw_len*.5): break
  rate*=.5
 else: break
 v=target;steps.append(rate)
m.vertices=v
# Same vertices/faces = same connectivity and boundary loops. No remeshing/filling.
assert np.array_equal(m.faces,f)
assert len(trimesh.graph.connected_components(m.face_adjacency,nodes=np.arange(len(f)),min_len=1))==1
m.export(out/'tee-smoothed.glb');check=trimesh.load(out/'tee-smoothed.glb',force='mesh',process=False)
assert len(check.faces)==len(f) and np.allclose(check.bounds,m.bounds,atol=1e-5)
displacement=np.linalg.norm(v-base,axis=1)
rough=lambda x:float(np.mean(np.linalg.norm((bound_adj@x-x)[movable],axis=1)))
record=dict(source_file=source.name,source_sha256=hashlib.sha256(source.read_bytes()).hexdigest(),purpose='Display-only boundary smoothing, not a new optimization or analysis mesh.',method='Up to 20 tangential boundary Laplacian steps; two-ring blending; degree-not-two junctions pinned; displacement capped at one median mesh edge; triangle area/orientation safeguards.',iterations=len(steps),step_rates=steps,median_edge=scale,max_displacement=float(displacement.max()),rms_displacement=float(np.sqrt(np.mean(displacement**2))),max_displacement_fraction_of_diagonal=float(displacement.max()/np.linalg.norm(np.ptp(base,axis=0))),area_change_percent=float((m.area/trimesh.Trimesh(base,f,process=False).area-1)*100),boundary_roughness_before=rough(base),boundary_roughness_after=rough(v),vertices=len(v),triangles=len(f),connected_components=1,faces_unchanged=True)
(out/'tee-smoothed.json').write_text(json.dumps(record,indent=2)+'\n');print(json.dumps(record))
