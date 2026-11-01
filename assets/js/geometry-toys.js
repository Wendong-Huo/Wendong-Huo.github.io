/* Parametric meshes rendered locally: no remote runtime or tracking. */
(() => {
  'use strict';
  const canvas = document.querySelector('#geometry-canvas');
  if (!canvas) return;
  const gl = canvas.getContext('webgl', {antialias:true, alpha:true, preserveDrawingBuffer:true});
  if (!gl) { document.querySelector('#toy-note').textContent = '3D rendering is unavailable. Please enable hardware acceleration or try another browser; the curve studio below remains available.'; return; }
  const $ = id => document.getElementById(id), tau = Math.PI * 2;
  const presets = {
    ribbon: { note: 'A half-turn makes a Möbius band: one continuous side. Try two half-turns to return to a two-sided ribbon.', params: [['Half-turns',1,5,1,1],['Ribbon width',15,65,1,38]] },
    knot: { note: 'Wind around a torus in two directions. Coprime winding counts give a single torus knot; shared factors retrace a simpler curve.', params: [['Long way (p)',2,5,1,2],['Short way (q)',3,8,1,3],['Tube radius',5,18,1,10]] },
    shell: { note: 'A fluted open shell, described directly by radius and height. Change the lobes, flare and twist to explore its silhouette.', params: [['Lobes',3,12,1,7],['Flare',15,85,1,55],['Twist',0,180,1,65]] }
  };
  let toy='ribbon', values=[], vertices=[], faces=[], radius=1, yaw=.5, pitch=-.45, zoom=1, spin=!matchMedia('(prefers-reduced-motion: reduce)').matches, wire=false, visible=false, dirty=true, last=0, frame=0;
  const normalize = v => {const l=Math.hypot(...v)||1;return v.map(x=>x/l);};
  const cross = (a,b) => [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  // Per-fragment lighting on smooth parametric normals, with a real depth buffer.
  const vertexSource = `
    attribute vec3 position, normal;
    attribute vec2 uv;
    uniform vec2 rotation, viewport;
    uniform float scale;
    varying vec3 vNormal, vPosition;
    varying vec2 vUv;
    vec3 turn(vec3 p) {
      float a=rotation.x,b=rotation.y;
      vec3 q=vec3(p.x*cos(a)+p.z*sin(a),p.y,-p.x*sin(a)+p.z*cos(a));
      return vec3(q.x,q.y*cos(b)-q.z*sin(b),q.y*sin(b)+q.z*cos(b));
    }
    void main(){
      vec3 p=turn(position);vPosition=p;vNormal=turn(normal);vUv=uv;
      float depth=5.0-p.z;
      gl_Position=vec4(p.xy*scale*10.0/viewport,-p.z*.5,depth);
    }`;
  const fragmentSource = `
    precision mediump float;
    varying vec3 vNormal,vPosition;
    varying vec2 vUv;
    uniform float kind,mesh;
    float stripe(float x,float center,float width){return 1.0-smoothstep(width-.004,width+.004,abs(x-center));}
    void main(){
      vec3 n=normalize(vNormal);if(!gl_FrontFacing)n=-n;
      vec3 view=normalize(vec3(0.0,0.0,5.0)-vPosition);
      float gold;
      if(kind<.5)gold=smoothstep(.409,.42,abs(vUv.y-.5));
      else if(kind<1.5)gold=stripe(vUv.y,.08,.075);
      else gold=max(smoothstep(.936,.945,vUv.y),stripe(fract(vUv.x*8.0),.07,.055));
      vec3 blue=vec3(.016,.34,.51),yellow=vec3(.80,.50,.055);
      vec3 base=mix(blue,yellow,gold);
      vec3 key=normalize(vec3(-.6,.8,1.4)),fill=normalize(vec3(1.0,.2,.5));
      float diffuse=.34+.58*max(dot(n,key),0.0)+.22*max(dot(n,fill),0.0);
      float spec=pow(max(dot(n,normalize(key+view)),0.0),52.0);
      float soft=pow(max(dot(n,normalize(fill+view)),0.0),12.0);
      float rim=pow(1.0-max(dot(n,view),0.0),3.0);
      vec3 color=base*diffuse+mix(vec3(.65,.85,1.0),vec3(1.0,.88,.52),gold)*(spec*.7+soft*.12)+vec3(.1,.2,.22)*rim;
      vec2 grid=abs(sin(vUv*vec2(56.0,16.0)*3.14159265));
      float line=1.0-smoothstep(.035,.09,min(grid.x,grid.y));
      color=mix(color,color*.55,line*mesh*.65);
      gl_FragColor=vec4(pow(max(color,vec3(0.0)),vec3(1.0/2.2)),1.0);
    }`;
  function shader(type,source){const sh=gl.createShader(type);gl.shaderSource(sh,source);gl.compileShader(sh);if(!gl.getShaderParameter(sh,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(sh));return sh;}
  const program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,vertexSource));gl.attachShader(program,shader(gl.FRAGMENT_SHADER,fragmentSource));gl.linkProgram(program);
  if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program));
  gl.useProgram(program);gl.enable(gl.DEPTH_TEST);gl.clearColor(0,0,0,0);
  const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
  [['position',3,0],['normal',3,12],['uv',2,24]].forEach(([name,size,offset])=>{const loc=gl.getAttribLocation(program,name);gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,size,gl.FLOAT,false,32,offset);});
  const uniforms=Object.fromEntries(['rotation','viewport','scale','kind','mesh'].map(name=>[name,gl.getUniformLocation(program,name)]));
  let count=0;
  function build() {
    vertices=[]; faces=[];
    const nu=toy==='knot'?480:toy==='shell'?240:192,nv=toy==='shell'?64:40;
    function center(t){const p=values[0],q=values[1],r=1+.36*Math.cos(q*t);return [r*Math.cos(p*t),.36*Math.sin(q*t),r*Math.sin(p*t)];}
    function surface(u,v){
      if(toy==='ribbon'){const w=(v-.5)*values[1]/50,a=values[0]*u/2;return [(1+w*Math.cos(a))*Math.cos(u),w*Math.sin(a),(1+w*Math.cos(a))*Math.sin(u)];}
      if(toy==='shell'){const a=u+v*values[2]*Math.PI/180,r=.42+values[1]/100*v+.13*Math.cos(values[0]*u)*(.3+.7*v);return [r*Math.cos(a),(v-.5)*2,r*Math.sin(a)];}
      const c=center(u),prev=center(u-.0001),next=center(u+.0001),t=normalize(next.map((x,k)=>x-prev[k])),a=normalize(cross(t,[0,1,0])),b=cross(t,a),r=values[2]/100;
      return c.map((x,k)=>x+r*(a[k]*Math.cos(v*tau)+b[k]*Math.sin(v*tau)));
    }
    radius=0;
    for(let i=0;i<=nu;i++)for(let j=0;j<=nv;j++){
      const u=i/nu*tau,v=j/nv,p=surface(u,v),du0=surface(u-.0001,v),du1=surface(u+.0001,v),dv0=surface(u,v-.0001),dv1=surface(u,v+.0001);
      const normal=normalize(cross(du1.map((x,k)=>x-du0[k]),dv1.map((x,k)=>x-dv0[k])));
      vertices.push([...p,...normal,i/nu,v]);radius=Math.max(radius,Math.hypot(...p));
    }
    const data=new Float32Array(nu*nv*6*8);let cursor=0;
    for(let i=0;i<nu;i++)for(let j=0;j<nv;j++){const a=i*(nv+1)+j,b=a+nv+1;for(const id of [a,b,b+1,a,b+1,a+1]){data.set(vertices[id],cursor);cursor+=8;}}
    count=data.length/8;gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);
    canvas.setAttribute('aria-label',presets[toy].note+' Current parameters: '+presets[toy].params.map((p,i)=>p[0]+' '+values[i]).join(', '));
    dirty=true;wake();
  }
  function render() {
    const w=canvas.clientWidth,h=canvas.clientHeight,dpr=Math.min(devicePixelRatio||1,2);
    if(!w||!h)return;
    if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);}
    gl.viewport(0,0,canvas.width,canvas.height);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    gl.uniform2f(uniforms.rotation,yaw,pitch);gl.uniform2f(uniforms.viewport,w,h);
    gl.uniform1f(uniforms.scale,Math.min(w,h)*.43/radius*zoom);
    gl.uniform1f(uniforms.kind,{ribbon:0,knot:1,shell:2}[toy]);gl.uniform1f(uniforms.mesh,wire?1:0);
    gl.drawArrays(gl.TRIANGLES,0,count);dirty=false;
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
  $('toy-save').addEventListener('click',()=>{render();const image=document.createElement('canvas');image.width=canvas.width;image.height=canvas.height;const context=image.getContext('2d');context.fillStyle='#f5f4ec';context.fillRect(0,0,image.width,image.height);context.drawImage(canvas,0,0);image.toBlob(blob=>{if(!blob)return;const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='wendong-'+toy+'.png';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});});
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
