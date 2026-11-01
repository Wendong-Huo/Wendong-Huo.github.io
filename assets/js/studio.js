(() => {
 const $ = s => document.querySelector(s);
 const stage=$('.surface-stage');
 document.querySelectorAll('[data-gallery]').forEach(button=>button.addEventListener('click',()=>{
  const tee=button.dataset.gallery==='tee';
  stage.dataset.modelSrc=tee?'/assets/models/tee-smoothed.glb':'/assets/models/torus-optimized.glb';
  stage.dataset.rawSrc=tee?'/assets/models/tee-processed.glb':'/assets/models/torus-optimized.glb';
  stage.dataset.originalSrc=tee?'/assets/models/tee-surface.glb':'/assets/models/torus-surface.glb';
  stage.dataset.modelAlt=tee?'Lightly smoothed archived tee-branch shell':'Archived torus optimization, iteration 310';
  stage.dataset.originalAlt=tee?'Complete tee-branch design surface':'Complete torus design surface';
  stage.dataset.rawAlt=tee?'Archived tee-branch mesh before smoothing':'Archived torus optimization, iteration 310';
  $('.show-optimized').textContent=tee?'Smoothed display':'Solid layout';
  $('.show-raw').hidden=!tee;
  $('.surface-explorer .muted').innerHTML=tee?'Lightly smoothed for display. Compare with the archived mesh; connectivity is retained.':'Archived iteration 310 · Explicit solid element set · No smoothing. Void and transition elements omitted.';
  $('.surface-explorer .section-heading a').href=stage.dataset.modelSrc;
  $('#interactive-surface-title').textContent=tee?'Explore a branching shell in 3D.':'Explore a torus shell in 3D.';
  $('.surface-explorer .section-intro').textContent=tee?'A recovered branching-shell structure, with display and archive versions.':'A saved torus topology-optimization result. Compare its solid layout with the full design surface.';
  $('.surface-placeholder p').textContent=tee?'Explore the branching shell in 3D':'Explore the torus shell in 3D';
  $('#gallery-context').textContent=tee?'Tee-branch shell · Recovered MATLAB visualization, with a lightly smoothed display version.':'Torus shell · Archived iteration 310, explicit solid region.';
  document.querySelectorAll('[data-gallery]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  const viewer=stage.querySelector('model-viewer');
  if(viewer){viewer.src=stage.dataset.modelSrc;viewer.alt=stage.dataset.modelAlt;viewer.setAttribute('camera-target','auto auto auto');stage.querySelectorAll('.show-optimized,.show-raw,.show-original').forEach(b=>b.setAttribute('aria-pressed',String(b.matches('.show-optimized'))));}
 }));
 if(!$('#curve-art')) return;
 const controls=['a','b','phase','type','palette'];
 function draw(){
  const a=+$('#curve-a').value,b=+$('#curve-b').value,phase=+$('#curve-phase').value*Math.PI/180,type=$('#curve-type').value;
  $('#a-value').textContent=a;$('#b-value').textContent=b;$('#phase-value').textContent=$('#curve-phase').value+'°';
  const colors={blue:['#087eae','#e8b928'],coral:['#dc795f','#303d55'],mint:['#269b87','#8063ad']}[$('#curve-palette').value];
  let points=[];
  for(let i=0;i<=2400;i++){const t=i/2400*Math.PI*2;let x,y;if(type==='rosette'){const r=170+65*Math.cos(a*t+phase);x=r*Math.cos(b*t);y=r*Math.sin(b*t);}else{x=300*Math.sin(a*t+phase);y=220*Math.sin(b*t);}points.push((400+x).toFixed(2)+','+(300+y).toFixed(2));}
  $('#curve-art').innerHTML='<rect width="800" height="600" fill="#faf9f4"/><defs><linearGradient id="curve-gradient"><stop stop-color="'+colors[0]+'"/><stop offset="1" stop-color="'+colors[1]+'"/></linearGradient></defs><polyline points="'+points.join(' ')+'" fill="none" stroke="url(#curve-gradient)" stroke-width="2.5" stroke-linejoin="round"/>';
  $('#curve-description').textContent=(type==='rosette'?'Rosette':'Lissajous')+' · A = '+a+' · B = '+b+' · phase = '+$('#curve-phase').value+'°';
 }
 controls.forEach(id=>$('#curve-'+id).addEventListener('input',draw));
 $('#curve-random').addEventListener('click',()=>{['a','b'].forEach(id=>$('#curve-'+id).value=1+Math.floor(Math.random()*12));$('#curve-phase').value=Math.floor(Math.random()*181);draw();});
 $('#curve-reset').addEventListener('click',()=>{const defaults={a:3,b:4,phase:45,type:'lissajous',palette:'blue'};controls.forEach(id=>$('#curve-'+id).value=defaults[id]);draw();});
 $('#curve-download').addEventListener('click',()=>{const clone=$('#curve-art').cloneNode(true);clone.setAttribute('xmlns','http://www.w3.org/2000/svg');const blob=new Blob([new XMLSerializer().serializeToString(clone)],{type:'image/svg+xml'});const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='wendong-curve.svg';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
 draw();
})();
