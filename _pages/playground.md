---
layout: archive
title: Playground
permalink: /playground/
author_profile: true
---

<div class="play-intro"><div><p class="eyebrow">A LITTLE ROOM TO PLAY</p><h2>Play with geometry.</h2><p>Surfaces to turn, knots to untangle, curves to collect.</p></div><img src="/images/identity-pixel.png" alt="Blue and yellow pixel topology playground emblem" width="180" height="180"></div>
<section class="geometry-lab" aria-labelledby="geometry-title">
  <p class="eyebrow">THREE DIMENSIONS / ENDLESS VARIATIONS</p>
  <h2 id="geometry-title">A small cabinet of surfaces.</h2>
  <p>Twist a ribbon, tie a knot, grow a shell. Mathematical sketches in lake blue and gold.</p>
  <div class="toy-picker" aria-label="Choose a geometry toy">
    <button type="button" data-toy="ribbon" aria-pressed="true">01 / Twisted ribbon</button>
    <button type="button" data-toy="knot" aria-pressed="false">02 / Torus knot</button>
    <button type="button" data-toy="shell" aria-pressed="false">03 / Ripple shell</button>
  </div>
  <p id="toy-note"></p>
  <div class="toy-controls" id="toy-controls"></div>
  <canvas id="geometry-canvas" tabindex="0" role="img" aria-label="Interactive three-dimensional geometry. Drag to rotate; arrow keys rotate; plus and minus zoom." aria-describedby="toy-help">Enable JavaScript and canvas support to explore these three-dimensional surfaces.</canvas>
  <div class="toy-actions">
    <button type="button" id="toy-spin" aria-pressed="true">Pause rotation</button>
    <button type="button" id="toy-wire" aria-pressed="false">Show mesh</button>
    <button type="button" id="toy-reset">Reset toy</button>
    <button type="button" id="toy-save">Download PNG ↓</button>
    <label>Zoom <input id="toy-zoom" type="range" min="65" max="150" value="100"></label>
  </div>
  <p id="toy-help">Drag to rotate · Pinch or scroll to zoom · Arrow keys rotate · + / − zoom. On a phone, scroll beside the model.</p>
  <p class="muted">Exploratory mathematical geometry, not simulated or optimized research results.</p>
  <noscript>JavaScript is required for the geometry toys. The research gallery also offers downloadable models.</noscript>
</section>

<h2>And a curve to take home.</h2>
<section class="curve-lab" aria-label="Interactive curve studio"><div class="curve-controls"><label>Pattern<select id="curve-type"><option value="lissajous">Lissajous</option><option value="rosette">Rosette</option></select></label><label>Frequency A <output id="a-value">3</output><input id="curve-a" type="range" min="1" max="12" value="3"></label><label>Frequency B <output id="b-value">4</output><input id="curve-b" type="range" min="1" max="12" value="4"></label><label>Phase <output id="phase-value">45°</output><input id="curve-phase" type="range" min="0" max="180" value="45"></label><label>Palette<select id="curve-palette"><option value="blue">Lake & lemon</option><option value="coral">Coral & ink</option><option value="mint">Mint & violet</option></select></label></div><svg id="curve-art" viewBox="0 0 800 600" role="img" aria-label="Generated parametric curve"></svg><div class="action-row"><button id="curve-random" type="button">Surprise me</button><button id="curve-reset" type="button">Reset</button><button id="curve-download" type="button">Download SVG ↓</button></div><p id="curve-description" aria-live="polite"></p><noscript>Enable JavaScript to draw and export your pattern.</noscript></section>
<p class="muted">A mathematical drawing toy. All pattern generation happens in your browser.</p>