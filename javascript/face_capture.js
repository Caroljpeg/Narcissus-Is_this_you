let video = document.getElementById('video');

let canvas;
let width = 720;
let height = 540;





function setup(){
  canvas = createCanvas(width, height, WEBGL);
  canvas.id('canvas');
  pixelDensity(1);
  colorMode(HSB);

  video = createCapture({
    video: {
      deviceId: '14a0b4d6ed1c67227ac2732356f09c7e24b323c5ba5fa05eff680836afda120c'
    }}, ()=> {
    setTimeout(()=>{
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let fileName = 'personPicture_' + day + '_' + month + '_' + year + '_' + hours + '_' + minutes;

      saveCanvas(fileName, 'png');
      video.stop();
    }, 4000);
  });
  video.hide();
}





function draw(){
  translate(- width/2, - height/2);
  image(video, 0, 0, width, height); 
}