precision mediump float;

// texcoords from the vertex shader
varying vec2 vTexCoord;

// our texture coming from p5
uniform sampler2D tex0;
uniform sampler2D tex1;




void main() {
  vec2 uv = vTexCoord;

  // the texture is loaded upside down and backwards by default so lets flip it
  uv = 1.0 - uv;
  uv.x = 1.0 - uv.x;
  
  gl_FragColor = vec4(texture2D( tex0, uv).rgb, texture2D( tex1, uv).r);
}
