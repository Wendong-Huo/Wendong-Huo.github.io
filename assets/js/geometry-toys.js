/* Parametric meshes rendered locally: no remote runtime or tracking. */
(() => {
  'use strict';
  const canvas = document.querySelector('#geometry-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) { document.querySelector('#toy-note').textContent = 'Canvas is unavailable in this browser.'; return; }
  const $ = id => document.getElementById(id), tau = Math.PI * 2;
  const presets = {
    ribbon: { note: 'A half-turn makes a Möbius band: one continuous side. Try two half-turns to return to a two-sided ribbon.', params: [['Half-turns',1,5,1,1],['Ribbon width',15,65,1,38]] },
    knot: { note: 'Wind around a torus in two directions. Coprime winding counts give a single torus knot; shared factors retrace a simpler curve.', params: [['Long way (p)',2,5,1,2],['Short way (q)',3,8,1,3],['Tube radius',5,18,1,10]] },
    shell: { note: 'A fluted open shell, described directly by radius and height. Change the lobes, flare and twist to explore its silhouette.', params: [['Lobes',3,12,1,7],['Flare',15,85,1,55],['Twist',0,180,1,65]] }
  };
  let toy='ribbon', values=[], vertices=[], faces=[], yaw=.5, pitch=-.45, zoom=1, spin=!matchMedia('(prefers-reduced-motion: reduce)').matches, wire=false, visible=false, dirty=true, last=0, frame=0;
  const rotate = ([x,y,z]) => { const a=x*Math.cos(yaw)+z*Math.sin(yaw), b=-x*Math.sin(yaw)+z*Math.cos(yaw);return [a,y*Math.cos(pitch)-b*Math.sin(pitch),y*Math.sin(pitch)+b*Math.cos(pitch)]; };
  const normalize = v => {const l=Math.hypot(...v)||1;return v.map(x=>x/l);};
  const cross = (a,b) => [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  function build() {
    vertices=[]; faces=[];
    const nu=toy==='knot'?240:112, nv=toy==='knot'?12:24;
    function center(t){const p=values[0],q=values[1],r=1+.36*Math.cos(q*t);return [r*Math.cos(p*t),.36*Math.sin(q*t),r*Math.sin(p*t)];}
    for(let i=0;i<=nu;i++) {
      const u=i/nu*tau;
      for(let j=0;j<=nv;j++) {
        const v=j/nv;let point;
        if(toy==='ribbon') {const w=(v-.5)*values[1]/50, a=values[0]*u/2;point=[(1+w*Math.cos(a))*Math.cos(u),w*Math.sin(a),(1+w*Math.cos(a))*Math.sin(u)];}
        else if(toy==='shell') {const a=u+v*values[2]*Math.PI/180, r=.42+values[1]/100*v+.13*Math.cos(values[0]*u)*(.3+.7*v);point=[r*Math.cos(a),(v-.5)*2,r*Math.sin(a)];}
        else {const c=center(u),n=center(u+.0001),t=normalize(n.map((x,k)=>x-c[k])),a=normalize(cross(t,[0,1,0])),b=cross(t,a),r=values[2]/100;point=c.map((x,k)=>x+r*(a[k]*Math.cos(v*tau)+b[k]*Math.sin(v*tau)));}
        vertices.push(point);
      }
    }
    for(let i=0;i<nu;i++)for(let j=0;j<nv;j++) {const a=i*(nv+1)+j,b=a+nv+1;const gold=toy==='ribbon'?(j<2||j>=nv-2):toy==='shell'?(j>=nv-2||i%14<2):(j<2);faces.push({ids:[a,b,b+1],gold},{ids:[a,b+1,a+1],gold});}
    canvas.setAttribute('aria-label',presets[toy].note+' Current parameters: '+presets[toy].params.map((p,i)=>p[0]+' '+values[i]).join(', '));
    dirty=true;wake();
  }
  function render() {
    const w=canvas.clientWidth,h=canvas.clientHeight,dpr=Math.min(devicePixelRatio||1,2);
    if(!w||!h)return;
    if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);}
    ctx.setTransform(dpr,0,0,dpr,0,0);ctx.fillStyle='#f5f4ec';ctx.fillRect(0,0,w,h);
    const scale=Math.min(w,h)*.29*zoom;
    const pts=vertices.map(rotate), projected=pts.map(([x,y,z])=>{const p=5/(5-z);return [w/2+x*scale*p,h/2-y*scale*p];});
    const sorted=faces.map(f=>({...f,z:f.ids.reduce((s,i)=>s+pts[i][2],0)/3})).sort((a,b)=>a.z-b.z);
    sorted.forEach(f=>{
      const [a,b,c]=f.ids.map(i=>pts[i]), normal=normalize(cross(b.map((x,i)=>x-a[i]),c.map((x,i)=>x-a[i])));
      const light=.48+.52*Math.abs(normal[0]*.25+normal[1]*.5+normal[2]*.83);
      const base=f.gold?[239,190,42]:[13,143,190];ctx.fillStyle='rgb('+base.map(x=>Math.round(x*light)).join(',')+')';
      ctx.beginPath();f.ids.forEach((id,i)=>{const p=projected[id];i?ctx.lineTo(...p):ctx.moveTo(...p);});ctx.closePath();ctx.fill();
      ctx.strokeStyle=wire?'rgba(3,48,79,.38)':ctx.fillStyle;ctx.lineWidth=wire?.55:.4;ctx.stroke();
    });
    dirty=false;
  }
  function tick(time){frame=0;if(document.hidden||!visible){last=0;return;}if(spin){yaw+=Math.min((time-last)||16,50)*.00018;dirty=true;}last=time;if(dirty)render();if(spin)frame=requestAnimationFrame(tick);}
  function wake(){if(!frame&&!document.hidden&&visible)frame=requestAnimationFrame(tick);}
  function spinLabel(){ $('toy-spin').textContent=spin?'Pause rotation':'Auto rotate';$('toy-spin').setAttribute('aria-pressed',String(spin)); }
  function select(name){toy=name;values=presets[toy].params.map(p=>p[4]);$('toy-note').textContent=presets[toy].note;$('toy-controls').replaceChildren();
    presets[toy].params.forEach((p,i)=>{const label=document.createElement('label'),output=document.createElement('output'),input=document.createElement('input');label.textContent=p[0]+' ';output.textContent=values[i];input.type='range';input.min=p[1];input.max=p[2];input.step=p[3];input.value=values[i];input.id='toy-param-'+i;label.htmlFor=input.id;input.addEventListener('input',()=>{values[i]=+input.value;output.textContent=input.value;build();});label.append(output,input);$('toy-controls').append(label);});
    document.querySelectorAll('[data-toy]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.toy===toy)));yaw=.5;pitch=-.45;zoom=1;$('toy-zoom').value=100;build();
  }
  document.querySelectorAll('[data-toy]').forEach(b=>b.addEventListener('click',()=>select(b.dataset.toy)));
  $('toy-spin').addEventListener('click',()=>{spin=!spin;spinLabel();wake();});
  $('toy-wire').addEventListener('click',()=>{wire=!wire;$('toy-wire').setAttribute('aria-pressed',String(wire));dirty=true;wake();});
  $('toy-reset').addEventListener('click',()=>select(toy));
  function setZoom(z){zoom=Math.max(.65,Math.min(1.5,z));$('toy-zoom').value=Math.round(zoom*100);dirty=true;wake();}
  $('toy-zoom').addEventListener('input',()=>setZoom(+$('toy-zoom').value/100));
  $('toy-save').addEventListener('click',()=>{render();canvas.toBlob(blob=>{if(!blob)return;const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='wendong-'+toy+'.png';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});});
  const pointers=new Map();let distance=0;
  canvas.addEventListener('pointerdown',e=>{canvas.setPointerCapture(e.pointerId);pointers.set(e.pointerId,[e.clientX,e.clientY]);spin=false;spinLabel();distance=0;});
  canvas.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId))return;const prev=pointers.get(e.pointerId);pointers.set(e.pointerId,[e.clientX,e.clientY]);if(pointers.size===2){const [a,b]=[...pointers.values()],d=Math.hypot(a[0]-b[0],a[1]-b[1]);if(distance)setZoom(zoom*d/distance);distance=d;}else{yaw+=(e.clientX-prev[0])*.008;pitch=Math.max(-1.5,Math.min(1.5,pitch+(e.clientY-prev[1])*.008));}dirty=true;wake();});
  ['pointerup','pointercancel','lostpointercapture'].forEach(event=>canvas.addEventListener(event,e=>{pointers.delete(e.pointerId);distance=0;}));
  canvas.addEventListener('wheel',e=>{e.preventDefault();setZoom(zoom*Math.exp(-e.deltaY*.001));},{passive:false});
  canvas.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','=','-'].includes(e.key))return;e.preventDefault();if(['+','=','-'].includes(e.key))setZoom(zoom+(e.key==='-'?-.08:.08));else{spin=false;spinLabel();yaw+=e.key==='ArrowLeft'?-.12:e.key==='ArrowRight'?.12:0;pitch=Math.max(-1.5,Math.min(1.5,pitch+(e.key==='ArrowUp'?-.12:e.key==='ArrowDown'?.12:0)));dirty=true;wake();}});
  new ResizeObserver(()=>{dirty=true;wake();}).observe(canvas);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible){dirty=true;wake();}},{threshold:.01}).observe(canvas);
  document.addEventListener('visibilitychange',wake);
  spinLabel();select(toy);
})();
