(() => {
  const ids=['surface','edge','paper'],defaults=['#087eae','#e8b928','#faf9f4'];
  const inputs=ids.map(id=>document.getElementById('color-'+id));
  const preview=document.getElementById('palette-preview');
  if(!preview)return;
  function update(){inputs.forEach((input,i)=>preview.style.setProperty('--palette-'+ids[i],input.value));document.getElementById('palette-values').textContent=inputs.map((input,i)=>ids[i]+': '+input.value.toUpperCase()).join(' · ');}
  inputs.forEach(input=>input.addEventListener('input',update));
  document.getElementById('palette-reset').addEventListener('click',()=>{inputs.forEach((input,i)=>input.value=defaults[i]);update();});
  document.getElementById('palette-download').addEventListener('click',()=>{
    const colors=inputs.map(input=>input.value);
    const svg='<svg xmlns="http://www.w3.org/2000/svg" width="900" height="360" viewBox="0 0 900 360"><title>Geometry studio palette</title>'+colors.map((color,i)=>'<rect x="'+i*300+'" width="300" height="280" fill="'+color+'"/><rect x="'+i*300+'" y="280" width="300" height="80" fill="#faf9f4"/><text x="'+(i*300+24)+'" y="326" font-family="sans-serif" font-size="20" fill="#172d3b">'+ids[i]+' '+color.toUpperCase()+'</text>').join('')+'</svg>';
    const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));const a=document.createElement('a');a.href=url;a.download='wendong-studio-palette.svg';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  });update();
})();
