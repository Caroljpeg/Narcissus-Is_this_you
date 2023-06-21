let detectionData = {};

//La funzione "Promise" consente di eseguire contemporaneamente tutte le funzioni al suo interno prima di procedere con quella specificata alla sua fine
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models'),
  faceapi.nets.ageGenderNet.loadFromUri('/models'),
]).then(draw)


function draw(){
  if(video != undefined) {
    setInterval(async () => {
       detectionData = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions()
    }, 200)
  }
}
