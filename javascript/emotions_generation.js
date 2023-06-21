let canvas;
let width = 720;
let height = 540;

let personPictureDetections = [];

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();
let fileName = 'emotionsPersonPicture_' + day + '_' + month + '_' + year + '_' + hours + '_' + minutes + '.png';

let personPicture;

let angrySourcePicture;
let disgustedSourcePicture;
let fearfulSourcePicture;
let happySourcePicture;
let neutralSourcePicture;
let sadSourcePicture;
let surprisedSourcePicture;

function preload(){
  let preloadFileName ='assets/personPictures/' +  'personPicture_' + day + '_' + month + '_' + year + '_' + hours + '_' + minutes + '.png';

  personPicture = loadImage(preloadFileName);

  angrySourcePicture = loadImage('assets/sourcePictures/angrySourcePicture.png');
  disgustedSourcePicture = loadImage('assets/sourcePictures/disgustedSourcePicture.png');
  fearfulSourcePicture = loadImage('assets/sourcePictures/fearfulSourcePicture.png');
  happySourcePicture = loadImage('assets/sourcePictures/happySourcePicture.png');
  neutralSourcePicture = loadImage('assets/sourcePictures/neutralSourcePicture.png');
  sadSourcePicture = loadImage('assets/sourcePictures/sadSourcePicture.png');
  surprisedSourcePicture = loadImage('assets/sourcePictures/surprisedSourcePicture.png');
}






function setup(){
    canvas = createCanvas(width, height, WEBGL);
    canvas.id('canvas');
    pixelDensity(1);
    colorMode(HSB);
    
    
    const faceMesh = new FaceMesh({locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
    }});
    
    faceMesh.setOptions({
        maxNumFaces: 1,
        minDetectionConfidence: 0.8,
        minTrackingConfidence: 0.5
    });
    
    faceMesh.onResults(gotFaces);
    
    function gotFaces(results){
        personPictureDetections = results;
    }
    
    faceMesh.send({image: canvas.elt});

    setTimeout(()=>{
        generateEmotionsPictures();
        setTimeout(()=>{
            window.location.href = 'narcissus.html';
        }, 1000);

    }, 4000);
}





function draw(){
      translate(-width / 2, -height / 2);
      image(personPicture, 0, 0, width, height);
}





function generateEmotionsPictures(){
    let emotionsCanvas = createGraphics(width * 7, height, WEBGL);
    emotionsCanvas.translate(-(width * 7) / 2, -height / 2);

    console.log(personPictureDetections);
    
    //angry
    emotionsCanvas.beginShape(TRIANGLES);
    emotionsCanvas.texture(personPicture);
    for(let a = 0; a < tassellationDatabase.length; a++){
        let personPictureVertex1 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[a][0]];
        let personPictureVertex2 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[a][1]];
        let personPictureVertex3 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[a][2]];
              
        let angrySourcePictureVertex1 = angryDatabase[tassellationDatabase[a][0]];
        let angrySourcePictureVertex2 = angryDatabase[tassellationDatabase[a][1]];
        let angrySourcePictureVertex3 = angryDatabase[tassellationDatabase[a][2]];
      
      
        emotionsCanvas.vertex(angrySourcePictureVertex1.x * width, angrySourcePictureVertex1.y * height, personPictureVertex1.x * width, personPictureVertex1.y * height);
        emotionsCanvas.vertex(angrySourcePictureVertex2.x * width, angrySourcePictureVertex2.y * height, personPictureVertex2.x * width, personPictureVertex2.y * height);
        emotionsCanvas.vertex(angrySourcePictureVertex3.x * width, angrySourcePictureVertex3.y * height, personPictureVertex3.x * width, personPictureVertex3.y * height);
        }
        emotionsCanvas.endShape();





        //disgusted
        emotionsCanvas.beginShape(TRIANGLES);
        emotionsCanvas.texture(personPicture);
        for(let b = 0; b < tassellationDatabase.length; b++){
            let personPictureVertex1 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[b][0]];
            let personPictureVertex2 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[b][1]];
            let personPictureVertex3 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[b][2]];
            
            let disgustedSourcePictureVertex1 = disgustedDatabase[tassellationDatabase[b][0]];
            let disgustedSourcePictureVertex2 = disgustedDatabase[tassellationDatabase[b][1]];
            let disgustedSourcePictureVertex3 = disgustedDatabase[tassellationDatabase[b][2]];
  
            emotionsCanvas.vertex(disgustedSourcePictureVertex1.x * width + width, disgustedSourcePictureVertex1.y * height, personPictureVertex1.x * width, personPictureVertex1.y * height);
            emotionsCanvas.vertex(disgustedSourcePictureVertex2.x * width + width, disgustedSourcePictureVertex2.y * height, personPictureVertex2.x * width, personPictureVertex2.y * height);
            emotionsCanvas.vertex(disgustedSourcePictureVertex3.x * width + width, disgustedSourcePictureVertex3.y * height, personPictureVertex3.x * width, personPictureVertex3.y * height);
        }
        emotionsCanvas.endShape();





        //fearful
        emotionsCanvas.beginShape(TRIANGLES);
        emotionsCanvas.texture(personPicture);
        for(let c = 0; c < tassellationDatabase.length; c++){
            let personPictureVertex1 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[c][0]];
            let personPictureVertex2 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[c][1]];
            let personPictureVertex3 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[c][2]];
            
            let fearfulSourcePictureVertex1 = fearfulDatabase[tassellationDatabase[c][0]];
            let fearfulSourcePictureVertex2 = fearfulDatabase[tassellationDatabase[c][1]];
            let fearfulSourcePictureVertex3 = fearfulDatabase[tassellationDatabase[c][2]];
  
            emotionsCanvas.vertex(fearfulSourcePictureVertex1.x * width + (width * 2), fearfulSourcePictureVertex1.y * height, personPictureVertex1.x * width, personPictureVertex1.y * height);
            emotionsCanvas.vertex(fearfulSourcePictureVertex2.x * width + (width * 2), fearfulSourcePictureVertex2.y * height, personPictureVertex2.x * width, personPictureVertex2.y * height);
            emotionsCanvas.vertex(fearfulSourcePictureVertex3.x * width + (width * 2), fearfulSourcePictureVertex3.y * height, personPictureVertex3.x * width, personPictureVertex3.y * height);
        }
        emotionsCanvas.endShape();





        //happy
        emotionsCanvas.beginShape(TRIANGLES);
        emotionsCanvas.texture(personPicture);
        for(let d = 0; d < tassellationDatabase.length; d++){
            let personPictureVertex1 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[d][0]];
            let personPictureVertex2 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[d][1]];
            let personPictureVertex3 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[d][2]];
            
            let happySourcePictureVertex1 = happyDatabase[tassellationDatabase[d][0]];
            let happySourcePictureVertex2 = happyDatabase[tassellationDatabase[d][1]];
            let happySourcePictureVertex3 = happyDatabase[tassellationDatabase[d][2]];
  
            emotionsCanvas.vertex(happySourcePictureVertex1.x * width + (width * 3), happySourcePictureVertex1.y * height, personPictureVertex1.x * width, personPictureVertex1.y * height);
            emotionsCanvas.vertex(happySourcePictureVertex2.x * width + (width * 3), happySourcePictureVertex2.y * height, personPictureVertex2.x * width, personPictureVertex2.y * height);
            emotionsCanvas.vertex(happySourcePictureVertex3.x * width + (width * 3), happySourcePictureVertex3.y * height, personPictureVertex3.x * width, personPictureVertex3.y * height);
        }
        emotionsCanvas.endShape();





        //neutral
        emotionsCanvas.beginShape(TRIANGLES);
        emotionsCanvas.texture(personPicture);
        for(let e = 0; e < tassellationDatabase.length; e++){
            let personPictureVertex1 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[e][0]];
            let personPictureVertex2 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[e][1]];
            let personPictureVertex3 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[e][2]];
            
            let neutralSourcePictureVertex1 = neutralDatabase[tassellationDatabase[e][0]];
            let neutralSourcePictureVertex2 = neutralDatabase[tassellationDatabase[e][1]];
            let neutralSourcePictureVertex3 = neutralDatabase[tassellationDatabase[e][2]];
  
            emotionsCanvas.vertex(neutralSourcePictureVertex1.x * width + (width * 4), neutralSourcePictureVertex1.y * height, personPictureVertex1.x * width, personPictureVertex1.y * height);
            emotionsCanvas.vertex(neutralSourcePictureVertex2.x * width + (width * 4), neutralSourcePictureVertex2.y * height, personPictureVertex2.x * width, personPictureVertex2.y * height);
            emotionsCanvas.vertex(neutralSourcePictureVertex3.x * width + (width * 4), neutralSourcePictureVertex3.y * height, personPictureVertex3.x * width, personPictureVertex3.y * height);
        }
        emotionsCanvas.endShape();





        //sad
        emotionsCanvas.beginShape(TRIANGLES);
        emotionsCanvas.texture(personPicture);
        for(let f = 0; f < tassellationDatabase.length; f++){
            let personPictureVertex1 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[f][0]];
            let personPictureVertex2 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[f][1]];
            let personPictureVertex3 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[f][2]];
            
            let sadSourcePictureVertex1 = sadDatabase[tassellationDatabase[f][0]];
            let sadSourcePictureVertex2 = sadDatabase[tassellationDatabase[f][1]];
            let sadSourcePictureVertex3 = sadDatabase[tassellationDatabase[f][2]];
  
            emotionsCanvas.vertex(sadSourcePictureVertex1.x * width + (width * 5), sadSourcePictureVertex1.y * height, personPictureVertex1.x * width, personPictureVertex1.y * height);
            emotionsCanvas.vertex(sadSourcePictureVertex2.x * width + (width * 5), sadSourcePictureVertex2.y * height, personPictureVertex2.x * width, personPictureVertex2.y * height);
            emotionsCanvas.vertex(sadSourcePictureVertex3.x * width + (width * 5), sadSourcePictureVertex3.y * height, personPictureVertex3.x * width, personPictureVertex3.y * height);
        }
        emotionsCanvas.endShape();





        //surprised
        emotionsCanvas.beginShape(TRIANGLES);
        emotionsCanvas.texture(personPicture);
        for(let g = 0; g < tassellationDatabase.length; g++){
            let personPictureVertex1 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[g][0]];
            let personPictureVertex2 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[g][1]];
            let personPictureVertex3 = personPictureDetections.multiFaceLandmarks[0][tassellationDatabase[g][2]];
            
            let surprisedSourcePictureVertex1 = surprisedDatabase[tassellationDatabase[g][0]];
            let surprisedSourcePictureVertex2 = surprisedDatabase[tassellationDatabase[g][1]];
            let surprisedSourcePictureVertex3 = surprisedDatabase[tassellationDatabase[g][2]];
  
            emotionsCanvas.vertex(surprisedSourcePictureVertex1.x * width + (width * 6), surprisedSourcePictureVertex1.y * height, personPictureVertex1.x * width, personPictureVertex1.y * height);
            emotionsCanvas.vertex(surprisedSourcePictureVertex2.x * width + (width * 6), surprisedSourcePictureVertex2.y * height, personPictureVertex2.x * width, personPictureVertex2.y * height);
            emotionsCanvas.vertex(surprisedSourcePictureVertex3.x * width + (width * 6), surprisedSourcePictureVertex3.y * height, personPictureVertex3.x * width, personPictureVertex3.y * height);
        }
        emotionsCanvas.endShape();





        let emotionsCanvasOverlayer = createGraphics(width * 7, height);
        emotionsCanvasOverlayer.tint(255, 35);
        emotionsCanvasOverlayer.image(angrySourcePicture, 0, 0, width, height);
        emotionsCanvasOverlayer.image(disgustedSourcePicture, 0 + width, 0, width, height);
        emotionsCanvasOverlayer.image(fearfulSourcePicture, 0 + (width * 2), 0, width, height);
        emotionsCanvasOverlayer.image(happySourcePicture, 0 + (width * 3), 0, width, height);
        emotionsCanvasOverlayer.image(neutralSourcePicture, 0 + (width * 4), 0, width, height);
        emotionsCanvasOverlayer.image(sadSourcePicture, 0 + (width * 5), 0, width, height);
        emotionsCanvasOverlayer.image(surprisedSourcePicture, 0 + (width * 6), 0, width, height);
        
        emotionsCanvas.blendMode(MULTIPLY);
        emotionsCanvas.image(emotionsCanvasOverlayer, 0, 0, width * 7, height);

        emotionsCanvas.save(fileName);
}





let tassellationDatabase = [
    [127,  34, 139],
    [ 11,   0,  37],
    [232, 231, 120],
    [ 72,  37,  39],
    [128, 121,  47],
    [232, 121, 128],
    [104,  69,  67],
    [175, 171, 148],
    [118,  50, 101],
    [ 73,  39,  40],
    [  9, 151, 108],
    [ 48, 115, 131],
    [194, 204, 211],
    [ 74,  40, 185],
    [ 80,  42, 183],
    [ 40,  92, 186],
    [230, 229, 118],
    [202, 212, 214],
    [ 83,  18,  17],
    [ 76,  61, 146],
    [160,  29,  30],
    [ 56, 157, 173],
    [106, 204, 194],
    [135, 214, 192],
    [203, 165,  98],
    [ 21,  71,  68],
    [ 51,  45,   4],
    [144,  24,  23],
    [ 77, 146,  91],
    [205,  50, 187],
    [201, 200,  18],
    [ 91, 106, 182],
    [ 90,  91, 181],
    [ 85,  84,  17],
    [206, 203,  36],
    [148, 171, 140],
    [ 92,  40,  39],
    [193, 189, 244],
    [159, 158,  28],
    [247, 246, 161],
    [236,   3, 196],
    [ 54,  68, 104],
    [193, 168,   8],
    [117, 228,  31],
    [189, 193,  55],
    [ 98,  97,  99],
    [126,  47, 100],
    [166,  79, 218],
    [155, 154,  26],
    [209,  49, 131],
    [135, 136, 150],
    [ 47, 126, 217],
    [223,  52,  53],
    [ 45,  51, 134],
    [211, 170, 140],
    [ 67,  69, 108],
    [ 43, 106,  91],
    [230, 119, 120],
    [226, 130, 247],
    [ 63,  53,  52],
    [238,  20, 242],
    [ 46,  70, 156],
    [ 78,  62,  96],
    [ 46,  53,  63],
    [143,  34, 227],
    [123, 117, 111],
    [ 44, 125,  19],
    [236, 134,  51],
    [216, 206, 205],
    [154, 153,  22],
    [ 39,  37, 167],
    [200, 201, 208],
    [ 36, 142, 100],
    [ 57, 212, 202],
    [ 20,  60,  99],
    [ 28, 158, 157],
    [ 35, 226, 113],
    [160, 159,  27],
    [204, 202, 210],
    [113, 225,  46],
    [ 43, 202, 204],
    [ 62,  76,  77],
    [137, 123, 116],
    [ 41,  38,  72],
    [203, 129, 142],
    [ 64,  98, 240],
    [ 49, 102,  64],
    [ 41,  73,  74],
    [212, 216, 207],
    [ 42,  74, 184],
    [169, 170, 211],
    [170, 149, 176],
    [105,  66,  69],
    [122,   6, 168],
    [123, 147, 187],
    [ 96,  77,  90],
    [ 65,  55, 107],
    [ 89,  90, 180],
    [101, 100, 120],
    [ 63, 105, 104],
    [ 93, 137, 227],
    [ 15,  86,  85],
    [129, 102,  49],
    [ 14,  87,  86],
    [ 55,   8,   9],
    [100,  47, 121],
    [145,  23,  22],
    [ 88,  89, 179],
    [  6, 122, 196],
    [ 88,  95,  96],
    [138, 172, 136],
    [215,  58, 172],
    [115,  48, 219],
    [ 42,  80,  81],
    [195,   3,  51],
    [ 43, 146,  61],
    [171, 175, 199],
    [ 81,  82,  38],
    [ 53,  46, 225],
    [144, 163, 110],
    [ 52,  65,  66],
    [229, 228, 117],
    [ 34, 127, 234],
    [107, 108,  69],
    [109, 108, 151],
    [ 48,  64, 235],
    [ 62,  78, 191],
    [129, 209, 126],
    [111,  35, 143],
    [117, 123,  50],
    [222,  65,  52],
    [ 19, 125, 141],
    [221,  55,  65],
    [  3, 195, 197],
    [ 25,   7,  33],
    [220, 237,  44],
    [ 70,  71, 139],
    [122, 193, 245],
    [247, 130,  33],
    [ 71,  21, 162],
    [170, 169, 150],
    [188, 174, 196],
    [216, 186,  92],
    [  2,  97, 167],
    [141, 125, 241],
    [164, 167,  37],
    [ 72,  38,  12],
    [ 38,  82,  13],
    [ 63,  68,  71],
    [226,  35, 111],
    [101,  50, 205],
    [206,  92, 165],
    [209, 198, 217],
    [165, 167,  97],
    [220, 115, 218],
    [133, 112, 243],
    [239, 238, 241],
    [214, 135, 169],
    [190, 173, 133],
    [171, 208,  32],
    [125,  44, 237],
    [ 86,  87, 178],
    [ 85,  86, 179],
    [ 84,  85, 180],
    [ 83,  84, 181],
    [201,  83, 182],
    [137,  93, 132],
    [ 76,  62, 183],
    [ 61,  76, 184],
    [ 57,  61, 185],
    [212,  57, 186],
    [214, 207, 187],
    [ 34, 143, 156],
    [ 79, 239, 237],
    [123, 137, 177],
    [ 44,   1,   4],
    [201, 194,  32],
    [ 64, 102, 129],
    [213, 215, 138],
    [ 59, 166, 219],
    [242,  99,  97],
    [  2,  94, 141],
    [ 75,  59, 235],
    [ 24, 110, 228],
    [ 25, 130, 226],
    [ 23,  24, 229],
    [ 22,  23, 230],
    [ 26,  22, 231],
    [112,  26, 232],
    [189, 190, 243],
    [221,  56, 190],
    [ 28,  56, 221],
    [ 27,  28, 222],
    [ 29,  27, 223],
    [ 30,  29, 224],
    [247,  30, 225],
    [238,  79,  20],
    [166,  59,  75],
    [ 60,  75, 240],
    [147, 177, 215],
    [ 20,  79, 166],
    [187, 147, 213],
    [112, 233, 244],
    [233, 128, 245],
    [128, 114, 188],
    [114, 217, 174],
    [131, 115, 220],
    [217, 198, 236],
    [198, 131, 134],
    [177, 132,  58],
    [143,  35, 124],
    [110, 163,   7],
    [228, 110,  25],
    [356, 389, 368],
    [ 11, 302, 267],
    [452, 350, 349],
    [302, 303, 269],
    [357, 343, 277],
    [452, 453, 357],
    [333, 332, 297],
    [175, 152, 377],
    [347, 348, 330],
    [303, 304, 270],
    [  9, 336, 337],
    [278, 279, 360],
    [418, 262, 431],
    [304, 408, 409],
    [310, 415, 407],
    [270, 409, 410],
    [450, 348, 347],
    [422, 430, 434],
    [313, 314,  17],
    [306, 307, 375],
    [387, 388, 260],
    [286, 414, 398],
    [335, 406, 418],
    [364, 367, 416],
    [423, 358, 327],
    [251, 284, 298],
    [281,   5,   4],
    [373, 374, 253],
    [307, 320, 321],
    [425, 427, 411],
    [421, 313,  18],
    [321, 405, 406],
    [320, 404, 405],
    [315,  16,  17],
    [426, 425, 266],
    [377, 400, 369],
    [322, 391, 269],
    [417, 465, 464],
    [386, 257, 258],
    [466, 260, 388],
    [456, 399, 419],
    [284, 332, 333],
    [417, 285,   8],
    [346, 340, 261],
    [413, 441, 285],
    [327, 460, 328],
    [355, 371, 329],
    [392, 439, 438],
    [382, 341, 256],
    [429, 420, 360],
    [364, 394, 379],
    [277, 343, 437],
    [443, 444, 283],
    [275, 440, 363],
    [431, 262, 369],
    [297, 338, 337],
    [273, 375, 321],
    [450, 451, 349],
    [446, 342, 467],
    [293, 334, 282],
    [458, 461, 462],
    [276, 353, 383],
    [308, 324, 325],
    [276, 300, 293],
    [372, 345, 447],
    [352, 345, 340],
    [274,   1,  19],
    [456, 248, 281],
    [436, 427, 425],
    [381, 256, 252],
    [269, 391, 393],
    [200, 199, 428],
    [266, 330, 329],
    [287, 273, 422],
    [250, 462, 328],
    [258, 286, 384],
    [265, 353, 342],
    [387, 259, 257],
    [424, 431, 430],
    [342, 353, 276],
    [273, 335, 424],
    [292, 325, 307],
    [366, 447, 345],
    [271, 303, 302],
    [423, 266, 371],
    [294, 455, 460],
    [279, 278, 294],
    [271, 272, 304],
    [432, 434, 427],
    [272, 407, 408],
    [394, 430, 431],
    [395, 369, 400],
    [334, 333, 299],
    [351, 417, 168],
    [352, 280, 411],
    [325, 319, 320],
    [295, 296, 336],
    [319, 403, 404],
    [330, 348, 349],
    [293, 298, 333],
    [323, 454, 447],
    [ 15,  16, 315],
    [358, 429, 279],
    [ 14,  15, 316],
    [285, 336,   9],
    [329, 349, 350],
    [374, 380, 252],
    [318, 402, 403],
    [  6, 197, 419],
    [318, 319, 325],
    [367, 364, 365],
    [435, 367, 397],
    [344, 438, 439],
    [272, 271, 311],
    [195,   5, 281],
    [273, 287, 291],
    [396, 428, 199],
    [311, 271, 268],
    [283, 444, 445],
    [373, 254, 339],
    [282, 334, 296],
    [449, 347, 346],
    [264, 447, 454],
    [336, 296, 299],
    [338,  10, 151],
    [278, 439, 455],
    [292, 407, 415],
    [358, 371, 355],
    [340, 345, 372],
    [346, 347, 280],
    [442, 443, 282],
    [ 19,  94, 370],
    [441, 442, 295],
    [248, 419, 197],
    [263, 255, 359],
    [440, 275, 274],
    [300, 383, 368],
    [351, 412, 465],
    [263, 467, 466],
    [301, 368, 389],
    [395, 378, 379],
    [412, 351, 419],
    [436, 426, 322],
    [  2, 164, 393],
    [370, 462, 461],
    [164,   0, 267],
    [302,  11,  12],
    [268,  12,  13],
    [293, 300, 301],
    [446, 261, 340],
    [330, 266, 425],
    [426, 423, 391],
    [429, 355, 437],
    [391, 327, 326],
    [440, 457, 438],
    [341, 382, 362],
    [459, 457, 461],
    [434, 430, 394],
    [414, 463, 362],
    [396, 369, 262],
    [354, 461, 457],
    [316, 403, 402],
    [315, 404, 403],
    [314, 405, 404],
    [313, 406, 405],
    [421, 418, 406],
    [366, 401, 361],
    [306, 408, 407],
    [291, 409, 408],
    [287, 410, 409],
    [432, 436, 410],
    [434, 416, 411],
    [264, 368, 383],
    [309, 438, 457],
    [352, 376, 401],
    [274, 275,   4],
    [421, 428, 262],
    [294, 327, 358],
    [433, 416, 367],
    [289, 455, 439],
    [462, 370, 326],
    [  2, 326, 370],
    [305, 460, 455],
    [254, 449, 448],
    [255, 261, 446],
    [253, 450, 449],
    [252, 451, 450],
    [256, 452, 451],
    [341, 453, 452],
    [413, 464, 463],
    [441, 413, 414],
    [258, 442, 441],
    [257, 443, 442],
    [259, 444, 443],
    [260, 445, 444],
    [467, 342, 445],
    [459, 458, 250],
    [289, 392, 290],
    [290, 328, 460],
    [376, 433, 435],
    [250, 290, 392],
    [411, 416, 433],
    [341, 463, 464],
    [453, 464, 465],
    [357, 465, 412],
    [343, 412, 399],
    [360, 363, 440],
    [437, 399, 456],
    [420, 456, 363],
    [401, 435, 288],
    [372, 383, 353],
    [339, 255, 249],
    [448, 261, 255],
    [133, 243, 190],
    [133, 155, 112],
    [ 33, 246, 247],
    [ 33, 130,  25],
    [398, 384, 286],
    [362, 398, 414],
    [362, 463, 341],
    [263, 359, 467],
    [263, 249, 255],
    [466, 467, 260],
    [ 75,  60, 166],
    [238, 239,  79],
    [162, 127, 139],
    [ 72,  11,  37],
    [121, 232, 120],
    [ 73,  72,  39],
    [114, 128,  47],
    [233, 232, 128],
    [103, 104,  67],
    [152, 175, 148],
    [119, 118, 101],
    [ 74,  73,  40],
    [107,   9, 108],
    [ 49,  48, 131],
    [ 32, 194, 211],
    [184,  74, 185],
    [191,  80, 183],
    [185,  40, 186],
    [119, 230, 118],
    [210, 202, 214],
    [ 84,  83,  17],
    [ 77,  76, 146],
    [161, 160,  30],
    [190,  56, 173],
    [182, 106, 194],
    [138, 135, 192],
    [129, 203,  98],
    [ 54,  21,  68],
    [  5,  51,   4],
    [145, 144,  23],
    [ 90,  77,  91],
    [207, 205, 187],
    [ 83, 201,  18],
    [181,  91, 182],
    [180,  90, 181],
    [ 16,  85,  17],
    [205, 206,  36],
    [176, 148, 140],
    [165,  92,  39],
    [245, 193, 244],
    [ 27, 159,  28],
    [ 30, 247, 161],
    [174, 236, 196],
    [103,  54, 104],
    [ 55, 193,   8],
    [111, 117,  31],
    [221, 189,  55],
    [240,  98,  99],
    [142, 126, 100],
    [219, 166, 218],
    [112, 155,  26],
    [198, 209, 131],
    [169, 135, 150],
    [114,  47, 217],
    [224, 223,  53],
    [220,  45, 134],
    [ 32, 211, 140],
    [109,  67, 108],
    [146,  43,  91],
    [231, 230, 120],
    [113, 226, 247],
    [105,  63,  52],
    [241, 238, 242],
    [124,  46, 156],
    [ 95,  78,  96],
    [ 70,  46,  63],
    [116, 143, 227],
    [116, 123, 111],
    [  1,  44,  19],
    [  3, 236,  51],
    [207, 216, 205],
    [ 26, 154,  22],
    [165,  39, 167],
    [199, 200, 208],
    [101,  36, 100],
    [ 43,  57, 202],
    [242,  20,  99],
    [ 56,  28, 157],
    [124,  35, 113],
    [ 29, 160,  27],
    [211, 204, 210],
    [124, 113,  46],
    [106,  43, 204],
    [ 96,  62,  77],
    [227, 137, 116],
    [ 73,  41,  72],
    [ 36, 203, 142],
    [235,  64, 240],
    [ 48,  49,  64],
    [ 42,  41,  74],
    [214, 212, 207],
    [183,  42, 184],
    [210, 169, 211],
    [140, 170, 176],
    [104, 105,  69],
    [193, 122, 168],
    [ 50, 123, 187],
    [ 89,  96,  90],
    [ 66,  65, 107],
    [179,  89, 180],
    [119, 101, 120],
    [ 68,  63, 104],
    [234,  93, 227],
    [ 16,  15,  85],
    [209, 129,  49],
    [ 15,  14,  86],
    [107,  55,   9],
    [120, 100, 121],
    [153, 145,  22],
    [178,  88, 179],
    [197,   6, 196],
    [ 89,  88,  96],
    [135, 138, 136],
    [138, 215, 172],
    [218, 115, 219],
    [ 41,  42,  81],
    [  5, 195,  51],
    [ 57,  43,  61],
    [208, 171, 199],
    [ 41,  81,  38],
    [224,  53, 225],
    [ 24, 144, 110],
    [105,  52,  66],
    [118, 229, 117],
    [227,  34, 234],
    [ 66, 107,  69],
    [ 10, 109, 151],
    [219,  48, 235],
    [183,  62, 191],
    [142, 129, 126],
    [116, 111, 143],
    [118, 117,  50],
    [223, 222,  52],
    [ 94,  19, 141],
    [222, 221,  65],
    [196,   3, 197],
    [ 45, 220,  44],
    [156,  70, 139],
    [188, 122, 245],
    [139,  71, 162],
    [149, 170, 150],
    [122, 188, 196],
    [206, 216,  92],
    [164,   2, 167],
    [242, 141, 241],
    [  0, 164,  37],
    [ 11,  72,  12],
    [ 12,  38,  13],
    [ 70,  63,  71],
    [ 31, 226, 111],
    [ 36, 101, 205],
    [203, 206, 165],
    [126, 209, 217],
    [ 98, 165,  97],
    [237, 220, 218],
    [237, 239, 241],
    [210, 214, 169],
    [140, 171,  32],
    [241, 125, 237],
    [179,  86, 178],
    [180,  85, 179],
    [181,  84, 180],
    [182,  83, 181],
    [194, 201, 182],
    [177, 137, 132],
    [184,  76, 183],
    [185,  61, 184],
    [186,  57, 185],
    [216, 212, 186],
    [192, 214, 187],
    [139,  34, 156],
    [218,  79, 237],
    [147, 123, 177],
    [ 45,  44,   4],
    [208, 201,  32],
    [ 98,  64, 129],
    [192, 213, 138],
    [235,  59, 219],
    [141, 242,  97],
    [ 97,   2, 141],
    [240,  75, 235],
    [229,  24, 228],
    [ 31,  25, 226],
    [230,  23, 229],
    [231,  22, 230],
    [232,  26, 231],
    [233, 112, 232],
    [244, 189, 243],
    [189, 221, 190],
    [222,  28, 221],
    [223,  27, 222],
    [224,  29, 223],
    [225,  30, 224],
    [113, 247, 225],
    [ 99,  60, 240],
    [213, 147, 215],
    [ 60,  20, 166],
    [192, 187, 213],
    [243, 112, 244],
    [244, 233, 245],
    [245, 128, 188],
    [188, 114, 174],
    [134, 131, 220],
    [174, 217, 236],
    [236, 198, 134],
    [215, 177,  58],
    [156, 143, 124],
    [ 25, 110,   7],
    [ 31, 228,  25],
    [264, 356, 368],
    [  0,  11, 267],
    [451, 452, 349],
    [267, 302, 269],
    [350, 357, 277],
    [350, 452, 357],
    [299, 333, 297],
    [396, 175, 377],
    [280, 347, 330],
    [269, 303, 270],
    [151,   9, 337],
    [344, 278, 360],
    [424, 418, 431],
    [270, 304, 409],
    [272, 310, 407],
    [322, 270, 410],
    [449, 450, 347],
    [432, 422, 434],
    [ 18, 313,  17],
    [291, 306, 375],
    [259, 387, 260],
    [424, 335, 418],
    [434, 364, 416],
    [391, 423, 327],
    [301, 251, 298],
    [275, 281,   4],
    [254, 373, 253],
    [375, 307, 321],
    [280, 425, 411],
    [200, 421,  18],
    [335, 321, 406],
    [321, 320, 405],
    [314, 315,  17],
    [423, 426, 266],
    [396, 377, 369],
    [270, 322, 269],
    [413, 417, 464],
    [385, 386, 258],
    [248, 456, 419],
    [298, 284, 333],
    [168, 417,   8],
    [448, 346, 261],
    [417, 413, 285],
    [326, 327, 328],
    [277, 355, 329],
    [309, 392, 438],
    [381, 382, 256],
    [279, 429, 360],
    [365, 364, 379],
    [355, 277, 437],
    [282, 443, 283],
    [281, 275, 363],
    [395, 431, 369],
    [299, 297, 337],
    [335, 273, 321],
    [348, 450, 349],
    [359, 446, 467],
    [283, 293, 282],
    [250, 458, 462],
    [300, 276, 383],
    [292, 308, 325],
    [283, 276, 293],
    [264, 372, 447],
    [346, 352, 340],
    [354, 274,  19],
    [363, 456, 281],
    [426, 436, 425],
    [380, 381, 252],
    [267, 269, 393],
    [421, 200, 428],
    [371, 266, 329],
    [432, 287, 422],
    [290, 250, 328],
    [385, 258, 384],
    [446, 265, 342],
    [386, 387, 257],
    [422, 424, 430],
    [445, 342, 276],
    [422, 273, 424],
    [306, 292, 307],
    [352, 366, 345],
    [268, 271, 302],
    [358, 423, 371],
    [327, 294, 460],
    [331, 279, 294],
    [303, 271, 304],
    [436, 432, 427],
    [304, 272, 408],
    [395, 394, 431],
    [378, 395, 400],
    [296, 334, 299],
    [  6, 351, 168],
    [376, 352, 411],
    [307, 325, 320],
    [285, 295, 336],
    [320, 319, 404],
    [329, 330, 349],
    [334, 293, 333],
    [366, 323, 447],
    [316,  15, 315],
    [331, 358, 279],
    [317,  14, 316],
    [  8, 285,   9],
    [277, 329, 350],
    [253, 374, 252],
    [319, 318, 403],
    [351,   6, 419],
    [324, 318, 325],
    [397, 367, 365],
    [288, 435, 397],
    [278, 344, 439],
    [310, 272, 311],
    [248, 195, 281],
    [375, 273, 291],
    [175, 396, 199],
    [312, 311, 268],
    [276, 283, 445],
    [390, 373, 339],
    [295, 282, 296],
    [448, 449, 346],
    [356, 264, 454],
    [337, 336, 299],
    [337, 338, 151],
    [294, 278, 455],
    [308, 292, 415],
    [429, 358, 355],
    [265, 340, 372],
    [352, 346, 280],
    [295, 442, 282],
    [354,  19, 370],
    [285, 441, 295],
    [195, 248, 197],
    [457, 440, 274],
    [301, 300, 368],
    [417, 351, 465],
    [251, 301, 389],
    [394, 395, 379],
    [399, 412, 419],
    [410, 436, 322],
    [326,   2, 393],
    [354, 370, 461],
    [393, 164, 267],
    [268, 302,  12],
    [312, 268,  13],
    [298, 293, 301],
    [265, 446, 340],
    [280, 330, 425],
    [322, 426, 391],
    [420, 429, 437],
    [393, 391, 326],
    [344, 440, 438],
    [458, 459, 461],
    [364, 434, 394],
    [428, 396, 262],
    [274, 354, 457],
    [317, 316, 402],
    [316, 315, 403],
    [315, 314, 404],
    [314, 313, 405],
    [313, 421, 406],
    [323, 366, 361],
    [292, 306, 407],
    [306, 291, 408],
    [291, 287, 409],
    [287, 432, 410],
    [427, 434, 411],
    [372, 264, 383],
    [459, 309, 457],
    [366, 352, 401],
    [  1, 274,   4],
    [418, 421, 262],
    [331, 294, 358],
    [435, 433, 367],
    [392, 289, 439],
    [328, 462, 326],
    [ 94,   2, 370],
    [289, 305, 455],
    [339, 254, 448],
    [359, 255, 446],
    [254, 253, 449],
    [253, 252, 450],
    [252, 256, 451],
    [256, 341, 452],
    [414, 413, 463],
    [286, 441, 414],
    [286, 258, 441],
    [258, 257, 442],
    [257, 259, 443],
    [259, 260, 444],
    [260, 467, 445],
    [309, 459, 250],
    [305, 289, 290],
    [305, 290, 460],
    [401, 376, 435],
    [309, 250, 392],
    [376, 411, 433],
    [453, 341, 464],
    [357, 453, 465],
    [343, 357, 412],
    [437, 343, 399],
    [344, 360, 440],
    [420, 437, 456],
    [360, 420, 363],
    [361, 401, 288],
    [265, 372, 353],
    [390, 339, 249],
    [339, 448, 255],
    [255, 339, 448]
]

let angryDatabase = [
    {
        "x": 0.4876590371131897,
        "y": 0.7200874090194702,
        "z": -0.027816182002425194
    },
    {
        "x": 0.48459336161613464,
        "y": 0.659082293510437,
        "z": -0.08924708515405655
    },
    {
        "x": 0.4871804714202881,
        "y": 0.6710741519927979,
        "z": -0.03745239973068237
    },
    {
        "x": 0.4712250232696533,
        "y": 0.5710274577140808,
        "z": -0.08017110824584961
    },
    {
        "x": 0.48433879017829895,
        "y": 0.6363682746887207,
        "z": -0.09921944886445999
    },
    {
        "x": 0.48486602306365967,
        "y": 0.6008171439170837,
        "z": -0.09798690676689148
    },
    {
        "x": 0.48790162801742554,
        "y": 0.5076322555541992,
        "z": -0.0692463219165802
    },
    {
        "x": 0.36864084005355835,
        "y": 0.4720582962036133,
        "z": 0.004611519630998373
    },
    {
        "x": 0.48883378505706787,
        "y": 0.45087116956710815,
        "z": -0.0708710327744484
    },
    {
        "x": 0.4886429011821747,
        "y": 0.42068779468536377,
        "z": -0.08241209387779236
    },
    {
        "x": 0.48846635222435,
        "y": 0.2836775779724121,
        "z": -0.08958323299884796
    },
    {
        "x": 0.48801296949386597,
        "y": 0.7311489582061768,
        "z": -0.02344626747071743
    },
    {
        "x": 0.48862916231155396,
        "y": 0.7377322316169739,
        "z": -0.01586894877254963
    },
    {
        "x": 0.48928868770599365,
        "y": 0.7392363548278809,
        "z": -0.006810482125729322
    },
    {
        "x": 0.4896986484527588,
        "y": 0.7437248229980469,
        "z": -0.0013708503684028983
    },
    {
        "x": 0.48960694670677185,
        "y": 0.7544808387756348,
        "z": -0.0023355227895081043
    },
    {
        "x": 0.4899430274963379,
        "y": 0.767633855342865,
        "z": -0.0031303707510232925
    },
    {
        "x": 0.4905133843421936,
        "y": 0.779595136642456,
        "z": 0.0029097741935402155
    },
    {
        "x": 0.49216848611831665,
        "y": 0.7957563996315002,
        "z": 0.02578529343008995
    },
    {
        "x": 0.4851917326450348,
        "y": 0.667756974697113,
        "z": -0.07809820026159286
    },
    {
        "x": 0.469798743724823,
        "y": 0.6594556570053101,
        "z": -0.0522988997399807
    },
    {
        "x": 0.3113190829753876,
        "y": 0.3609260618686676,
        "z": 0.06442821770906448
    },
    {
        "x": 0.42099741101264954,
        "y": 0.49526315927505493,
        "z": -0.011127873323857784
    },
    {
        "x": 0.404402494430542,
        "y": 0.4965056777000427,
        "z": -0.009384109638631344
    },
    {
        "x": 0.38737720251083374,
        "y": 0.4956499934196472,
        "z": -0.004432941321283579
    },
    {
        "x": 0.3638739585876465,
        "y": 0.4791576564311981,
        "z": 0.009131998755037785
    },
    {
        "x": 0.43380582332611084,
        "y": 0.4912738502025604,
        "z": -0.011429005302488804
    },
    {
        "x": 0.3916069567203522,
        "y": 0.44640934467315674,
        "z": -0.0265976469963789
    },
    {
        "x": 0.4101957082748413,
        "y": 0.4478863477706909,
        "z": -0.0279422365128994
    },
    {
        "x": 0.3753455877304077,
        "y": 0.44795578718185425,
        "z": -0.019944733008742332
    },
    {
        "x": 0.36499953269958496,
        "y": 0.4522812068462372,
        "z": -0.011443011462688446
    },
    {
        "x": 0.3519873023033142,
        "y": 0.4933207035064697,
        "z": 0.02050497941672802
    },
    {
        "x": 0.43213436007499695,
        "y": 0.8187518119812012,
        "z": 0.05781731754541397
    },
    {
        "x": 0.3614192605018616,
        "y": 0.46477723121643066,
        "z": 0.00905496533960104
    },
    {
        "x": 0.30799058079719543,
        "y": 0.46217453479766846,
        "z": 0.09641822427511215
    },
    {
        "x": 0.3327670693397522,
        "y": 0.473905086517334,
        "z": 0.03442707657814026
    },
    {
        "x": 0.4066251516342163,
        "y": 0.6038146018981934,
        "z": -0.006001628004014492
    },
    {
        "x": 0.4668651223182678,
        "y": 0.7143934965133667,
        "z": -0.025281071662902832
    },
    {
        "x": 0.47161665558815,
        "y": 0.7353826761245728,
        "z": -0.012654541060328484
    },
    {
        "x": 0.44712793827056885,
        "y": 0.7161860466003418,
        "z": -0.012955673970282078
    },
    {
        "x": 0.43633368611335754,
        "y": 0.7205047011375427,
        "z": 0.0017945357831194997
    },
    {
        "x": 0.4575197696685791,
        "y": 0.7327784299850464,
        "z": -0.005213783122599125
    },
    {
        "x": 0.44744619727134705,
        "y": 0.7314305305480957,
        "z": 0.007773404009640217
    },
    {
        "x": 0.41819047927856445,
        "y": 0.745629072189331,
        "z": 0.039581332355737686
    },
    {
        "x": 0.47026729583740234,
        "y": 0.6570722460746765,
        "z": -0.08739827573299408
    },
    {
        "x": 0.4675452709197998,
        "y": 0.6346197128295898,
        "z": -0.09664232283830643
    },
    {
        "x": 0.3389677107334137,
        "y": 0.43007299304008484,
        "z": -0.01379604171961546
    },
    {
        "x": 0.4389468729496002,
        "y": 0.5454376339912415,
        "z": -0.023432262241840363
    },
    {
        "x": 0.432369202375412,
        "y": 0.6334888935089111,
        "z": -0.04255063459277153
    },
    {
        "x": 0.43205350637435913,
        "y": 0.617945671081543,
        "z": -0.0390210896730423
    },
    {
        "x": 0.3602297008037567,
        "y": 0.5911587476730347,
        "z": 0.015980998054146767
    },
    {
        "x": 0.4689484238624573,
        "y": 0.6014723181724548,
        "z": -0.09160011261701584
    },
    {
        "x": 0.37613892555236816,
        "y": 0.42062604427337646,
        "z": -0.051262449473142624
    },
    {
        "x": 0.35338422656059265,
        "y": 0.42147642374038696,
        "z": -0.035743653774261475
    },
    {
        "x": 0.32347312569618225,
        "y": 0.32853928208351135,
        "z": 0.02015482634305954
    },
    {
        "x": 0.45167410373687744,
        "y": 0.4458256959915161,
        "z": -0.06482038646936417
    },
    {
        "x": 0.4269510507583618,
        "y": 0.4541166424751282,
        "z": -0.021877581253647804
    },
    {
        "x": 0.4053744673728943,
        "y": 0.7242189049720764,
        "z": 0.039189163595438004
    },
    {
        "x": 0.3364282250404358,
        "y": 0.6622152328491211,
        "z": 0.19720636308193207
    },
    {
        "x": 0.44480836391448975,
        "y": 0.6465265154838562,
        "z": -0.03361472114920616
    },
    {
        "x": 0.4590733051300049,
        "y": 0.6557072401046753,
        "z": -0.034539125859737396
    },
    {
        "x": 0.4241669476032257,
        "y": 0.7280895113945007,
        "z": 0.03610781207680702
    },
    {
        "x": 0.43179088830947876,
        "y": 0.7276074290275574,
        "z": 0.030701445415616035
    },
    {
        "x": 0.34423887729644775,
        "y": 0.40325936675071716,
        "z": -0.03033728525042534
    },
    {
        "x": 0.4327639043331146,
        "y": 0.6397700309753418,
        "z": -0.030701445415616035
    },
    {
        "x": 0.40790653228759766,
        "y": 0.4272333085536957,
        "z": -0.06140289083123207
    },
    {
        "x": 0.4040411710739136,
        "y": 0.4074528217315674,
        "z": -0.06947042047977448
    },
    {
        "x": 0.3857698142528534,
        "y": 0.28989022970199585,
        "z": -0.060226377099752426
    },
    {
        "x": 0.3341450095176697,
        "y": 0.36485785245895386,
        "z": -0.009258054196834564
    },
    {
        "x": 0.396484911441803,
        "y": 0.3474254906177521,
        "z": -0.06700534373521805
    },
    {
        "x": 0.32923537492752075,
        "y": 0.41498464345932007,
        "z": -0.0009681739611551166
    },
    {
        "x": 0.32037779688835144,
        "y": 0.3893015384674072,
        "z": 0.02913275733590126
    },
    {
        "x": 0.46899643540382385,
        "y": 0.7272748947143555,
        "z": -0.02095317468047142
    },
    {
        "x": 0.452862411737442,
        "y": 0.727030336856842,
        "z": -0.00970625039190054
    },
    {
        "x": 0.44188231229782104,
        "y": 0.7268639206886292,
        "z": 0.0034630163572728634
    },
    {
        "x": 0.449259489774704,
        "y": 0.6501798033714294,
        "z": -0.030253248289227486
    },
    {
        "x": 0.4281979203224182,
        "y": 0.7284494042396545,
        "z": 0.03308248519897461
    },
    {
        "x": 0.4346402883529663,
        "y": 0.7351210117340088,
        "z": 0.024454709142446518
    },
    {
        "x": 0.4333747625350952,
        "y": 0.7258385419845581,
        "z": 0.029945114627480507
    },
    {
        "x": 0.45242464542388916,
        "y": 0.6469408273696899,
        "z": -0.06095468997955322
    },
    {
        "x": 0.45127344131469727,
        "y": 0.7293968200683594,
        "z": 0.010910777375102043
    },
    {
        "x": 0.46177732944488525,
        "y": 0.7328429818153381,
        "z": 0.0025018455926328897
    },
    {
        "x": 0.47474363446235657,
        "y": 0.7366253137588501,
        "z": -0.004191335290670395
    },
    {
        "x": 0.47068193554878235,
        "y": 0.7924425601959229,
        "z": 0.027059849351644516
    },
    {
        "x": 0.4703713357448578,
        "y": 0.7763017416000366,
        "z": 0.00441543385386467
    },
    {
        "x": 0.470707505941391,
        "y": 0.7631588578224182,
        "z": -0.0009209032286889851
    },
    {
        "x": 0.4719349145889282,
        "y": 0.7506271600723267,
        "z": 0.000050498674681875855
    },
    {
        "x": 0.4735824465751648,
        "y": 0.7413887977600098,
        "z": 0.0012124058557674289
    },
    {
        "x": 0.44899436831474304,
        "y": 0.733844518661499,
        "z": 0.014874514192342758
    },
    {
        "x": 0.4462748169898987,
        "y": 0.737389087677002,
        "z": 0.01339686755090952
    },
    {
        "x": 0.44263598322868347,
        "y": 0.7436091303825378,
        "z": 0.013529924675822258
    },
    {
        "x": 0.4394376575946808,
        "y": 0.7507322430610657,
        "z": 0.018278004601597786
    },
    {
        "x": 0.42110884189605713,
        "y": 0.6924839615821838,
        "z": 0.0030795985367149115
    },
    {
        "x": 0.31578999757766724,
        "y": 0.5462602376937866,
        "z": 0.19474127888679504
    },
    {
        "x": 0.48608553409576416,
        "y": 0.6680694222450256,
        "z": -0.0522988997399807
    },
    {
        "x": 0.4420732855796814,
        "y": 0.7307513952255249,
        "z": 0.023908469825983047
    },
    {
        "x": 0.43847009539604187,
        "y": 0.7327885627746582,
        "z": 0.023180151358246803
    },
    {
        "x": 0.4652482867240906,
        "y": 0.667454719543457,
        "z": -0.031905971467494965
    },
    {
        "x": 0.4391578733921051,
        "y": 0.652118444442749,
        "z": -0.015098612755537033
    },
    {
        "x": 0.4621569812297821,
        "y": 0.6620291471481323,
        "z": -0.03411894291639328
    },
    {
        "x": 0.42317184805870056,
        "y": 0.555657148361206,
        "z": -0.01324279885739088
    },
    {
        "x": 0.39705589413642883,
        "y": 0.5696044564247131,
        "z": -0.0047445776872336864
    },
    {
        "x": 0.4304237961769104,
        "y": 0.6250925660133362,
        "z": -0.026975812390446663
    },
    {
        "x": 0.3464277982711792,
        "y": 0.3042348027229309,
        "z": -0.02313813380897045
    },
    {
        "x": 0.35814112424850464,
        "y": 0.3498324751853943,
        "z": -0.040029529482126236
    },
    {
        "x": 0.36948394775390625,
        "y": 0.3994585871696472,
        "z": -0.05224287882447243
    },
    {
        "x": 0.43215492367744446,
        "y": 0.7637697458267212,
        "z": 0.034651175141334534
    },
    {
        "x": 0.44497841596603394,
        "y": 0.4162907600402832,
        "z": -0.07882651686668396
    },
    {
        "x": 0.43860626220703125,
        "y": 0.34881097078323364,
        "z": -0.08230003714561462
    },
    {
        "x": 0.4315408170223236,
        "y": 0.28378593921661377,
        "z": -0.08207594603300095
    },
    {
        "x": 0.372526615858078,
        "y": 0.489448606967926,
        "z": 0.002781968330964446
    },
    {
        "x": 0.3353923261165619,
        "y": 0.5077111721038818,
        "z": 0.03406291827559471
    },
    {
        "x": 0.4414578080177307,
        "y": 0.4875051975250244,
        "z": -0.010399553924798965
    },
    {
        "x": 0.34818053245544434,
        "y": 0.45352035760879517,
        "z": 0.0035715640988200903
    },
    {
        "x": 0.44980478286743164,
        "y": 0.5336495041847229,
        "z": -0.033194538205862045
    },
    {
        "x": 0.4415770471096039,
        "y": 0.6312379240989685,
        "z": -0.0622432604432106
    },
    {
        "x": 0.3197319209575653,
        "y": 0.5176336169242859,
        "z": 0.05792936682701111
    },
    {
        "x": 0.34697842597961426,
        "y": 0.5288040041923523,
        "z": 0.021933605894446373
    },
    {
        "x": 0.36849039793014526,
        "y": 0.542277991771698,
        "z": 0.007041583303362131
    },
    {
        "x": 0.40066421031951904,
        "y": 0.5406739115715027,
        "z": -0.0030480846762657166
    },
    {
        "x": 0.42337310314178467,
        "y": 0.5320535898208618,
        "z": -0.009258054196834564
    },
    {
        "x": 0.43890872597694397,
        "y": 0.5236234068870544,
        "z": -0.017381610348820686
    },
    {
        "x": 0.47128376364707947,
        "y": 0.5115638375282288,
        "z": -0.060730595141649246
    },
    {
        "x": 0.3245698809623718,
        "y": 0.5679081678390503,
        "z": 0.0638679713010788
    },
    {
        "x": 0.334442675113678,
        "y": 0.4482322335243225,
        "z": 0.01049759704619646
    },
    {
        "x": 0.4766918420791626,
        "y": 0.6658352613449097,
        "z": -0.07675360888242722
    },
    {
        "x": 0.43960627913475037,
        "y": 0.5732375979423523,
        "z": -0.024804862216114998
    },
    {
        "x": 0.306890606880188,
        "y": 0.4466193616390228,
        "z": 0.1546277105808258
    },
    {
        "x": 0.4508615732192993,
        "y": 0.5148400664329529,
        "z": -0.023474279791116714
    },
    {
        "x": 0.4300011098384857,
        "y": 0.6220979690551758,
        "z": -0.008718818426132202
    },
    {
        "x": 0.35748761892318726,
        "y": 0.46591293811798096,
        "z": 0.01261952705681324
    },
    {
        "x": 0.44151341915130615,
        "y": 0.6124114990234375,
        "z": -0.05826551467180252
    },
    {
        "x": 0.32327112555503845,
        "y": 0.6019536256790161,
        "z": 0.20045576989650726
    },
    {
        "x": 0.4399656355381012,
        "y": 0.4785180985927582,
        "z": -0.007941477932035923
    },
    {
        "x": 0.45457398891448975,
        "y": 0.6051390171051025,
        "z": -0.07865844666957855
    },
    {
        "x": 0.36711469292640686,
        "y": 0.7430620193481445,
        "z": 0.11367377638816833
    },
    {
        "x": 0.37090373039245605,
        "y": 0.7586579918861389,
        "z": 0.15171444416046143
    },
    {
        "x": 0.3129965364933014,
        "y": 0.5584694147109985,
        "z": 0.12919257581233978
    },
    {
        "x": 0.3483910858631134,
        "y": 0.7048285007476807,
        "z": 0.12941667437553406
    },
    {
        "x": 0.31349605321884155,
        "y": 0.4210212528705597,
        "z": 0.0667252168059349
    },
    {
        "x": 0.42949622869491577,
        "y": 0.8390313386917114,
        "z": 0.0744566023349762
    },
    {
        "x": 0.47914913296699524,
        "y": 0.6667689681053162,
        "z": -0.05087027698755264
    },
    {
        "x": 0.42604154348373413,
        "y": 0.5870763659477234,
        "z": -0.01399912964552641
    },
    {
        "x": 0.320220947265625,
        "y": 0.47341611981391907,
        "z": 0.053055230528116226
    },
    {
        "x": 0.38772356510162354,
        "y": 0.4813120365142822,
        "z": -0.004769088234752417
    },
    {
        "x": 0.4033941328525543,
        "y": 0.4833424687385559,
        "z": -0.009321081452071667
    },
    {
        "x": 0.43035468459129333,
        "y": 0.7383430600166321,
        "z": 0.028446456417441368
    },
    {
        "x": 0.3306913375854492,
        "y": 0.6122258305549622,
        "z": 0.08123557269573212
    },
    {
        "x": 0.4605928361415863,
        "y": 0.8717749118804932,
        "z": 0.08605368435382843
    },
    {
        "x": 0.4130159318447113,
        "y": 0.8268288373947144,
        "z": 0.11406595259904861
    },
    {
        "x": 0.3935411274433136,
        "y": 0.7978472709655762,
        "z": 0.13031306862831116
    },
    {
        "x": 0.488345205783844,
        "y": 0.35046130418777466,
        "z": -0.08779044449329376
    },
    {
        "x": 0.4961661100387573,
        "y": 0.8788880109786987,
        "z": 0.08095545321702957
    },
    {
        "x": 0.41752415895462036,
        "y": 0.48206257820129395,
        "z": -0.011085854843258858
    },
    {
        "x": 0.4300983250141144,
        "y": 0.4792649745941162,
        "z": -0.01002839207649231
    },
    {
        "x": 0.43749818205833435,
        "y": 0.47877952456474304,
        "z": -0.007626339793205261
    },
    {
        "x": 0.3236561417579651,
        "y": 0.4385066330432892,
        "z": 0.027353979647159576
    },
    {
        "x": 0.42487823963165283,
        "y": 0.4606592059135437,
        "z": -0.0159669928252697
    },
    {
        "x": 0.4097067713737488,
        "y": 0.4526600241661072,
        "z": -0.01965060457587242
    },
    {
        "x": 0.39380958676338196,
        "y": 0.45092499256134033,
        "z": -0.018221979960799217
    },
    {
        "x": 0.3782077431678772,
        "y": 0.45397549867630005,
        "z": -0.012843623757362366
    },
    {
        "x": 0.36942264437675476,
        "y": 0.4592210054397583,
        "z": -0.005858065560460091
    },
    {
        "x": 0.30618539452552795,
        "y": 0.3979015350341797,
        "z": 0.11227316409349442
    },
    {
        "x": 0.3766671121120453,
        "y": 0.47696104645729065,
        "z": 0.00040070671821013093
    },
    {
        "x": 0.48773300647735596,
        "y": 0.6851269006729126,
        "z": -0.029945114627480507
    },
    {
        "x": 0.43373903632164,
        "y": 0.6831132173538208,
        "z": -0.009258054196834564
    },
    {
        "x": 0.44392478466033936,
        "y": 0.6450191140174866,
        "z": -0.042466599494218826
    },
    {
        "x": 0.46420931816101074,
        "y": 0.6841727495193481,
        "z": -0.0271298810839653
    },
    {
        "x": 0.4888489842414856,
        "y": 0.47537440061569214,
        "z": -0.06319567561149597
    },
    {
        "x": 0.38741961121559143,
        "y": 0.7798254489898682,
        "z": 0.10280502587556839
    },
    {
        "x": 0.4073425829410553,
        "y": 0.8088138699531555,
        "z": 0.09014347195625305
    },
    {
        "x": 0.457990437746048,
        "y": 0.861575722694397,
        "z": 0.06005830317735672
    },
    {
        "x": 0.35289567708969116,
        "y": 0.715355396270752,
        "z": 0.17737367749214172
    },
    {
        "x": 0.4350943863391876,
        "y": 0.4715714752674103,
        "z": -0.011737139895558357
    },
    {
        "x": 0.45951926708221436,
        "y": 0.5508293509483337,
        "z": -0.05666881427168846
    },
    {
        "x": 0.4949030876159668,
        "y": 0.8693068027496338,
        "z": 0.05577242374420166
    },
    {
        "x": 0.4345329701900482,
        "y": 0.8528532385826111,
        "z": 0.09709051996469498
    },
    {
        "x": 0.3209768533706665,
        "y": 0.6081939935684204,
        "z": 0.13916493952274323
    },
    {
        "x": 0.45994138717651367,
        "y": 0.7378950715065002,
        "z": 0.007409244310110807
    },
    {
        "x": 0.4574204087257385,
        "y": 0.7444307804107666,
        "z": 0.005693493410944939
    },
    {
        "x": 0.4548739790916443,
        "y": 0.7539543509483337,
        "z": 0.005735511891543865
    },
    {
        "x": 0.4529794156551361,
        "y": 0.7658783197402954,
        "z": 0.010707688517868519
    },
    {
        "x": 0.4492717981338501,
        "y": 0.7801653146743774,
        "z": 0.028852635994553566
    },
    {
        "x": 0.4384981095790863,
        "y": 0.7295019626617432,
        "z": 0.019272439181804657
    },
    {
        "x": 0.43313539028167725,
        "y": 0.7276278138160706,
        "z": 0.019146384671330452
    },
    {
        "x": 0.4282386600971222,
        "y": 0.7236689925193787,
        "z": 0.018432071432471275
    },
    {
        "x": 0.4109002351760864,
        "y": 0.7069712281227112,
        "z": 0.01945452019572258
    },
    {
        "x": 0.35123056173324585,
        "y": 0.6346496343612671,
        "z": 0.046808499842882156
    },
    {
        "x": 0.46066778898239136,
        "y": 0.5212638974189758,
        "z": -0.045828066766262054
    },
    {
        "x": 0.4528122842311859,
        "y": 0.47004711627960205,
        "z": -0.02508498542010784
    },
    {
        "x": 0.4420613646507263,
        "y": 0.4692865312099457,
        "z": -0.017325587570667267
    },
    {
        "x": 0.4421114921569824,
        "y": 0.7262697219848633,
        "z": 0.021569443866610527
    },
    {
        "x": 0.35238903760910034,
        "y": 0.6827766299247742,
        "z": 0.0870061069726944
    },
    {
        "x": 0.4666570723056793,
        "y": 0.4759344756603241,
        "z": -0.048713333904743195
    },
    {
        "x": 0.44015562534332275,
        "y": 0.7979561686515808,
        "z": 0.04479161649942398
    },
    {
        "x": 0.48580828309059143,
        "y": 0.56915682554245,
        "z": -0.08756634593009949
    },
    {
        "x": 0.47079476714134216,
        "y": 0.5426333546638489,
        "z": -0.0728318989276886
    },
    {
        "x": 0.4869593381881714,
        "y": 0.539292573928833,
        "z": -0.07826627045869827
    },
    {
        "x": 0.44778022170066833,
        "y": 0.5871070623397827,
        "z": -0.04773290455341339
    },
    {
        "x": 0.49396100640296936,
        "y": 0.8483753204345703,
        "z": 0.04036567732691765
    },
    {
        "x": 0.4930851459503174,
        "y": 0.819675624370575,
        "z": 0.033810805529356
    },
    {
        "x": 0.4655584990978241,
        "y": 0.8150749206542969,
        "z": 0.03776053711771965
    },
    {
        "x": 0.4022397994995117,
        "y": 0.7501684427261353,
        "z": 0.05308324843645096
    },
    {
        "x": 0.4173174202442169,
        "y": 0.6377429962158203,
        "z": -0.0009786785813048482
    },
    {
        "x": 0.4194992482662201,
        "y": 0.7761282920837402,
        "z": 0.05053412914276123
    },
    {
        "x": 0.3824393153190613,
        "y": 0.6279510259628296,
        "z": 0.007717379834502935
    },
    {
        "x": 0.4039156138896942,
        "y": 0.658755898475647,
        "z": 0.007500284351408482
    },
    {
        "x": 0.37107208371162415,
        "y": 0.6600509881973267,
        "z": 0.030505359172821045
    },
    {
        "x": 0.4599563479423523,
        "y": 0.8412858843803406,
        "z": 0.04515577107667923
    },
    {
        "x": 0.43896961212158203,
        "y": 0.595340371131897,
        "z": -0.031261689960956573
    },
    {
        "x": 0.38959431648254395,
        "y": 0.7613317966461182,
        "z": 0.07546504586935043
    },
    {
        "x": 0.41040852665901184,
        "y": 0.7909313440322876,
        "z": 0.07019873708486557
    },
    {
        "x": 0.38926082849502563,
        "y": 0.7215840816497803,
        "z": 0.048657309263944626
    },
    {
        "x": 0.33732205629348755,
        "y": 0.6493796110153198,
        "z": 0.09703449159860611
    },
    {
        "x": 0.37081724405288696,
        "y": 0.7162246704101562,
        "z": 0.06790173798799515
    },
    {
        "x": 0.33132779598236084,
        "y": 0.6558627486228943,
        "z": 0.143534854054451
    },
    {
        "x": 0.393602579832077,
        "y": 0.6854931116104126,
        "z": 0.02210167795419693
    },
    {
        "x": 0.44956788420677185,
        "y": 0.561435878276825,
        "z": -0.03974940627813339
    },
    {
        "x": 0.4468531608581543,
        "y": 0.6432706117630005,
        "z": -0.06526858359575272
    },
    {
        "x": 0.43700110912323,
        "y": 0.6422247886657715,
        "z": -0.04355907440185547
    },
    {
        "x": 0.4532191753387451,
        "y": 0.6326096653938293,
        "z": -0.08084340393543243
    },
    {
        "x": 0.43860337138175964,
        "y": 0.45429328083992004,
        "z": -0.034202978014945984
    },
    {
        "x": 0.4102364778518677,
        "y": 0.44310587644577026,
        "z": -0.03930120915174484
    },
    {
        "x": 0.38584190607070923,
        "y": 0.439150333404541,
        "z": -0.03706023097038269
    },
    {
        "x": 0.3665732741355896,
        "y": 0.43855947256088257,
        "z": -0.02804027870297432
    },
    {
        "x": 0.35376229882240295,
        "y": 0.4428475499153137,
        "z": -0.015308704227209091
    },
    {
        "x": 0.34725359082221985,
        "y": 0.47024005651474,
        "z": 0.020224858075380325
    },
    {
        "x": 0.30803120136260986,
        "y": 0.5099858641624451,
        "z": 0.11400992423295975
    },
    {
        "x": 0.36163049936294556,
        "y": 0.5057183504104614,
        "z": 0.013669987209141254
    },
    {
        "x": 0.3794756531715393,
        "y": 0.515550971031189,
        "z": 0.0033317089546471834
    },
    {
        "x": 0.40221506357192993,
        "y": 0.5164932608604431,
        "z": -0.0043944246135652065
    },
    {
        "x": 0.4228740632534027,
        "y": 0.5117264986038208,
        "z": -0.008312639780342579
    },
    {
        "x": 0.4374879002571106,
        "y": 0.5062705278396606,
        "z": -0.012269373051822186
    },
    {
        "x": 0.44761496782302856,
        "y": 0.5013440847396851,
        "z": -0.0148885203525424
    },
    {
        "x": 0.3114052414894104,
        "y": 0.4953949451446533,
        "z": 0.18006286025047302
    },
    {
        "x": 0.43831759691238403,
        "y": 0.6455317139625549,
        "z": -0.03367074579000473
    },
    {
        "x": 0.45839619636535645,
        "y": 0.5774070024490356,
        "z": -0.06498845666646957
    },
    {
        "x": 0.4582228362560272,
        "y": 0.6503156423568726,
        "z": -0.07916266471147537
    },
    {
        "x": 0.4682352542877197,
        "y": 0.6588343381881714,
        "z": -0.06991861760616302
    },
    {
        "x": 0.45888999104499817,
        "y": 0.6509234309196472,
        "z": -0.06986258924007416
    },
    {
        "x": 0.443647176027298,
        "y": 0.6512900590896606,
        "z": -0.02634553797543049
    },
    {
        "x": 0.47133931517601013,
        "y": 0.6627659797668457,
        "z": -0.07428853213787079
    },
    {
        "x": 0.47356995940208435,
        "y": 0.6639950275421143,
        "z": -0.05154256895184517
    },
    {
        "x": 0.4457587003707886,
        "y": 0.48249053955078125,
        "z": -0.010567627847194672
    },
    {
        "x": 0.4555419683456421,
        "y": 0.4916033148765564,
        "z": -0.020869137719273567
    },
    {
        "x": 0.460178941488266,
        "y": 0.49974164366722107,
        "z": -0.03288640081882477
    },
    {
        "x": 0.36468374729156494,
        "y": 0.4630338251590729,
        "z": 0.000711249012965709
    },
    {
        "x": 0.3574545383453369,
        "y": 0.45664912462234497,
        "z": 0.0003536548756528646
    },
    {
        "x": 0.5014737844467163,
        "y": 0.5717847943305969,
        "z": -0.0816277414560318
    },
    {
        "x": 0.6188353300094604,
        "y": 0.4752529263496399,
        "z": -0.0056129577569663525
    },
    {
        "x": 0.5029580593109131,
        "y": 0.660555899143219,
        "z": -0.053307343274354935
    },
    {
        "x": 0.6852128505706787,
        "y": 0.36539793014526367,
        "z": 0.04837718605995178
    },
    {
        "x": 0.5641894340515137,
        "y": 0.4971346855163574,
        "z": -0.01760570891201496
    },
    {
        "x": 0.581428587436676,
        "y": 0.4991888999938965,
        "z": -0.017101489007472992
    },
    {
        "x": 0.5991362929344177,
        "y": 0.4988596439361572,
        "z": -0.01374001707881689
    },
    {
        "x": 0.6245978474617004,
        "y": 0.4828106462955475,
        "z": -0.001728006755001843
    },
    {
        "x": 0.5503318905830383,
        "y": 0.4927412271499634,
        "z": -0.01661127433180809
    },
    {
        "x": 0.5939698219299316,
        "y": 0.4476836919784546,
        "z": -0.034987322986125946
    },
    {
        "x": 0.5742376446723938,
        "y": 0.4488786458969116,
        "z": -0.03473521023988724
    },
    {
        "x": 0.6112089157104492,
        "y": 0.44973787665367126,
        "z": -0.02958095446228981
    },
    {
        "x": 0.6225964426994324,
        "y": 0.4546915590763092,
        "z": -0.022073665633797646
    },
    {
        "x": 0.6374673247337341,
        "y": 0.497946560382843,
        "z": 0.00883086770772934
    },
    {
        "x": 0.5587212443351746,
        "y": 0.8230609893798828,
        "z": 0.05353144183754921
    },
    {
        "x": 0.62651526927948,
        "y": 0.46819770336151123,
        "z": -0.001784031162969768
    },
    {
        "x": 0.6901677846908569,
        "y": 0.4676683843135834,
        "z": 0.08022713661193848
    },
    {
        "x": 0.659144937992096,
        "y": 0.4788520336151123,
        "z": 0.02130332961678505
    },
    {
        "x": 0.5766867995262146,
        "y": 0.6084840297698975,
        "z": -0.012094296514987946
    },
    {
        "x": 0.5094308257102966,
        "y": 0.7162339091300964,
        "z": -0.027003826573491096
    },
    {
        "x": 0.5067875981330872,
        "y": 0.7371110320091248,
        "z": -0.014104176312685013
    },
    {
        "x": 0.531803548336029,
        "y": 0.720756471157074,
        "z": -0.01647121272981167
    },
    {
        "x": 0.5454293489456177,
        "y": 0.7260428667068481,
        "z": -0.0029868080746382475
    },
    {
        "x": 0.5227077007293701,
        "y": 0.7361570596694946,
        "z": -0.008249612525105476
    },
    {
        "x": 0.5345892310142517,
        "y": 0.7357394695281982,
        "z": 0.0037746531888842583
    },
    {
        "x": 0.5694112777709961,
        "y": 0.752104640007019,
        "z": 0.03341863304376602
    },
    {
        "x": 0.499619722366333,
        "y": 0.6578159332275391,
        "z": -0.08829466253519058
    },
    {
        "x": 0.502051591873169,
        "y": 0.6354415416717529,
        "z": -0.09781883656978607
    },
    {
        "x": 0.6501257419586182,
        "y": 0.4326975643634796,
        "z": -0.02638755552470684
    },
    {
        "x": 0.5429165959358215,
        "y": 0.5476111173629761,
        "z": -0.027606088668107986
    },
    {
        "x": 0.5439476370811462,
        "y": 0.6369730234146118,
        "z": -0.04652837663888931
    },
    {
        "x": 0.5454245805740356,
        "y": 0.6214569211006165,
        "z": -0.04325094074010849
    },
    {
        "x": 0.628098726272583,
        "y": 0.5979081988334656,
        "z": 0.00576352421194315
    },
    {
        "x": 0.5016620755195618,
        "y": 0.6022669672966003,
        "z": -0.09294470399618149
    },
    {
        "x": 0.6078681349754333,
        "y": 0.4210008382797241,
        "z": -0.05949805676937103
    },
    {
        "x": 0.633176863193512,
        "y": 0.4228785037994385,
        "z": -0.04633228853344917
    },
    {
        "x": 0.6693602800369263,
        "y": 0.33213838934898376,
        "z": 0.005497407168149948
    },
    {
        "x": 0.52720046043396,
        "y": 0.44577518105506897,
        "z": -0.06734149158000946
    },
    {
        "x": 0.5571512579917908,
        "y": 0.4551936686038971,
        "z": -0.027311960235238075
    },
    {
        "x": 0.5816926956176758,
        "y": 0.7310747504234314,
        "z": 0.03207404538989067
    },
    {
        "x": 0.6678275465965271,
        "y": 0.6696287989616394,
        "z": 0.18286408483982086
    },
    {
        "x": 0.530838668346405,
        "y": 0.649922251701355,
        "z": -0.03661203384399414
    },
    {
        "x": 0.5159777998924255,
        "y": 0.6580638885498047,
        "z": -0.035995762795209885
    },
    {
        "x": 0.5614920258522034,
        "y": 0.7346532344818115,
        "z": 0.029721014201641083
    },
    {
        "x": 0.5532111525535583,
        "y": 0.7333323955535889,
        "z": 0.02514100819826126
    },
    {
        "x": 0.6431931853294373,
        "y": 0.40465307235717773,
        "z": -0.04176628962159157
    },
    {
        "x": 0.5445638298988342,
        "y": 0.6435562968254089,
        "z": -0.03456714004278183
    },
    {
        "x": 0.573076605796814,
        "y": 0.42734625935554504,
        "z": -0.06717341393232346
    },
    {
        "x": 0.5766072273254395,
        "y": 0.40752846002578735,
        "z": -0.07546504586935043
    },
    {
        "x": 0.5959705114364624,
        "y": 0.2918810546398163,
        "z": -0.0685180053114891
    },
    {
        "x": 0.6556095480918884,
        "y": 0.36778801679611206,
        "z": -0.022087672725319862
    },
    {
        "x": 0.5840582251548767,
        "y": 0.3484756350517273,
        "z": -0.07395238429307938
    },
    {
        "x": 0.6610103845596313,
        "y": 0.4177722930908203,
        "z": -0.014426317997276783
    },
    {
        "x": 0.6728740930557251,
        "y": 0.39315029978752136,
        "z": 0.014524360187351704
    },
    {
        "x": 0.5084249377250671,
        "y": 0.7290678024291992,
        "z": -0.02254987508058548
    },
    {
        "x": 0.5267845392227173,
        "y": 0.7311389446258545,
        "z": -0.012962676584720612
    },
    {
        "x": 0.5400003790855408,
        "y": 0.7319369316101074,
        "z": -0.0009007694898173213
    },
    {
        "x": 0.5265505313873291,
        "y": 0.6534430980682373,
        "z": -0.032606277614831924
    },
    {
        "x": 0.5570103526115417,
        "y": 0.7345852851867676,
        "z": 0.0271298810839653
    },
    {
        "x": 0.5500153303146362,
        "y": 0.7401567697525024,
        "z": 0.019174396991729736
    },
    {
        "x": 0.5516577959060669,
        "y": 0.7315160036087036,
        "z": 0.024468714371323586
    },
    {
        "x": 0.5203118324279785,
        "y": 0.6491650342941284,
        "z": -0.06369989365339279
    },
    {
        "x": 0.5314750075340271,
        "y": 0.7330029606819153,
        "z": 0.007220161613076925
    },
    {
        "x": 0.5193515419960022,
        "y": 0.7355085611343384,
        "z": -0.00015056593110784888
    },
    {
        "x": 0.5049872994422913,
        "y": 0.7379801869392395,
        "z": -0.005595450755208731
    },
    {
        "x": 0.5148162245750427,
        "y": 0.794306755065918,
        "z": 0.025771284475922585
    },
    {
        "x": 0.5120458006858826,
        "y": 0.7775310277938843,
        "z": 0.00274345139041543
    },
    {
        "x": 0.5101360082626343,
        "y": 0.7649517059326172,
        "z": -0.002641906961798668
    },
    {
        "x": 0.5084554553031921,
        "y": 0.7517783641815186,
        "z": -0.0015905715990811586
    },
    {
        "x": 0.5069607496261597,
        "y": 0.7430899739265442,
        "z": -0.0003799163969233632
    },
    {
        "x": 0.5345714092254639,
        "y": 0.7378309965133667,
        "z": 0.010966802947223186
    },
    {
        "x": 0.5372323989868164,
        "y": 0.7411582469940186,
        "z": 0.009454140439629555
    },
    {
        "x": 0.5412124395370483,
        "y": 0.7474937438964844,
        "z": 0.009370103478431702
    },
    {
        "x": 0.5447366237640381,
        "y": 0.7547187805175781,
        "z": 0.013978120870888233
    },
    {
        "x": 0.5609090328216553,
        "y": 0.6978899240493774,
        "z": -0.0025070980191230774
    },
    {
        "x": 0.6885455250740051,
        "y": 0.5528066158294678,
        "z": 0.17838212847709656
    },
    {
        "x": 0.5424373149871826,
        "y": 0.7352608442306519,
        "z": 0.018978310748934746
    },
    {
        "x": 0.5457807183265686,
        "y": 0.7374032735824585,
        "z": 0.0182499922811985
    },
    {
        "x": 0.5096117854118347,
        "y": 0.668724775314331,
        "z": -0.03333459794521332
    },
    {
        "x": 0.5386331677436829,
        "y": 0.6557179093360901,
        "z": -0.01810993067920208
    },
    {
        "x": 0.5127922892570496,
        "y": 0.6636930704116821,
        "z": -0.035547565668821335
    },
    {
        "x": 0.559852659702301,
        "y": 0.5589240789413452,
        "z": -0.01881023682653904
    },
    {
        "x": 0.5879598259925842,
        "y": 0.574290931224823,
        "z": -0.011989250779151917
    },
    {
        "x": 0.5482765436172485,
        "y": 0.6286717653274536,
        "z": -0.031261689960956573
    },
    {
        "x": 0.6413384675979614,
        "y": 0.3067624866962433,
        "z": -0.03526744246482849
    },
    {
        "x": 0.6275100708007812,
        "y": 0.35152480006217957,
        "z": -0.05033804476261139
    },
    {
        "x": 0.6143246293067932,
        "y": 0.3997332453727722,
        "z": -0.06112276390194893
    },
    {
        "x": 0.5551564693450928,
        "y": 0.7680246829986572,
        "z": 0.02963697724044323
    },
    {
        "x": 0.5332788825035095,
        "y": 0.416284441947937,
        "z": -0.08140365034341812
    },
    {
        "x": 0.5390021204948425,
        "y": 0.3495856523513794,
        "z": -0.08582958579063416
    },
    {
        "x": 0.5465014576911926,
        "y": 0.28485605120658875,
        "z": -0.08616573363542557
    },
    {
        "x": 0.615097165107727,
        "y": 0.4931252598762512,
        "z": -0.007521293591707945
    },
    {
        "x": 0.6561604142189026,
        "y": 0.5134695768356323,
        "z": 0.021093236282467842
    },
    {
        "x": 0.5422979593276978,
        "y": 0.4887348413467407,
        "z": -0.014930538833141327
    },
    {
        "x": 0.6409560441970825,
        "y": 0.45676273107528687,
        "z": -0.008459703996777534
    },
    {
        "x": 0.530696451663971,
        "y": 0.5351744294166565,
        "z": -0.036696068942546844
    },
    {
        "x": 0.5325397253036499,
        "y": 0.6344095468521118,
        "z": -0.06554870307445526
    },
    {
        "x": 0.6739954352378845,
        "y": 0.5244972705841064,
        "z": 0.04330696165561676
    },
    {
        "x": 0.6425319910049438,
        "y": 0.534777820110321,
        "z": 0.010049400851130486
    },
    {
        "x": 0.6186670660972595,
        "y": 0.5475640296936035,
        "z": -0.003126869210973382
    },
    {
        "x": 0.5848507881164551,
        "y": 0.5446609258651733,
        "z": -0.010630655102431774
    },
    {
        "x": 0.5607312917709351,
        "y": 0.5347331762313843,
        "z": -0.014958550222218037
    },
    {
        "x": 0.5440014004707336,
        "y": 0.5255151391029358,
        "z": -0.02184956893324852
    },
    {
        "x": 0.5057926177978516,
        "y": 0.5120868682861328,
        "z": -0.062187232077121735
    },
    {
        "x": 0.6686325073242188,
        "y": 0.5752148628234863,
        "z": 0.049665749073028564
    },
    {
        "x": 0.6557888984680176,
        "y": 0.4519076347351074,
        "z": -0.0026944298297166824
    },
    {
        "x": 0.49439191818237305,
        "y": 0.6664023995399475,
        "z": -0.07742590457201004
    },
    {
        "x": 0.5408844351768494,
        "y": 0.5756691098213196,
        "z": -0.028852635994553566
    },
    {
        "x": 0.695232629776001,
        "y": 0.4519078731536865,
        "z": 0.1375962644815445
    },
    {
        "x": 0.5308569073677063,
        "y": 0.5163514018058777,
        "z": -0.026975812390446663
    },
    {
        "x": 0.5498705506324768,
        "y": 0.625707745552063,
        "z": -0.012738578021526337
    },
    {
        "x": 0.6314375400543213,
        "y": 0.4691687822341919,
        "z": 0.0013918594922870398
    },
    {
        "x": 0.5338231325149536,
        "y": 0.615304708480835,
        "z": -0.06157096475362778
    },
    {
        "x": 0.6808933615684509,
        "y": 0.6091670393943787,
        "z": 0.1851050704717636
    },
    {
        "x": 0.5439455509185791,
        "y": 0.47949647903442383,
        "z": -0.01269655954092741
    },
    {
        "x": 0.5182086229324341,
        "y": 0.6067011952400208,
        "z": -0.08101147413253784
    },
    {
        "x": 0.6303773522377014,
        "y": 0.7512357831001282,
        "z": 0.1031411737203598
    },
    {
        "x": 0.6302499771118164,
        "y": 0.7661746740341187,
        "z": 0.1408456712961197
    },
    {
        "x": 0.685746967792511,
        "y": 0.565613329410553,
        "z": 0.11339365690946579
    },
    {
        "x": 0.6504253149032593,
        "y": 0.7129923105239868,
        "z": 0.11709128320217133
    },
    {
        "x": 0.6820092797279358,
        "y": 0.42571038007736206,
        "z": 0.05117841064929962
    },
    {
        "x": 0.5632538199424744,
        "y": 0.8434492349624634,
        "z": 0.06963849812746048
    },
    {
        "x": 0.49326640367507935,
        "y": 0.6669829487800598,
        "z": -0.05137449502944946
    },
    {
        "x": 0.5559973120689392,
        "y": 0.5905402302742004,
        "z": -0.018796231597661972
    },
    {
        "x": 0.6739344596862793,
        "y": 0.47907620668411255,
        "z": 0.03857289254665375
    },
    {
        "x": 0.5983647704124451,
        "y": 0.4842059314250946,
        "z": -0.013676989823579788
    },
    {
        "x": 0.5822154879570007,
        "y": 0.4857540726661682,
        "z": -0.017101489007472992
    },
    {
        "x": 0.5546905398368835,
        "y": 0.7438134551048279,
        "z": 0.02280198596417904
    },
    {
        "x": 0.6637662053108215,
        "y": 0.6202624440193176,
        "z": 0.06767763197422028
    },
    {
        "x": 0.5327375531196594,
        "y": 0.8740636706352234,
        "z": 0.08347655087709427
    },
    {
        "x": 0.5839663147926331,
        "y": 0.8324081301689148,
        "z": 0.10717494040727615
    },
    {
        "x": 0.6057177782058716,
        "y": 0.8046490550041199,
        "z": 0.12146119028329849
    },
    {
        "x": 0.5676652789115906,
        "y": 0.4837406277656555,
        "z": -0.017787789925932884
    },
    {
        "x": 0.5544698238372803,
        "y": 0.48055246472358704,
        "z": -0.015616838820278645
    },
    {
        "x": 0.5468561053276062,
        "y": 0.47983941435813904,
        "z": -0.012836621142923832
    },
    {
        "x": 0.6684190034866333,
        "y": 0.44253695011138916,
        "z": 0.013088732026517391
    },
    {
        "x": 0.560232400894165,
        "y": 0.46181434392929077,
        "z": -0.022031648084521294
    },
    {
        "x": 0.5762085914611816,
        "y": 0.45428723096847534,
        "z": -0.026625661179423332
    },
    {
        "x": 0.5925794243812561,
        "y": 0.45304131507873535,
        "z": -0.026359543204307556
    },
    {
        "x": 0.608461320400238,
        "y": 0.45656901597976685,
        "z": -0.022269751876592636
    },
    {
        "x": 0.6176029443740845,
        "y": 0.4620862603187561,
        "z": -0.015952985733747482
    },
    {
        "x": 0.6929614543914795,
        "y": 0.40286749601364136,
        "z": 0.09552183002233505
    },
    {
        "x": 0.610052764415741,
        "y": 0.4801996648311615,
        "z": -0.009349093772470951
    },
    {
        "x": 0.5459820032119751,
        "y": 0.6875038743019104,
        "z": -0.01339686755090952
    },
    {
        "x": 0.5310754776000977,
        "y": 0.6484317779541016,
        "z": -0.045127760618925095
    },
    {
        "x": 0.5119289755821228,
        "y": 0.6860912442207336,
        "z": -0.028768599033355713
    },
    {
        "x": 0.6087837219238281,
        "y": 0.786766529083252,
        "z": 0.09428928792476654
    },
    {
        "x": 0.5872511863708496,
        "y": 0.8151265382766724,
        "z": 0.08347655087709427
    },
    {
        "x": 0.5328241586685181,
        "y": 0.8639051914215088,
        "z": 0.0577612929046154
    },
    {
        "x": 0.649893045425415,
        "y": 0.722845196723938,
        "z": 0.1641518920660019
    },
    {
        "x": 0.5491580367088318,
        "y": 0.4727027118206024,
        "z": -0.01711549609899521
    },
    {
        "x": 0.5173302888870239,
        "y": 0.5520043969154358,
        "z": -0.05904985964298248
    },
    {
        "x": 0.5604526996612549,
        "y": 0.8565547466278076,
        "z": 0.09193626046180725
    },
    {
        "x": 0.6781457662582397,
        "y": 0.6159981489181519,
        "z": 0.12415037304162979
    },
    {
        "x": 0.5219972729682922,
        "y": 0.7406285405158997,
        "z": 0.004285876639187336
    },
    {
        "x": 0.5246353149414062,
        "y": 0.746644914150238,
        "z": 0.002641906961798668
    },
    {
        "x": 0.5276858806610107,
        "y": 0.7568508982658386,
        "z": 0.0025893838610500097
    },
    {
        "x": 0.5302780866622925,
        "y": 0.7682452201843262,
        "z": 0.007479275111109018
    },
    {
        "x": 0.5370972752571106,
        "y": 0.7832894325256348,
        "z": 0.0253370963037014
    },
    {
        "x": 0.5455820560455322,
        "y": 0.7344120740890503,
        "z": 0.014321272261440754
    },
    {
        "x": 0.5507462024688721,
        "y": 0.7332950830459595,
        "z": 0.013466897420585155
    },
    {
        "x": 0.5559307336807251,
        "y": 0.7297878265380859,
        "z": 0.012479464523494244
    },
    {
        "x": 0.5737759470939636,
        "y": 0.7133246064186096,
        "z": 0.0126685481518507
    },
    {
        "x": 0.639822244644165,
        "y": 0.6423107981681824,
        "z": 0.035743653774261475
    },
    {
        "x": 0.5180306434631348,
        "y": 0.5224321484565735,
        "z": -0.048321161419153214
    },
    {
        "x": 0.5290032625198364,
        "y": 0.4709031283855438,
        "z": -0.02833440713584423
    },
    {
        "x": 0.541111409664154,
        "y": 0.4701901972293854,
        "z": -0.021891586482524872
    },
    {
        "x": 0.541803240776062,
        "y": 0.7307690382003784,
        "z": 0.01676534116268158
    },
    {
        "x": 0.642098605632782,
        "y": 0.6907536387443542,
        "z": 0.07563312351703644
    },
    {
        "x": 0.5125967860221863,
        "y": 0.47633200883865356,
        "z": -0.050758227705955505
    },
    {
        "x": 0.5488157868385315,
        "y": 0.8019936680793762,
        "z": 0.04106598347425461
    },
    {
        "x": 0.5039566159248352,
        "y": 0.5434347987174988,
        "z": -0.07406443357467651
    },
    {
        "x": 0.5295631289482117,
        "y": 0.5892431139945984,
        "z": -0.050814252346754074
    },
    {
        "x": 0.5220173597335815,
        "y": 0.8171259760856628,
        "z": 0.03607980161905289
    },
    {
        "x": 0.5875263810157776,
        "y": 0.7565626502037048,
        "z": 0.04641632363200188
    },
    {
        "x": 0.5642984509468079,
        "y": 0.6420624852180481,
        "z": -0.006134686525911093
    },
    {
        "x": 0.5702769756317139,
        "y": 0.781999409198761,
        "z": 0.04518378898501396
    },
    {
        "x": 0.6033628582954407,
        "y": 0.6339889764785767,
        "z": -0.00011434695625212044
    },
    {
        "x": 0.5795742869377136,
        "y": 0.6641076803207397,
        "z": 0.001059213886037469
    },
    {
        "x": 0.6171999573707581,
        "y": 0.6670684814453125,
        "z": 0.021569443866610527
    },
    {
        "x": 0.5291879773139954,
        "y": 0.843530535697937,
        "z": 0.042970817536115646
    },
    {
        "x": 0.5400211811065674,
        "y": 0.5980672836303711,
        "z": -0.03501533344388008
    },
    {
        "x": 0.6033344864845276,
        "y": 0.7687548995018005,
        "z": 0.06756559014320374
    },
    {
        "x": 0.5815778970718384,
        "y": 0.7971115708351135,
        "z": 0.06420411914587021
    },
    {
        "x": 0.6000904440879822,
        "y": 0.7286642789840698,
        "z": 0.04061778634786606
    },
    {
        "x": 0.6580697894096375,
        "y": 0.6575282216072083,
        "z": 0.08426090329885483
    },
    {
        "x": 0.6216432452201843,
        "y": 0.7242099046707153,
        "z": 0.05837756767868996
    },
    {
        "x": 0.6683241128921509,
        "y": 0.6639587879180908,
        "z": 0.12919257581233978
    },
    {
        "x": 0.5927849411964417,
        "y": 0.6917990446090698,
        "z": 0.01441231183707714
    },
    {
        "x": 0.5291125178337097,
        "y": 0.5632392168045044,
        "z": -0.04305485263466835
    },
    {
        "x": 0.5261660218238831,
        "y": 0.6459667682647705,
        "z": -0.06829390674829483
    },
    {
        "x": 0.5384931564331055,
        "y": 0.6458548307418823,
        "z": -0.04694855958223343
    },
    {
        "x": 0.518193244934082,
        "y": 0.6347897052764893,
        "z": -0.083420529961586
    },
    {
        "x": 0.5432580709457397,
        "y": 0.45498308539390564,
        "z": -0.03860090300440788
    },
    {
        "x": 0.5724883079528809,
        "y": 0.4437722861766815,
        "z": -0.04554794728755951
    },
    {
        "x": 0.5982910394668579,
        "y": 0.4402787387371063,
        "z": -0.04515577107667923
    },
    {
        "x": 0.619579017162323,
        "y": 0.4406014084815979,
        "z": -0.03806867077946663
    },
    {
        "x": 0.6338821649551392,
        "y": 0.44530045986175537,
        "z": -0.02644357830286026
    },
    {
        "x": 0.6430465579032898,
        "y": 0.4744246006011963,
        "z": 0.008200591430068016
    },
    {
        "x": 0.6906489133834839,
        "y": 0.5163828134536743,
        "z": 0.09753870964050293
    },
    {
        "x": 0.6270524859428406,
        "y": 0.5103390216827393,
        "z": 0.0026594146620482206
    },
    {
        "x": 0.6076972484588623,
        "y": 0.5199066400527954,
        "z": -0.006155695766210556
    },
    {
        "x": 0.5834962129592896,
        "y": 0.5195397734642029,
        "z": -0.012157324701547623
    },
    {
        "x": 0.562030017375946,
        "y": 0.5138357281684875,
        "z": -0.014454329386353493
    },
    {
        "x": 0.546392560005188,
        "y": 0.5079211592674255,
        "z": -0.017003444954752922
    },
    {
        "x": 0.5352316498756409,
        "y": 0.5026721358299255,
        "z": -0.018768219277262688
    },
    {
        "x": 0.6921259164810181,
        "y": 0.5008667707443237,
        "z": 0.16314344108104706
    },
    {
        "x": 0.5380144119262695,
        "y": 0.6494333744049072,
        "z": -0.036948177963495255
    },
    {
        "x": 0.5162047147750854,
        "y": 0.5788808465003967,
        "z": -0.06750956177711487
    },
    {
        "x": 0.5128915905952454,
        "y": 0.6520407199859619,
        "z": -0.08106750249862671
    },
    {
        "x": 0.5036354064941406,
        "y": 0.6599684953689575,
        "z": -0.0710391104221344
    },
    {
        "x": 0.5131105780601501,
        "y": 0.6526417136192322,
        "z": -0.07182345539331436
    },
    {
        "x": 0.5332602858543396,
        "y": 0.6550388336181641,
        "z": -0.02918878383934498
    },
    {
        "x": 0.5002410411834717,
        "y": 0.6638017296791077,
        "z": -0.07507287710905075
    },
    {
        "x": 0.49911293387413025,
        "y": 0.664681077003479,
        "z": -0.05227088928222656
    },
    {
        "x": 0.5374114513397217,
        "y": 0.48358088731765747,
        "z": -0.014874514192342758
    },
    {
        "x": 0.5265790224075317,
        "y": 0.49238121509552,
        "z": -0.0239925067871809
    },
    {
        "x": 0.5206815004348755,
        "y": 0.5006586909294128,
        "z": -0.03521141782402992
    },
    {
        "x": 0.6229478120803833,
        "y": 0.4660518765449524,
        "z": -0.00958019495010376
    },
    {
        "x": 0.6310708522796631,
        "y": 0.4596010446548462,
        "z": -0.010721695609390736
    }
]

let disgustedDatabase = [
    {
        "x": 0.49642494320869446,
        "y": 0.7041687369346619,
        "z": -0.036421358585357666
    },
    {
        "x": 0.496907502412796,
        "y": 0.6420359015464783,
        "z": -0.09348057210445404
    },
    {
        "x": 0.4968417286872864,
        "y": 0.6577174663543701,
        "z": -0.04399412125349045
    },
    {
        "x": 0.48150938749313354,
        "y": 0.5567054748535156,
        "z": -0.07922270148992538
    },
    {
        "x": 0.49656417965888977,
        "y": 0.6180664300918579,
        "z": -0.10191322863101959
    },
    {
        "x": 0.49648627638816833,
        "y": 0.5837429165840149,
        "z": -0.09841810911893845
    },
    {
        "x": 0.49618417024612427,
        "y": 0.4970455467700958,
        "z": -0.0632450133562088
    },
    {
        "x": 0.37500032782554626,
        "y": 0.4748379588127136,
        "z": 0.00689315190538764
    },
    {
        "x": 0.4955211579799652,
        "y": 0.443484902381897,
        "z": -0.06052658334374428
    },
    {
        "x": 0.4954245984554291,
        "y": 0.41359955072402954,
        "z": -0.06940308213233948
    },
    {
        "x": 0.4946320950984955,
        "y": 0.2851044237613678,
        "z": -0.06768325716257095
    },
    {
        "x": 0.49637651443481445,
        "y": 0.7157080173492432,
        "z": -0.03300945833325386
    },
    {
        "x": 0.49656370282173157,
        "y": 0.723994255065918,
        "z": -0.026657218113541603
    },
    {
        "x": 0.49655377864837646,
        "y": 0.7263612747192383,
        "z": -0.018307765945792198
    },
    {
        "x": 0.49665528535842896,
        "y": 0.7550631761550903,
        "z": -0.007593562360852957
    },
    {
        "x": 0.49682506918907166,
        "y": 0.7674916982650757,
        "z": -0.009278709068894386
    },
    {
        "x": 0.49676549434661865,
        "y": 0.7816938757896423,
        "z": -0.010741942562162876
    },
    {
        "x": 0.4971497356891632,
        "y": 0.7958993911743164,
        "z": -0.004604680463671684
    },
    {
        "x": 0.4979777932167053,
        "y": 0.8101081848144531,
        "z": 0.01685146614909172
    },
    {
        "x": 0.49686405062675476,
        "y": 0.6523916721343994,
        "z": -0.08316164463758469
    },
    {
        "x": 0.47957873344421387,
        "y": 0.646640956401825,
        "z": -0.05814103037118912
    },
    {
        "x": 0.31582051515579224,
        "y": 0.3783811032772064,
        "z": 0.07151124626398087
    },
    {
        "x": 0.42605724930763245,
        "y": 0.49741026759147644,
        "z": -0.008356385864317417
    },
    {
        "x": 0.4094078838825226,
        "y": 0.4987655580043793,
        "z": -0.0072884331457316875
    },
    {
        "x": 0.3927684426307678,
        "y": 0.4977537989616394,
        "z": -0.0030235552694648504
    },
    {
        "x": 0.3695300817489624,
        "y": 0.4827861189842224,
        "z": 0.01047148834913969
    },
    {
        "x": 0.4391709566116333,
        "y": 0.49247798323631287,
        "z": -0.007780800573527813
    },
    {
        "x": 0.39831826090812683,
        "y": 0.4443874955177307,
        "z": -0.02081814967095852
    },
    {
        "x": 0.41717493534088135,
        "y": 0.4458595812320709,
        "z": -0.02131745219230652
    },
    {
        "x": 0.3814414143562317,
        "y": 0.4470725655555725,
        "z": -0.014992951415479183
    },
    {
        "x": 0.3706527650356293,
        "y": 0.45320573449134827,
        "z": -0.007350845728069544
    },
    {
        "x": 0.3573702573776245,
        "y": 0.4983775019645691,
        "z": 0.02066558413207531
    },
    {
        "x": 0.43443742394447327,
        "y": 0.8273875713348389,
        "z": 0.04368899017572403
    },
    {
        "x": 0.3679253160953522,
        "y": 0.4685715436935425,
        "z": 0.011726679280400276
    },
    {
        "x": 0.31140607595443726,
        "y": 0.4785061776638031,
        "z": 0.09553325176239014
    },
    {
        "x": 0.3381299376487732,
        "y": 0.4825519919395447,
        "z": 0.03539501503109932
    },
    {
        "x": 0.41120001673698425,
        "y": 0.6005643010139465,
        "z": -0.01141461543738842
    },
    {
        "x": 0.4724798798561096,
        "y": 0.6989601254463196,
        "z": -0.03447962924838066
    },
    {
        "x": 0.4759311378002167,
        "y": 0.7226568460464478,
        "z": -0.023883312940597534
    },
    {
        "x": 0.4484926462173462,
        "y": 0.7038112878799438,
        "z": -0.022648924961686134
    },
    {
        "x": 0.4349263906478882,
        "y": 0.7108114361763,
        "z": -0.006442391779273748
    },
    {
        "x": 0.45906978845596313,
        "y": 0.7216434478759766,
        "z": -0.015797382220625877
    },
    {
        "x": 0.44663792848587036,
        "y": 0.7227343320846558,
        "z": -0.0013384087942540646
    },
    {
        "x": 0.4150201380252838,
        "y": 0.7479448318481445,
        "z": 0.032177284359931946
    },
    {
        "x": 0.4820445477962494,
        "y": 0.6407415270805359,
        "z": -0.09198266267776489
    },
    {
        "x": 0.47947970032691956,
        "y": 0.6173473000526428,
        "z": -0.0998605415225029
    },
    {
        "x": 0.34510543942451477,
        "y": 0.4331907629966736,
        "z": -0.008522819727659225
    },
    {
        "x": 0.4451771676540375,
        "y": 0.5419360399246216,
        "z": -0.02294018492102623
    },
    {
        "x": 0.4395100474357605,
        "y": 0.623262882232666,
        "z": -0.04854331910610199
    },
    {
        "x": 0.43890511989593506,
        "y": 0.608759880065918,
        "z": -0.044326987117528915
    },
    {
        "x": 0.36419010162353516,
        "y": 0.5919288992881775,
        "z": 0.00929257832467556
    },
    {
        "x": 0.48050135374069214,
        "y": 0.5853990316390991,
        "z": -0.09275934845209122
    },
    {
        "x": 0.3833382725715637,
        "y": 0.41808968782424927,
        "z": -0.04269038140773773
    },
    {
        "x": 0.3602442741394043,
        "y": 0.4216160774230957,
        "z": -0.028709907084703445
    },
    {
        "x": 0.32906579971313477,
        "y": 0.34208565950393677,
        "z": 0.03140059486031532
    },
    {
        "x": 0.4589192271232605,
        "y": 0.4401051700115204,
        "z": -0.05528390407562256
    },
    {
        "x": 0.43356889486312866,
        "y": 0.4524914026260376,
        "z": -0.01522873342037201
    },
    {
        "x": 0.402484267950058,
        "y": 0.7209256291389465,
        "z": 0.031012246385216713
    },
    {
        "x": 0.3365018963813782,
        "y": 0.6855188608169556,
        "z": 0.1778627187013626
    },
    {
        "x": 0.45232489705085754,
        "y": 0.6366733908653259,
        "z": -0.03983326256275177
    },
    {
        "x": 0.4669373631477356,
        "y": 0.6447713375091553,
        "z": -0.040887344628572464
    },
    {
        "x": 0.4177786111831665,
        "y": 0.7251821160316467,
        "z": 0.029625294730067253
    },
    {
        "x": 0.42665496468544006,
        "y": 0.7252482771873474,
        "z": 0.024895787239074707
    },
    {
        "x": 0.35077103972435,
        "y": 0.40512365102767944,
        "z": -0.022343797609210014
    },
    {
        "x": 0.4388120472431183,
        "y": 0.6309507489204407,
        "z": -0.03744770586490631
    },
    {
        "x": 0.41571712493896484,
        "y": 0.4230653643608093,
        "z": -0.052038438618183136
    },
    {
        "x": 0.41202595829963684,
        "y": 0.4036571979522705,
        "z": -0.058862242847681046
    },
    {
        "x": 0.3933951258659363,
        "y": 0.2954452633857727,
        "z": -0.04269038140773773
    },
    {
        "x": 0.3404766321182251,
        "y": 0.3727951645851135,
        "z": 0.0007879621116444468
    },
    {
        "x": 0.40471625328063965,
        "y": 0.3475319445133209,
        "z": -0.052343569695949554
    },
    {
        "x": 0.3355051577091217,
        "y": 0.42054393887519836,
        "z": 0.004791919142007828
    },
    {
        "x": 0.3260462284088135,
        "y": 0.40064895153045654,
        "z": 0.036310404539108276
    },
    {
        "x": 0.4737530052661896,
        "y": 0.7128763198852539,
        "z": -0.030984509736299515
    },
    {
        "x": 0.4542151093482971,
        "y": 0.7150977253913879,
        "z": -0.019680848345160484
    },
    {
        "x": 0.4406699538230896,
        "y": 0.7170678973197937,
        "z": -0.005117852706462145
    },
    {
        "x": 0.4565262794494629,
        "y": 0.6402553915977478,
        "z": -0.036421358585357666
    },
    {
        "x": 0.4222155511379242,
        "y": 0.7255110740661621,
        "z": 0.026865260675549507
    },
    {
        "x": 0.42970460653305054,
        "y": 0.7388818264007568,
        "z": 0.01938958838582039
    },
    {
        "x": 0.42932406067848206,
        "y": 0.7237887382507324,
        "z": 0.02432713843882084
    },
    {
        "x": 0.4623194932937622,
        "y": 0.6346766948699951,
        "z": -0.06635178625583649
    },
    {
        "x": 0.4504190683364868,
        "y": 0.7206912636756897,
        "z": 0.0014961744891479611
    },
    {
        "x": 0.463061660528183,
        "y": 0.7222650051116943,
        "z": -0.008612971752882004
    },
    {
        "x": 0.4785865843296051,
        "y": 0.7244519591331482,
        "z": -0.016144121065735817
    },
    {
        "x": 0.47246822714805603,
        "y": 0.8075507879257202,
        "z": 0.017669769003987312
    },
    {
        "x": 0.4723108410835266,
        "y": 0.7921634912490845,
        "z": -0.003491651499643922
    },
    {
        "x": 0.4734799861907959,
        "y": 0.7779695987701416,
        "z": -0.00854362454265356
    },
    {
        "x": 0.4753172993659973,
        "y": 0.763188898563385,
        "z": -0.006972901057451963
    },
    {
        "x": 0.4771372377872467,
        "y": 0.752550482749939,
        "z": -0.005391775630414486
    },
    {
        "x": 0.4478911757469177,
        "y": 0.7413846254348755,
        "z": 0.009944446384906769
    },
    {
        "x": 0.4443245232105255,
        "y": 0.745204508304596,
        "z": 0.008224626071751118
    },
    {
        "x": 0.4394127428531647,
        "y": 0.7522692084312439,
        "z": 0.008009647950530052
    },
    {
        "x": 0.43560802936553955,
        "y": 0.7599339485168457,
        "z": 0.012468698434531689
    },
    {
        "x": 0.422385573387146,
        "y": 0.6849756836891174,
        "z": -0.004084573592990637
    },
    {
        "x": 0.31679096817970276,
        "y": 0.5702714920043945,
        "z": 0.18363244831562042
    },
    {
        "x": 0.49685660004615784,
        "y": 0.6541669368743896,
        "z": -0.058196503669023514
    },
    {
        "x": 0.43948596715927124,
        "y": 0.7348123788833618,
        "z": 0.01936184987425804
    },
    {
        "x": 0.4345965087413788,
        "y": 0.7365512251853943,
        "z": 0.01843259297311306
    },
    {
        "x": 0.47310489416122437,
        "y": 0.655765175819397,
        "z": -0.038973353803157806
    },
    {
        "x": 0.44475147128105164,
        "y": 0.6434223055839539,
        "z": -0.022316057235002518
    },
    {
        "x": 0.4702411890029907,
        "y": 0.6507136821746826,
        "z": -0.040887344628572464
    },
    {
        "x": 0.42848557233810425,
        "y": 0.5533511638641357,
        "z": -0.014840385876595974
    },
    {
        "x": 0.4015725553035736,
        "y": 0.5679448246955872,
        "z": -0.008397994562983513
    },
    {
        "x": 0.4359855651855469,
        "y": 0.6170229911804199,
        "z": -0.032953981310129166
    },
    {
        "x": 0.35315173864364624,
        "y": 0.31371212005615234,
        "z": -0.008321711793541908
    },
    {
        "x": 0.3652995228767395,
        "y": 0.35389548540115356,
        "z": -0.027655823156237602
    },
    {
        "x": 0.3770970404148102,
        "y": 0.39821869134902954,
        "z": -0.042357515543699265
    },
    {
        "x": 0.42979371547698975,
        "y": 0.7705425024032593,
        "z": 0.027045564725995064
    },
    {
        "x": 0.452606737613678,
        "y": 0.4107652008533478,
        "z": -0.06696204841136932
    },
    {
        "x": 0.4464406967163086,
        "y": 0.346511572599411,
        "z": -0.06590796262025833
    },
    {
        "x": 0.43936780095100403,
        "y": 0.28683748841285706,
        "z": -0.06207997351884842
    },
    {
        "x": 0.3781435489654541,
        "y": 0.4926146864891052,
        "z": 0.004029095638543367
    },
    {
        "x": 0.3404381573200226,
        "y": 0.5142291784286499,
        "z": 0.03259337320923805
    },
    {
        "x": 0.4474014639854431,
        "y": 0.48780515789985657,
        "z": -0.006255153566598892
    },
    {
        "x": 0.35398849844932556,
        "y": 0.45811158418655396,
        "z": 0.00726762879639864
    },
    {
        "x": 0.4569941759109497,
        "y": 0.5287091732025146,
        "z": -0.03134511411190033
    },
    {
        "x": 0.45084601640701294,
        "y": 0.6189091205596924,
        "z": -0.06707300245761871
    },
    {
        "x": 0.32440486550331116,
        "y": 0.5274245738983154,
        "z": 0.05425756424665451
    },
    {
        "x": 0.3522357940673828,
        "y": 0.5320703983306885,
        "z": 0.019458936527371407
    },
    {
        "x": 0.373605340719223,
        "y": 0.5428817272186279,
        "z": 0.004854331724345684
    },
    {
        "x": 0.4054604172706604,
        "y": 0.5404562950134277,
        "z": -0.00408804090693593
    },
    {
        "x": 0.42857620120048523,
        "y": 0.5317520499229431,
        "z": -0.00879327580332756
    },
    {
        "x": 0.445038378238678,
        "y": 0.5221105217933655,
        "z": -0.015533862635493279
    },
    {
        "x": 0.4792967438697815,
        "y": 0.5022456049919128,
        "z": -0.055616773664951324
    },
    {
        "x": 0.3284175992012024,
        "y": 0.5759800672531128,
        "z": 0.056393470615148544
    },
    {
        "x": 0.3405766487121582,
        "y": 0.4547567665576935,
        "z": 0.01418851874768734
    },
    {
        "x": 0.4877707362174988,
        "y": 0.6511403322219849,
        "z": -0.0821075588464737
    },
    {
        "x": 0.4459567964076996,
        "y": 0.5676840543746948,
        "z": -0.026657218113541603
    },
    {
        "x": 0.3087828755378723,
        "y": 0.46901822090148926,
        "z": 0.1523428112268448
    },
    {
        "x": 0.45750871300697327,
        "y": 0.5118474364280701,
        "z": -0.020388195291161537
    },
    {
        "x": 0.43466031551361084,
        "y": 0.6155336499214172,
        "z": -0.014507517218589783
    },
    {
        "x": 0.3631468117237091,
        "y": 0.4703112542629242,
        "z": 0.01502068992704153
    },
    {
        "x": 0.45025473833084106,
        "y": 0.6011514663696289,
        "z": -0.06207997351884842
    },
    {
        "x": 0.32343679666519165,
        "y": 0.6259479522705078,
        "z": 0.18507488071918488
    },
    {
        "x": 0.44632911682128906,
        "y": 0.47892051935195923,
        "z": -0.002999283839017153
    },
    {
        "x": 0.46494293212890625,
        "y": 0.5912007689476013,
        "z": -0.0810534730553627
    },
    {
        "x": 0.36860641837120056,
        "y": 0.7558836340904236,
        "z": 0.09769690036773682
    },
    {
        "x": 0.37196165323257446,
        "y": 0.7760289907455444,
        "z": 0.13126114010810852
    },
    {
        "x": 0.3151068091392517,
        "y": 0.5749931931495667,
        "z": 0.11983265727758408
    },
    {
        "x": 0.34967243671417236,
        "y": 0.7199400067329407,
        "z": 0.11239858716726303
    },
    {
        "x": 0.3182445168495178,
        "y": 0.43535757064819336,
        "z": 0.07006881386041641
    },
    {
        "x": 0.43257278203964233,
        "y": 0.8486776351928711,
        "z": 0.057086944580078125
    },
    {
        "x": 0.489759236574173,
        "y": 0.653226375579834,
        "z": -0.05703146383166313
    },
    {
        "x": 0.4310256242752075,
        "y": 0.5826629996299744,
        "z": -0.017642030492424965
    },
    {
        "x": 0.3250286281108856,
        "y": 0.48452550172805786,
        "z": 0.05312025919556618
    },
    {
        "x": 0.39349374175071716,
        "y": 0.4835565984249115,
        "z": -0.0023318130988627672
    },
    {
        "x": 0.4087979793548584,
        "y": 0.485446035861969,
        "z": -0.006560283247381449
    },
    {
        "x": 0.4250321090221405,
        "y": 0.741805911064148,
        "z": 0.022884707897901535
    },
    {
        "x": 0.33288654685020447,
        "y": 0.6215801239013672,
        "z": 0.07006881386041641
    },
    {
        "x": 0.4639473259449005,
        "y": 0.8814591765403748,
        "z": 0.06601891666650772
    },
    {
        "x": 0.4148597717285156,
        "y": 0.8390771150588989,
        "z": 0.09453465044498444
    },
    {
        "x": 0.39477530121803284,
        "y": 0.8128892183303833,
        "z": 0.11078973114490509
    },
    {
        "x": 0.4950387477874756,
        "y": 0.3468739688396454,
        "z": -0.07001333683729172
    },
    {
        "x": 0.49965229630470276,
        "y": 0.8870514631271362,
        "z": 0.061913538724184036
    },
    {
        "x": 0.422783225774765,
        "y": 0.4843668043613434,
        "z": -0.0076074316166341305
    },
    {
        "x": 0.43566757440567017,
        "y": 0.48120808601379395,
        "z": -0.005901480559259653
    },
    {
        "x": 0.4434393644332886,
        "y": 0.48008251190185547,
        "z": -0.0031258431263267994
    },
    {
        "x": 0.32940006256103516,
        "y": 0.44757211208343506,
        "z": 0.030679376795887947
    },
    {
        "x": 0.43109312653541565,
        "y": 0.4607577323913574,
        "z": -0.01037440076470375
    },
    {
        "x": 0.41625750064849854,
        "y": 0.4529540538787842,
        "z": -0.01413304079324007
    },
    {
        "x": 0.40073007345199585,
        "y": 0.4513588547706604,
        "z": -0.01330086961388588
    },
    {
        "x": 0.3856253921985626,
        "y": 0.45479685068130493,
        "z": -0.008612971752882004
    },
    {
        "x": 0.37650105357170105,
        "y": 0.46094244718551636,
        "z": -0.002163645112887025
    },
    {
        "x": 0.30966269969940186,
        "y": 0.41798412799835205,
        "z": 0.11495058983564377
    },
    {
        "x": 0.3828582465648651,
        "y": 0.4796307682991028,
        "z": 0.0026057360228151083
    },
    {
        "x": 0.4965626895427704,
        "y": 0.671326220035553,
        "z": -0.036726489663124084
    },
    {
        "x": 0.43707624077796936,
        "y": 0.6744332909584045,
        "z": -0.017031772062182426
    },
    {
        "x": 0.45211169123649597,
        "y": 0.6346005797386169,
        "z": -0.04807175695896149
    },
    {
        "x": 0.47103947401046753,
        "y": 0.6720235347747803,
        "z": -0.03459058329463005
    },
    {
        "x": 0.4958644509315491,
        "y": 0.4674544036388397,
        "z": -0.05503425374627113
    },
    {
        "x": 0.38909998536109924,
        "y": 0.790359377861023,
        "z": 0.0869896337389946
    },
    {
        "x": 0.40984028577804565,
        "y": 0.81891930103302,
        "z": 0.07350845634937286
    },
    {
        "x": 0.4622192084789276,
        "y": 0.8702026009559631,
        "z": 0.042745862156152725
    },
    {
        "x": 0.3535973131656647,
        "y": 0.7365390062332153,
        "z": 0.15611532330513
    },
    {
        "x": 0.44147568941116333,
        "y": 0.47207891941070557,
        "z": -0.006348772440105677
    },
    {
        "x": 0.4680387079715729,
        "y": 0.5409229397773743,
        "z": -0.0548400841653347
    },
    {
        "x": 0.49925318360328674,
        "y": 0.8763964772224426,
        "z": 0.039583608508110046
    },
    {
        "x": 0.43694889545440674,
        "y": 0.8635045886039734,
        "z": 0.0771700069308281
    },
    {
        "x": 0.3218846917152405,
        "y": 0.6256405115127563,
        "z": 0.12604619562625885
    },
    {
        "x": 0.4611796438694,
        "y": 0.7476973533630371,
        "z": 0.0013973540626466274
    },
    {
        "x": 0.45781874656677246,
        "y": 0.7553653120994568,
        "z": -0.00038162851706147194
    },
    {
        "x": 0.45422106981277466,
        "y": 0.7665822505950928,
        "z": -0.00046636260231025517
    },
    {
        "x": 0.45150601863861084,
        "y": 0.7789892554283142,
        "z": 0.004209399223327637
    },
    {
        "x": 0.4479008913040161,
        "y": 0.7919814586639404,
        "z": 0.020540758967399597
    },
    {
        "x": 0.43509742617607117,
        "y": 0.7229441404342651,
        "z": 0.011983265168964863
    },
    {
        "x": 0.42911583185195923,
        "y": 0.7205324172973633,
        "z": 0.012045678682625294
    },
    {
        "x": 0.42402929067611694,
        "y": 0.716352105140686,
        "z": 0.011359136551618576
    },
    {
        "x": 0.40966975688934326,
        "y": 0.7008588314056396,
        "z": 0.01249643787741661
    },
    {
        "x": 0.3537836968898773,
        "y": 0.6391932964324951,
        "z": 0.036421358585357666
    },
    {
        "x": 0.4683723449707031,
        "y": 0.5142955183982849,
        "z": -0.04230203852057457
    },
    {
        "x": 0.45924699306488037,
        "y": 0.4677731394767761,
        "z": -0.018155202269554138
    },
    {
        "x": 0.4485929012298584,
        "y": 0.4682854413986206,
        "z": -0.011116419918835163
    },
    {
        "x": 0.43932732939720154,
        "y": 0.7197209000587463,
        "z": 0.013987410813570023
    },
    {
        "x": 0.35356277227401733,
        "y": 0.6918597221374512,
        "z": 0.07345297932624817
    },
    {
        "x": 0.4736611545085907,
        "y": 0.47024768590927124,
        "z": -0.041497603058815
    },
    {
        "x": 0.4409571588039398,
        "y": 0.8073158264160156,
        "z": 0.033647455275058746
    },
    {
        "x": 0.4963896870613098,
        "y": 0.5538575053215027,
        "z": -0.08571363240480423
    },
    {
        "x": 0.4800640046596527,
        "y": 0.5309524536132812,
        "z": -0.06929212063550949
    },
    {
        "x": 0.4962832033634186,
        "y": 0.5263391733169556,
        "z": -0.07395227998495102
    },
    {
        "x": 0.4556786119937897,
        "y": 0.5778167247772217,
        "z": -0.0494309701025486
    },
    {
        "x": 0.4988962411880493,
        "y": 0.8556817173957825,
        "z": 0.026823652908205986
    },
    {
        "x": 0.4983372390270233,
        "y": 0.8302311301231384,
        "z": 0.022413145750761032
    },
    {
        "x": 0.4683944284915924,
        "y": 0.8264572620391846,
        "z": 0.025963742285966873
    },
    {
        "x": 0.4025733768939972,
        "y": 0.7525862455368042,
        "z": 0.04371672496199608
    },
    {
        "x": 0.4217176139354706,
        "y": 0.6325985789299011,
        "z": -0.007482605986297131
    },
    {
        "x": 0.4197556972503662,
        "y": 0.7828949689865112,
        "z": 0.040498998016119
    },
    {
        "x": 0.3864576816558838,
        "y": 0.6267138123512268,
        "z": 0.0002726227685343474
    },
    {
        "x": 0.40742236375808716,
        "y": 0.6546835899353027,
        "z": 0.0007363848271779716
    },
    {
        "x": 0.37433063983917236,
        "y": 0.6609463691711426,
        "z": 0.021109409630298615
    },
    {
        "x": 0.46363505721092224,
        "y": 0.8500927686691284,
        "z": 0.03073485754430294
    },
    {
        "x": 0.44542860984802246,
        "y": 0.5878005027770996,
        "z": -0.0345628447830677
    },
    {
        "x": 0.3911914825439453,
        "y": 0.767887532711029,
        "z": 0.06285666674375534
    },
    {
        "x": 0.4123656749725342,
        "y": 0.7988177537918091,
        "z": 0.056615378707647324
    },
    {
        "x": 0.3898329734802246,
        "y": 0.7214230298995972,
        "z": 0.03883465379476547
    },
    {
        "x": 0.33871549367904663,
        "y": 0.6603848338127136,
        "z": 0.08343903720378876
    },
    {
        "x": 0.3722997009754181,
        "y": 0.72188401222229,
        "z": 0.055977385491132736
    },
    {
        "x": 0.3323364853858948,
        "y": 0.6733563542366028,
        "z": 0.12726671993732452
    },
    {
        "x": 0.3953275978565216,
        "y": 0.6812232732772827,
        "z": 0.01405675895512104
    },
    {
        "x": 0.45711058378219604,
        "y": 0.5538605451583862,
        "z": -0.03972230479121208
    },
    {
        "x": 0.4565659761428833,
        "y": 0.6307872533798218,
        "z": -0.07040168344974518
    },
    {
        "x": 0.44479861855506897,
        "y": 0.6321789622306824,
        "z": -0.049791574478149414
    },
    {
        "x": 0.4643873870372772,
        "y": 0.617826521396637,
        "z": -0.08488146215677261
    },
    {
        "x": 0.4455569386482239,
        "y": 0.45139721035957336,
        "z": -0.02599148079752922
    },
    {
        "x": 0.41742226481437683,
        "y": 0.43979573249816895,
        "z": -0.031095463782548904
    },
    {
        "x": 0.39280402660369873,
        "y": 0.43635737895965576,
        "z": -0.029902685433626175
    },
    {
        "x": 0.37282541394233704,
        "y": 0.43783581256866455,
        "z": -0.021997060626745224
    },
    {
        "x": 0.35970425605773926,
        "y": 0.44454336166381836,
        "z": -0.010194097645580769
    },
    {
        "x": 0.35280075669288635,
        "y": 0.4767436385154724,
        "z": 0.022316057235002518
    },
    {
        "x": 0.3110940456390381,
        "y": 0.5264376401901245,
        "z": 0.1087370365858078
    },
    {
        "x": 0.36697858572006226,
        "y": 0.5091010928153992,
        "z": 0.013391022570431232
    },
    {
        "x": 0.3846965432167053,
        "y": 0.5175181031227112,
        "z": 0.003482983447611332
    },
    {
        "x": 0.4071093499660492,
        "y": 0.5176852345466614,
        "z": -0.0036580858286470175
    },
    {
        "x": 0.42776796221733093,
        "y": 0.5128092169761658,
        "z": -0.006508272606879473
    },
    {
        "x": 0.4431069791316986,
        "y": 0.5064140558242798,
        "z": -0.009459012188017368
    },
    {
        "x": 0.45378467440605164,
        "y": 0.5002800226211548,
        "z": -0.011289790272712708
    },
    {
        "x": 0.31256747245788574,
        "y": 0.5190514326095581,
        "z": 0.17342448234558105
    },
    {
        "x": 0.4452263116836548,
        "y": 0.6360286474227905,
        "z": -0.04030482470989227
    },
    {
        "x": 0.467935711145401,
        "y": 0.5654808878898621,
        "z": -0.0652977004647255
    },
    {
        "x": 0.46941685676574707,
        "y": 0.6356172561645508,
        "z": -0.08393833786249161
    },
    {
        "x": 0.4789179563522339,
        "y": 0.6454524397850037,
        "z": -0.0751727968454361
    },
    {
        "x": 0.4691862463951111,
        "y": 0.6376867890357971,
        "z": -0.07489541172981262
    },
    {
        "x": 0.4498615562915802,
        "y": 0.6419810056686401,
        "z": -0.033148154616355896
    },
    {
        "x": 0.4822329580783844,
        "y": 0.6487319469451904,
        "z": -0.07972200214862823
    },
    {
        "x": 0.48377761244773865,
        "y": 0.6508146524429321,
        "z": -0.05753076821565628
    },
    {
        "x": 0.4523082673549652,
        "y": 0.48192399740219116,
        "z": -0.0056830355897545815
    },
    {
        "x": 0.4618205428123474,
        "y": 0.4890962243080139,
        "z": -0.01592220924794674
    },
    {
        "x": 0.4668983817100525,
        "y": 0.4953477382659912,
        "z": -0.02811351791024208
    },
    {
        "x": 0.3714894950389862,
        "y": 0.4653433859348297,
        "z": 0.003824520157650113
    },
    {
        "x": 0.36319148540496826,
        "y": 0.4596596360206604,
        "z": 0.003762107342481613
    },
    {
        "x": 0.5114683508872986,
        "y": 0.5566329956054688,
        "z": -0.07938913255929947
    },
    {
        "x": 0.6198928952217102,
        "y": 0.472817599773407,
        "z": 0.005672633647918701
    },
    {
        "x": 0.5137539505958557,
        "y": 0.6465998291969299,
        "z": -0.0583629384636879
    },
    {
        "x": 0.6779937744140625,
        "y": 0.37679147720336914,
        "z": 0.06984689831733704
    },
    {
        "x": 0.5685313940048218,
        "y": 0.49640148878097534,
        "z": -0.009244034998118877
    },
    {
        "x": 0.5853927731513977,
        "y": 0.49741488695144653,
        "z": -0.008307842537760735
    },
    {
        "x": 0.6022615432739258,
        "y": 0.4966530203819275,
        "z": -0.004438246134668589
    },
    {
        "x": 0.6251851916313171,
        "y": 0.4808460474014282,
        "z": 0.00906373094767332
    },
    {
        "x": 0.5547916889190674,
        "y": 0.4918607175350189,
        "z": -0.008564428426325321
    },
    {
        "x": 0.595834493637085,
        "y": 0.4417179226875305,
        "z": -0.021969320252537727
    },
    {
        "x": 0.576519787311554,
        "y": 0.4436451196670532,
        "z": -0.02228832058608532
    },
    {
        "x": 0.6129121780395508,
        "y": 0.4440644383430481,
        "z": -0.016282817348837852
    },
    {
        "x": 0.6239815950393677,
        "y": 0.45036065578460693,
        "z": -0.008751667104661465
    },
    {
        "x": 0.637543797492981,
        "y": 0.4972120225429535,
        "z": 0.019181545823812485
    },
    {
        "x": 0.5627056956291199,
        "y": 0.8271604776382446,
        "z": 0.04388315975666046
    },
    {
        "x": 0.6270225048065186,
        "y": 0.46606534719467163,
        "z": 0.010360531508922577
    },
    {
        "x": 0.6829013824462891,
        "y": 0.47654223442077637,
        "z": 0.09364700317382812
    },
    {
        "x": 0.6562548875808716,
        "y": 0.4804859459400177,
        "z": 0.033758409321308136
    },
    {
        "x": 0.5834062695503235,
        "y": 0.6006649136543274,
        "z": -0.011692005209624767
    },
    {
        "x": 0.5199683904647827,
        "y": 0.6993142366409302,
        "z": -0.03434092923998833
    },
    {
        "x": 0.5165417194366455,
        "y": 0.7226638197898865,
        "z": -0.023661402985453606
    },
    {
        "x": 0.5436927676200867,
        "y": 0.7042253613471985,
        "z": -0.022607317194342613
    },
    {
        "x": 0.5569787621498108,
        "y": 0.7111298441886902,
        "z": -0.006362642627209425
    },
    {
        "x": 0.5331873893737793,
        "y": 0.722196102142334,
        "z": -0.0158112533390522
    },
    {
        "x": 0.5451667308807373,
        "y": 0.7231731414794922,
        "z": -0.0009413936641067266
    },
    {
        "x": 0.5774598717689514,
        "y": 0.7485644221305847,
        "z": 0.03251015394926071
    },
    {
        "x": 0.5117815732955933,
        "y": 0.6406674385070801,
        "z": -0.09214909374713898
    },
    {
        "x": 0.5138767957687378,
        "y": 0.6173079013824463,
        "z": -0.10002698004245758
    },
    {
        "x": 0.6493697762489319,
        "y": 0.42895013093948364,
        "z": -0.010097010992467403
    },
    {
        "x": 0.5490341782569885,
        "y": 0.5418227910995483,
        "z": -0.023550445213913918
    },
    {
        "x": 0.5540174841880798,
        "y": 0.6235249638557434,
        "z": -0.049070365726947784
    },
    {
        "x": 0.5551890730857849,
        "y": 0.6087393164634705,
        "z": -0.044937245547771454
    },
    {
        "x": 0.6309319734573364,
        "y": 0.5921427011489868,
        "z": 0.00882794987410307
    },
    {
        "x": 0.512679398059845,
        "y": 0.5853431224822998,
        "z": -0.0929257795214653
    },
    {
        "x": 0.609488844871521,
        "y": 0.41371041536331177,
        "z": -0.043439336121082306
    },
    {
        "x": 0.633886456489563,
        "y": 0.4168512225151062,
        "z": -0.029819469898939133
    },
    {
        "x": 0.6643874645233154,
        "y": 0.34044376015663147,
        "z": 0.029819469898939133
    },
    {
        "x": 0.5326010584831238,
        "y": 0.4387313425540924,
        "z": -0.055394865572452545
    },
    {
        "x": 0.559844970703125,
        "y": 0.45106589794158936,
        "z": -0.016060903668403625
    },
    {
        "x": 0.5891133546829224,
        "y": 0.7214296460151672,
        "z": 0.03142833337187767
    },
    {
        "x": 0.6585102677345276,
        "y": 0.683481752872467,
        "z": 0.17653124034404755
    },
    {
        "x": 0.5413115620613098,
        "y": 0.6370410919189453,
        "z": -0.040388043969869614
    },
    {
        "x": 0.5266320705413818,
        "y": 0.6449205875396729,
        "z": -0.04116473346948624
    },
    {
        "x": 0.572895348072052,
        "y": 0.7257470488548279,
        "z": 0.02984720654785633
    },
    {
        "x": 0.5637958645820618,
        "y": 0.7259750366210938,
        "z": 0.025353481993079185
    },
    {
        "x": 0.64283287525177,
        "y": 0.4002003073692322,
        "z": -0.02363366261124611
    },
    {
        "x": 0.5548728704452515,
        "y": 0.6312244534492493,
        "z": -0.03794700652360916
    },
    {
        "x": 0.5763977766036987,
        "y": 0.4198252558708191,
        "z": -0.05264870077371597
    },
    {
        "x": 0.5798082947731018,
        "y": 0.4003220796585083,
        "z": -0.05947250500321388
    },
    {
        "x": 0.5968967080116272,
        "y": 0.29429981112480164,
        "z": -0.04357803240418434
    },
    {
        "x": 0.6531685590744019,
        "y": 0.3698009252548218,
        "z": -0.0009075867128558457
    },
    {
        "x": 0.5862513780593872,
        "y": 0.3456309139728546,
        "z": -0.05314800143241882
    },
    {
        "x": 0.6587420701980591,
        "y": 0.4165927767753601,
        "z": 0.0030877019744366407
    },
    {
        "x": 0.6681404113769531,
        "y": 0.3980219066143036,
        "z": 0.03442414849996567
    },
    {
        "x": 0.5185785889625549,
        "y": 0.7132105827331543,
        "z": -0.030707117170095444
    },
    {
        "x": 0.5378760099411011,
        "y": 0.7154257297515869,
        "z": -0.019528284668922424
    },
    {
        "x": 0.5511818528175354,
        "y": 0.717596173286438,
        "z": -0.004968755412846804
    },
    {
        "x": 0.5370804071426392,
        "y": 0.6405601501464844,
        "z": -0.03678196668624878
    },
    {
        "x": 0.5682327747344971,
        "y": 0.7263040542602539,
        "z": 0.027350692078471184
    },
    {
        "x": 0.5612990260124207,
        "y": 0.7392714023590088,
        "z": 0.019764065742492676
    },
    {
        "x": 0.5613610744476318,
        "y": 0.7244774699211121,
        "z": 0.024729354307055473
    },
    {
        "x": 0.5311137437820435,
        "y": 0.6345979571342468,
        "z": -0.06685108691453934
    },
    {
        "x": 0.5414029359817505,
        "y": 0.7210738658905029,
        "z": 0.0018862546421587467
    },
    {
        "x": 0.529413640499115,
        "y": 0.7224639058113098,
        "z": -0.00832864735275507
    },
    {
        "x": 0.5143139362335205,
        "y": 0.7247183918952942,
        "z": -0.01588059961795807
    },
    {
        "x": 0.5232853293418884,
        "y": 0.8079297542572021,
        "z": 0.01804424449801445
    },
    {
        "x": 0.5217990279197693,
        "y": 0.7919407486915588,
        "z": -0.0031726527959108353
    },
    {
        "x": 0.5200833082199097,
        "y": 0.777725338935852,
        "z": -0.00829397328197956
    },
    {
        "x": 0.5179262757301331,
        "y": 0.7629148364067078,
        "z": -0.006646967492997646
    },
    {
        "x": 0.5157493948936462,
        "y": 0.7528384327888489,
        "z": -0.005038103088736534
    },
    {
        "x": 0.5439801812171936,
        "y": 0.7415093183517456,
        "z": 0.01029811892658472
    },
    {
        "x": 0.5475146174430847,
        "y": 0.7453821897506714,
        "z": 0.008502015843987465
    },
    {
        "x": 0.5523668527603149,
        "y": 0.7525197267532349,
        "z": 0.008342516608536243
    },
    {
        "x": 0.556553304195404,
        "y": 0.7596522569656372,
        "z": 0.012968000955879688
    },
    {
        "x": 0.5704012513160706,
        "y": 0.6854877471923828,
        "z": -0.004160855896770954
    },
    {
        "x": 0.677634596824646,
        "y": 0.5682281255722046,
        "z": 0.18174618482589722
    },
    {
        "x": 0.5517730712890625,
        "y": 0.7353538274765015,
        "z": 0.019722457975149155
    },
    {
        "x": 0.5564257502555847,
        "y": 0.7371638417243958,
        "z": 0.01882093958556652
    },
    {
        "x": 0.5201520919799805,
        "y": 0.6555241942405701,
        "z": -0.03922300413250923
    },
    {
        "x": 0.5488279461860657,
        "y": 0.6439025402069092,
        "z": -0.02255184017121792
    },
    {
        "x": 0.5232798457145691,
        "y": 0.650517463684082,
        "z": -0.04113699868321419
    },
    {
        "x": 0.5662959218025208,
        "y": 0.5531952381134033,
        "z": -0.015395167283713818
    },
    {
        "x": 0.5933079719543457,
        "y": 0.5678951740264893,
        "z": -0.008862623013556004
    },
    {
        "x": 0.558039128780365,
        "y": 0.6170454621315002,
        "z": -0.03359197825193405
    },
    {
        "x": 0.6387646198272705,
        "y": 0.31199541687965393,
        "z": -0.009902837686240673
    },
    {
        "x": 0.6270620822906494,
        "y": 0.35081738233566284,
        "z": -0.028931818902492523
    },
    {
        "x": 0.6153428554534912,
        "y": 0.39363372325897217,
        "z": -0.04330063983798027
    },
    {
        "x": 0.5640510320663452,
        "y": 0.7709518671035767,
        "z": 0.027447780594229698
    },
    {
        "x": 0.5384954214096069,
        "y": 0.40903860330581665,
        "z": -0.06701751798391342
    },
    {
        "x": 0.543864905834198,
        "y": 0.34575870633125305,
        "z": -0.0662408247590065
    },
    {
        "x": 0.5501061677932739,
        "y": 0.2862577736377716,
        "z": -0.06263475120067596
    },
    {
        "x": 0.6171542406082153,
        "y": 0.49084633588790894,
        "z": 0.002621339401230216
    },
    {
        "x": 0.6543418765068054,
        "y": 0.5133152008056641,
        "z": 0.030984509736299515
    },
    {
        "x": 0.546379029750824,
        "y": 0.48706379532814026,
        "z": -0.0069000860676169395
    },
    {
        "x": 0.640828013420105,
        "y": 0.4549245834350586,
        "z": 0.005627557635307312
    },
    {
        "x": 0.5368850827217102,
        "y": 0.5284172892570496,
        "z": -0.03192763403058052
    },
    {
        "x": 0.5429406762123108,
        "y": 0.6190040707588196,
        "z": -0.06762778013944626
    },
    {
        "x": 0.6702659130096436,
        "y": 0.5261571407318115,
        "z": 0.05251000449061394
    },
    {
        "x": 0.6427257061004639,
        "y": 0.5315736532211304,
        "z": 0.01812746189534664
    },
    {
        "x": 0.6213752627372742,
        "y": 0.5426581501960754,
        "z": 0.0038210528437048197
    },
    {
        "x": 0.5894303321838379,
        "y": 0.5400528311729431,
        "z": -0.004805788863450289
    },
    {
        "x": 0.5661658644676208,
        "y": 0.5312986373901367,
        "z": -0.009431273676455021
    },
    {
        "x": 0.5491185784339905,
        "y": 0.5217030644416809,
        "z": -0.01622733846306801
    },
    {
        "x": 0.5132500529289246,
        "y": 0.5022028684616089,
        "z": -0.0558386892080307
    },
    {
        "x": 0.6665093898773193,
        "y": 0.5752464532852173,
        "z": 0.05503425374627113
    },
    {
        "x": 0.6541562080383301,
        "y": 0.4517691731452942,
        "z": 0.012385481037199497
    },
    {
        "x": 0.5059685111045837,
        "y": 0.6509801149368286,
        "z": -0.08216303586959839
    },
    {
        "x": 0.548260509967804,
        "y": 0.5675593018531799,
        "z": -0.027170389890670776
    },
    {
        "x": 0.6851576566696167,
        "y": 0.467682421207428,
        "z": 0.15067847073078156
    },
    {
        "x": 0.5362913608551025,
        "y": 0.5112513303756714,
        "z": -0.020915236324071884
    },
    {
        "x": 0.55915367603302,
        "y": 0.6158701777458191,
        "z": -0.01477103866636753
    },
    {
        "x": 0.6318982839584351,
        "y": 0.4675811529159546,
        "z": 0.013592129573225975
    },
    {
        "x": 0.5434601902961731,
        "y": 0.6009588241577148,
        "z": -0.06263475120067596
    },
    {
        "x": 0.6707452535629272,
        "y": 0.6235077977180481,
        "z": 0.18363244831562042
    },
    {
        "x": 0.5473038554191589,
        "y": 0.47819405794143677,
        "z": -0.0036060751881450415
    },
    {
        "x": 0.528411328792572,
        "y": 0.5910822749137878,
        "z": -0.08144182711839676
    },
    {
        "x": 0.6267013549804688,
        "y": 0.7542576193809509,
        "z": 0.0968647301197052
    },
    {
        "x": 0.624397873878479,
        "y": 0.7743607759475708,
        "z": 0.13026253879070282
    },
    {
        "x": 0.6793887615203857,
        "y": 0.5732713341712952,
        "z": 0.11816830933094025
    },
    {
        "x": 0.6450492739677429,
        "y": 0.7182961106300354,
        "z": 0.11151093989610672
    },
    {
        "x": 0.675537645816803,
        "y": 0.43328770995140076,
        "z": 0.0681825578212738
    },
    {
        "x": 0.5655036568641663,
        "y": 0.8478935360908508,
        "z": 0.05703146383166313
    },
    {
        "x": 0.5041845440864563,
        "y": 0.6530380845069885,
        "z": -0.057086944580078125
    },
    {
        "x": 0.5635101795196533,
        "y": 0.5824673771858215,
        "z": -0.01812746189534664
    },
    {
        "x": 0.6691169142723083,
        "y": 0.48265308141708374,
        "z": 0.05148366093635559
    },
    {
        "x": 0.6014347672462463,
        "y": 0.4821483790874481,
        "z": -0.0035384611692279577
    },
    {
        "x": 0.5861143469810486,
        "y": 0.48410531878471375,
        "z": -0.007482605986297131
    },
    {
        "x": 0.5661686062812805,
        "y": 0.7422665953636169,
        "z": 0.023078883066773415
    },
    {
        "x": 0.6618800759315491,
        "y": 0.6207786798477173,
        "z": 0.06895925849676132
    },
    {
        "x": 0.5354069471359253,
        "y": 0.8808084726333618,
        "z": 0.06607439368963242
    },
    {
        "x": 0.5835204720497131,
        "y": 0.8379676938056946,
        "z": 0.09409081935882568
    },
    {
        "x": 0.602496862411499,
        "y": 0.8108875751495361,
        "z": 0.11001303046941757
    },
    {
        "x": 0.5719146728515625,
        "y": 0.4834076762199402,
        "z": -0.008522819727659225
    },
    {
        "x": 0.5583906173706055,
        "y": 0.4803479313850403,
        "z": -0.006598424166440964
    },
    {
        "x": 0.5506275296211243,
        "y": 0.4794023931026459,
        "z": -0.0038418571930378675
    },
    {
        "x": 0.6648382544517517,
        "y": 0.44459962844848633,
        "z": 0.028904080390930176
    },
    {
        "x": 0.5629169344902039,
        "y": 0.4593736529350281,
        "z": -0.011373006738722324
    },
    {
        "x": 0.5782634019851685,
        "y": 0.45120322704315186,
        "z": -0.015159386210143566
    },
    {
        "x": 0.594027578830719,
        "y": 0.44924962520599365,
        "z": -0.014521387405693531
    },
    {
        "x": 0.609325647354126,
        "y": 0.45261842012405396,
        "z": -0.009916706942021847
    },
    {
        "x": 0.6186209917068481,
        "y": 0.45860549807548523,
        "z": -0.003619944676756859
    },
    {
        "x": 0.6840403079986572,
        "y": 0.4166334867477417,
        "z": 0.11334171891212463
    },
    {
        "x": 0.6123269200325012,
        "y": 0.47779127955436707,
        "z": 0.0014112237840890884
    },
    {
        "x": 0.5562437772750854,
        "y": 0.6747301816940308,
        "z": -0.017101118341088295
    },
    {
        "x": 0.5415434241294861,
        "y": 0.6346757411956787,
        "z": -0.04846009984612465
    },
    {
        "x": 0.5223016738891602,
        "y": 0.6721099615097046,
        "z": -0.0346183218061924
    },
    {
        "x": 0.6070244312286377,
        "y": 0.7896174192428589,
        "z": 0.08643484860658646
    },
    {
        "x": 0.5871553421020508,
        "y": 0.8178744912147522,
        "z": 0.0731201097369194
    },
    {
        "x": 0.5363417267799377,
        "y": 0.8695717453956604,
        "z": 0.042940035462379456
    },
    {
        "x": 0.6418743133544922,
        "y": 0.7345462441444397,
        "z": 0.15478384494781494
    },
    {
        "x": 0.5522168874740601,
        "y": 0.4708334803581238,
        "z": -0.007163607515394688
    },
    {
        "x": 0.5252924561500549,
        "y": 0.5410540103912354,
        "z": -0.05528390407562256
    },
    {
        "x": 0.561888575553894,
        "y": 0.8632527589797974,
        "z": 0.07683713734149933
    },
    {
        "x": 0.6725192666053772,
        "y": 0.6238168478012085,
        "z": 0.12427090108394623
    },
    {
        "x": 0.531304121017456,
        "y": 0.7479243278503418,
        "z": 0.0015499189030379057
    },
    {
        "x": 0.5350455045700073,
        "y": 0.7553494572639465,
        "z": -0.00007931631989777088
    },
    {
        "x": 0.5387707948684692,
        "y": 0.766620934009552,
        "z": -0.00009351090557174757
    },
    {
        "x": 0.5416035056114197,
        "y": 0.7790693640708923,
        "z": 0.004732973873615265
    },
    {
        "x": 0.5466527938842773,
        "y": 0.7921260595321655,
        "z": 0.02109554037451744
    },
    {
        "x": 0.5560389757156372,
        "y": 0.7235501408576965,
        "z": 0.012406284920871258
    },
    {
        "x": 0.5618185997009277,
        "y": 0.7212260961532593,
        "z": 0.012177438475191593
    },
    {
        "x": 0.5671617388725281,
        "y": 0.7171235084533691,
        "z": 0.01154637522995472
    },
    {
        "x": 0.5823172926902771,
        "y": 0.701554536819458,
        "z": 0.012649002484977245
    },
    {
        "x": 0.6413875222206116,
        "y": 0.6389709115028381,
        "z": 0.03581110015511513
    },
    {
        "x": 0.5249627828598022,
        "y": 0.5138298273086548,
        "z": -0.04271811991930008
    },
    {
        "x": 0.533592700958252,
        "y": 0.46684807538986206,
        "z": -0.018918024376034737
    },
    {
        "x": 0.5449088215827942,
        "y": 0.46722835302352905,
        "z": -0.011809896677732468
    },
    {
        "x": 0.5513925552368164,
        "y": 0.7202606797218323,
        "z": 0.01443817000836134
    },
    {
        "x": 0.6411690711975098,
        "y": 0.6910455226898193,
        "z": 0.07284271717071533
    },
    {
        "x": 0.5187123417854309,
        "y": 0.4696959853172302,
        "z": -0.041969168931245804
    },
    {
        "x": 0.5548014044761658,
        "y": 0.8069812059402466,
        "z": 0.03406354412436485
    },
    {
        "x": 0.512687087059021,
        "y": 0.5306039452552795,
        "z": -0.06945855915546417
    },
    {
        "x": 0.5380105376243591,
        "y": 0.5775430202484131,
        "z": -0.0499025359749794
    },
    {
        "x": 0.5283123254776001,
        "y": 0.8263123035430908,
        "z": 0.026088567450642586
    },
    {
        "x": 0.5914202928543091,
        "y": 0.7534027099609375,
        "z": 0.043938640505075455
    },
    {
        "x": 0.5723962187767029,
        "y": 0.6331304907798767,
        "z": -0.007766931317746639
    },
    {
        "x": 0.5753187537193298,
        "y": 0.782871425151825,
        "z": 0.04091508314013481
    },
    {
        "x": 0.6081520915031433,
        "y": 0.626591682434082,
        "z": 0.00012655937462113798
    },
    {
        "x": 0.5862846374511719,
        "y": 0.6551296710968018,
        "z": 0.0006015904364176095
    },
    {
        "x": 0.6204349994659424,
        "y": 0.6610062718391418,
        "z": 0.021137148141860962
    },
    {
        "x": 0.5342045426368713,
        "y": 0.8500272035598755,
        "z": 0.030818074941635132
    },
    {
        "x": 0.5486199259757996,
        "y": 0.58768230676651,
        "z": -0.03511762619018555
    },
    {
        "x": 0.6040095090866089,
        "y": 0.7676992416381836,
        "z": 0.06280118972063065
    },
    {
        "x": 0.5834648609161377,
        "y": 0.7983183860778809,
        "z": 0.05667085945606232
    },
    {
        "x": 0.6035374402999878,
        "y": 0.7215372323989868,
        "z": 0.03916752338409424
    },
    {
        "x": 0.6563916802406311,
        "y": 0.6594990491867065,
        "z": 0.08266233652830124
    },
    {
        "x": 0.6219570636749268,
        "y": 0.7213786840438843,
        "z": 0.055894166231155396
    },
    {
        "x": 0.662110447883606,
        "y": 0.671673059463501,
        "z": 0.12593524158000946
    },
    {
        "x": 0.5979341268539429,
        "y": 0.6818464398384094,
        "z": 0.014195453375577927
    },
    {
        "x": 0.5365564227104187,
        "y": 0.553861141204834,
        "z": -0.04033256322145462
    },
    {
        "x": 0.5368995070457458,
        "y": 0.6307945251464844,
        "z": -0.07090098410844803
    },
    {
        "x": 0.5488775968551636,
        "y": 0.6320674419403076,
        "z": -0.05029087886214256
    },
    {
        "x": 0.5291872620582581,
        "y": 0.617717981338501,
        "z": -0.08549172431230545
    },
    {
        "x": 0.5472010970115662,
        "y": 0.44978809356689453,
        "z": -0.026865260675549507
    },
    {
        "x": 0.5756600499153137,
        "y": 0.436981201171875,
        "z": -0.03201085329055786
    },
    {
        "x": 0.6007518768310547,
        "y": 0.4333218038082123,
        "z": -0.03076259419322014
    },
    {
        "x": 0.6209412813186646,
        "y": 0.43450796604156494,
        "z": -0.02328692562878132
    },
    {
        "x": 0.6346722841262817,
        "y": 0.441119909286499,
        "z": -0.011692005209624767
    },
    {
        "x": 0.6420775651931763,
        "y": 0.47446250915527344,
        "z": 0.020610107108950615
    },
    {
        "x": 0.683587908744812,
        "y": 0.5244811773300171,
        "z": 0.1067953109741211
    },
    {
        "x": 0.6281789541244507,
        "y": 0.5077941417694092,
        "z": 0.012052612379193306
    },
    {
        "x": 0.610388994216919,
        "y": 0.516538143157959,
        "z": 0.0022988729178905487
    },
    {
        "x": 0.5877518057823181,
        "y": 0.5169610977172852,
        "z": -0.004622017499059439
    },
    {
        "x": 0.5666903853416443,
        "y": 0.512069821357727,
        "z": -0.0073647149838507175
    },
    {
        "x": 0.550960898399353,
        "y": 0.5057389140129089,
        "z": -0.010173292830586433
    },
    {
        "x": 0.5401121973991394,
        "y": 0.49974021315574646,
        "z": -0.011941656470298767
    },
    {
        "x": 0.6813998818397522,
        "y": 0.5170676708221436,
        "z": 0.17176014184951782
    },
    {
        "x": 0.5484151840209961,
        "y": 0.6365022659301758,
        "z": -0.04072091355919838
    },
    {
        "x": 0.5254125595092773,
        "y": 0.565317690372467,
        "z": -0.06579700857400894
    },
    {
        "x": 0.5242308378219604,
        "y": 0.6354342699050903,
        "z": -0.08427120745182037
    },
    {
        "x": 0.5146477818489075,
        "y": 0.6451271176338196,
        "z": -0.07539471238851547
    },
    {
        "x": 0.5242221355438232,
        "y": 0.6375054121017456,
        "z": -0.0751727968454361
    },
    {
        "x": 0.5437302589416504,
        "y": 0.6423850655555725,
        "z": -0.03353650122880936
    },
    {
        "x": 0.5115261673927307,
        "y": 0.6486544609069824,
        "z": -0.07972200214862823
    },
    {
        "x": 0.5097422003746033,
        "y": 0.6507123708724976,
        "z": -0.05769720301032066
    },
    {
        "x": 0.5412999391555786,
        "y": 0.4811081290245056,
        "z": -0.006508272606879473
    },
    {
        "x": 0.5315036773681641,
        "y": 0.48872819542884827,
        "z": -0.016476990655064583
    },
    {
        "x": 0.5263736844062805,
        "y": 0.4949035942554474,
        "z": -0.028432514518499374
    },
    {
        "x": 0.6234856843948364,
        "y": 0.4627842307090759,
        "z": 0.0025779970455914736
    },
    {
        "x": 0.6315004229545593,
        "y": 0.4566303491592407,
        "z": 0.0020821618381887674
    }
]

let fearfulDatabase = [
    {
        "x": 0.48796290159225464,
        "y": 0.663012683391571,
        "z": -0.06247302517294884
    },
    {
        "x": 0.4840840697288513,
        "y": 0.5831589102745056,
        "z": -0.10124756395816803
    },
    {
        "x": 0.48678579926490784,
        "y": 0.610815703868866,
        "z": -0.057606372982263565
    },
    {
        "x": 0.4702583849430084,
        "y": 0.5044022798538208,
        "z": -0.06919112801551819
    },
    {
        "x": 0.4834947884082794,
        "y": 0.5574836134910583,
        "z": -0.10547944158315659
    },
    {
        "x": 0.48376336693763733,
        "y": 0.5253221392631531,
        "z": -0.09537584334611893
    },
    {
        "x": 0.485799640417099,
        "y": 0.4508473873138428,
        "z": -0.039541564881801605
    },
    {
        "x": 0.3656112551689148,
        "y": 0.4524437189102173,
        "z": 0.03906548023223877
    },
    {
        "x": 0.4856800138950348,
        "y": 0.39893585443496704,
        "z": -0.02215120941400528
    },
    {
        "x": 0.48488759994506836,
        "y": 0.36846381425857544,
        "z": -0.022495049983263016
    },
    {
        "x": 0.4840313196182251,
        "y": 0.2546233832836151,
        "z": 0.010242454707622528
    },
    {
        "x": 0.48815301060676575,
        "y": 0.6751446723937988,
        "z": -0.061838243156671524
    },
    {
        "x": 0.4887697696685791,
        "y": 0.6853031516075134,
        "z": -0.05697159096598625
    },
    {
        "x": 0.48960715532302856,
        "y": 0.690384030342102,
        "z": -0.04977740719914436
    },
    {
        "x": 0.4907742738723755,
        "y": 0.7482234835624695,
        "z": -0.03710823506116867
    },
    {
        "x": 0.4909633696079254,
        "y": 0.7609196901321411,
        "z": -0.040520183742046356
    },
    {
        "x": 0.491148978471756,
        "y": 0.7755908966064453,
        "z": -0.04382633417844772
    },
    {
        "x": 0.49175775051116943,
        "y": 0.790263295173645,
        "z": -0.038562942296266556
    },
    {
        "x": 0.4932089149951935,
        "y": 0.8071954250335693,
        "z": -0.019413718953728676
    },
    {
        "x": 0.48469385504722595,
        "y": 0.5972670912742615,
        "z": -0.09304830431938171
    },
    {
        "x": 0.4711523950099945,
        "y": 0.5969423055648804,
        "z": -0.06797446310520172
    },
    {
        "x": 0.3110441565513611,
        "y": 0.3790602684020996,
        "z": 0.13616052269935608
    },
    {
        "x": 0.4144552946090698,
        "y": 0.4717820882797241,
        "z": 0.017258107662200928
    },
    {
        "x": 0.39773494005203247,
        "y": 0.4742685556411743,
        "z": 0.018726037815213203
    },
    {
        "x": 0.3817596435546875,
        "y": 0.4742182493209839,
        "z": 0.0239497572183609
    },
    {
        "x": 0.3599855601787567,
        "y": 0.46286463737487793,
        "z": 0.040731776505708694
    },
    {
        "x": 0.42864400148391724,
        "y": 0.46505576372146606,
        "z": 0.018302852287888527
    },
    {
        "x": 0.39118194580078125,
        "y": 0.4109107255935669,
        "z": 0.01617369055747986
    },
    {
        "x": 0.40990668535232544,
        "y": 0.41167500615119934,
        "z": 0.015578582882881165
    },
    {
        "x": 0.37403416633605957,
        "y": 0.41579392552375793,
        "z": 0.021860269829630852
    },
    {
        "x": 0.36269718408584595,
        "y": 0.4252094030380249,
        "z": 0.02909412607550621
    },
    {
        "x": 0.3474695682525635,
        "y": 0.4808812737464905,
        "z": 0.04850784316658974
    },
    {
        "x": 0.42906224727630615,
        "y": 0.8261779546737671,
        "z": -0.0016828308580443263
    },
    {
        "x": 0.359801709651947,
        "y": 0.4472060799598694,
        "z": 0.045571982860565186
    },
    {
        "x": 0.30303704738616943,
        "y": 0.4796128273010254,
        "z": 0.13171705603599548
    },
    {
        "x": 0.3291882872581482,
        "y": 0.4686923027038574,
        "z": 0.06882083415985107
    },
    {
        "x": 0.4034876227378845,
        "y": 0.5713379383087158,
        "z": -0.01061935629695654
    },
    {
        "x": 0.4653269350528717,
        "y": 0.6604022979736328,
        "z": -0.05845274776220322
    },
    {
        "x": 0.47057080268859863,
        "y": 0.686374306678772,
        "z": -0.05316290631890297
    },
    {
        "x": 0.4441491365432739,
        "y": 0.6707742214202881,
        "z": -0.04726473614573479
    },
    {
        "x": 0.4326971471309662,
        "y": 0.6854086518287659,
        "z": -0.0322415828704834
    },
    {
        "x": 0.4559633731842041,
        "y": 0.6905602216720581,
        "z": -0.044566914439201355
    },
    {
        "x": 0.4457954168319702,
        "y": 0.6970170736312866,
        "z": -0.030390139669179916
    },
    {
        "x": 0.4146142601966858,
        "y": 0.7403662204742432,
        "z": -0.0013927160762250423
    },
    {
        "x": 0.4701189398765564,
        "y": 0.5831149220466614,
        "z": -0.09902583062648773
    },
    {
        "x": 0.46741169691085815,
        "y": 0.5585614442825317,
        "z": -0.1027287170290947
    },
    {
        "x": 0.33765265345573425,
        "y": 0.4086261987686157,
        "z": 0.03779591619968414
    },
    {
        "x": 0.4368176758289337,
        "y": 0.509375274181366,
        "z": -0.009482041001319885
    },
    {
        "x": 0.4337294101715088,
        "y": 0.5804612040519714,
        "z": -0.05218428745865822
    },
    {
        "x": 0.4326934516429901,
        "y": 0.5680443644523621,
        "z": -0.045677781105041504
    },
    {
        "x": 0.35450130701065063,
        "y": 0.5725942850112915,
        "z": 0.013522157445549965
    },
    {
        "x": 0.46852266788482666,
        "y": 0.5286596417427063,
        "z": -0.08897513896226883
    },
    {
        "x": 0.3765294551849365,
        "y": 0.3808181881904602,
        "z": 0.005878336261957884
    },
    {
        "x": 0.3530261516571045,
        "y": 0.390054315328598,
        "z": 0.020286541432142258
    },
    {
        "x": 0.32498347759246826,
        "y": 0.3339640498161316,
        "z": 0.10420987755060196
    },
    {
        "x": 0.45077189803123474,
        "y": 0.3961457312107086,
        "z": -0.01403130404651165
    },
    {
        "x": 0.42618638277053833,
        "y": 0.419061541557312,
        "z": 0.019810456782579422
    },
    {
        "x": 0.4034543037414551,
        "y": 0.7095794081687927,
        "z": 0.0023705102503299713
    },
    {
        "x": 0.33056145906448364,
        "y": 0.7087855339050293,
        "z": 0.1541459709405899
    },
    {
        "x": 0.4470362961292267,
        "y": 0.593762993812561,
        "z": -0.04652415215969086
    },
    {
        "x": 0.46098843216896057,
        "y": 0.6011422276496887,
        "z": -0.05109986662864685
    },
    {
        "x": 0.4201616644859314,
        "y": 0.714428186416626,
        "z": -0.0006951182731427252
    },
    {
        "x": 0.42989644408226013,
        "y": 0.71361243724823,
        "z": -0.005620456766337156
    },
    {
        "x": 0.3441624641418457,
        "y": 0.3769075870513916,
        "z": 0.03142165765166283
    },
    {
        "x": 0.43434321880340576,
        "y": 0.5923123955726624,
        "z": -0.04332379996776581
    },
    {
        "x": 0.4084795415401459,
        "y": 0.3812009394168854,
        "z": -0.005878336261957884
    },
    {
        "x": 0.40470385551452637,
        "y": 0.36256876587867737,
        "z": -0.0077033317647874355
    },
    {
        "x": 0.3877266049385071,
        "y": 0.27117711305618286,
        "z": 0.03697599098086357
    },
    {
        "x": 0.33499816060066223,
        "y": 0.3543086349964142,
        "z": 0.06337229907512665
    },
    {
        "x": 0.39759576320648193,
        "y": 0.31395021080970764,
        "z": 0.01346264686435461
    },
    {
        "x": 0.32856816053390503,
        "y": 0.40069806575775146,
        "z": 0.055649131536483765
    },
    {
        "x": 0.31991058588027954,
        "y": 0.3906553387641907,
        "z": 0.0941062793135643
    },
    {
        "x": 0.4674168825149536,
        "y": 0.6750794053077698,
        "z": -0.057712167501449585
    },
    {
        "x": 0.4502648711204529,
        "y": 0.6823606491088867,
        "z": -0.04676219820976257
    },
    {
        "x": 0.43882283568382263,
        "y": 0.6913526058197021,
        "z": -0.03292926400899887
    },
    {
        "x": 0.4516833424568176,
        "y": 0.5982916355133057,
        "z": -0.0441172756254673
    },
    {
        "x": 0.4250278174877167,
        "y": 0.7147256135940552,
        "z": -0.0032631708309054375
    },
    {
        "x": 0.4305017292499542,
        "y": 0.7302597165107727,
        "z": -0.012041001580655575
    },
    {
        "x": 0.4328617453575134,
        "y": 0.7119290232658386,
        "z": -0.006149440538138151
    },
    {
        "x": 0.454246461391449,
        "y": 0.5847576856613159,
        "z": -0.07114836573600769
    },
    {
        "x": 0.4502403736114502,
        "y": 0.6961846947669983,
        "z": -0.028247753158211708
    },
    {
        "x": 0.4606154263019562,
        "y": 0.6922675967216492,
        "z": -0.038510046899318695
    },
    {
        "x": 0.4735255837440491,
        "y": 0.6906155347824097,
        "z": -0.046497706323862076
    },
    {
        "x": 0.46739956736564636,
        "y": 0.8042929172515869,
        "z": -0.018302852287888527
    },
    {
        "x": 0.46679678559303284,
        "y": 0.7862349152565002,
        "z": -0.03631475940346718
    },
    {
        "x": 0.4678807258605957,
        "y": 0.7715678215026855,
        "z": -0.0398060567677021
    },
    {
        "x": 0.47002264857292175,
        "y": 0.7569040656089783,
        "z": -0.03634120896458626
    },
    {
        "x": 0.47236865758895874,
        "y": 0.7464727759361267,
        "z": -0.03335244953632355
    },
    {
        "x": 0.4476337730884552,
        "y": 0.7342634797096252,
        "z": -0.01817060448229313
    },
    {
        "x": 0.44360649585723877,
        "y": 0.7382005453109741,
        "z": -0.020841974765062332
    },
    {
        "x": 0.4380930960178375,
        "y": 0.7449542284011841,
        "z": -0.0229050125926733
    },
    {
        "x": 0.4336366653442383,
        "y": 0.7522754073143005,
        "z": -0.019757557660341263
    },
    {
        "x": 0.4194122552871704,
        "y": 0.6596934199333191,
        "z": -0.024386169388890266
    },
    {
        "x": 0.30919092893600464,
        "y": 0.5890969634056091,
        "z": 0.1926560252904892
    },
    {
        "x": 0.48574182391166687,
        "y": 0.6029129028320312,
        "z": -0.0700903981924057
    },
    {
        "x": 0.44108736515045166,
        "y": 0.7269075512886047,
        "z": -0.010070535354316235
    },
    {
        "x": 0.4355839490890503,
        "y": 0.7280187606811523,
        "z": -0.011902143247425556
    },
    {
        "x": 0.46625977754592896,
        "y": 0.61159747838974,
        "z": -0.05202559009194374
    },
    {
        "x": 0.4408756196498871,
        "y": 0.6075677275657654,
        "z": -0.031553901731967926
    },
    {
        "x": 0.4637296497821808,
        "y": 0.6065112352371216,
        "z": -0.05223718285560608
    },
    {
        "x": 0.4192289710044861,
        "y": 0.5242725014686584,
        "z": -0.004149219486862421
    },
    {
        "x": 0.3916913866996765,
        "y": 0.5413954854011536,
        "z": 0.0003227629931643605
    },
    {
        "x": 0.4305565357208252,
        "y": 0.5798869132995605,
        "z": -0.03612961620092392
    },
    {
        "x": 0.34874725341796875,
        "y": 0.29715096950531006,
        "z": 0.06860924512147903
    },
    {
        "x": 0.3593788743019104,
        "y": 0.3275834619998932,
        "z": 0.03726693242788315
    },
    {
        "x": 0.3704242706298828,
        "y": 0.3633071780204773,
        "z": 0.011716999113559723
    },
    {
        "x": 0.4266330897808075,
        "y": 0.7641026377677917,
        "z": -0.008225703611969948
    },
    {
        "x": 0.4442662298679352,
        "y": 0.3657967448234558,
        "z": -0.018395423889160156
    },
    {
        "x": 0.43780606985092163,
        "y": 0.3097744286060333,
        "z": -0.001254684291779995
    },
    {
        "x": 0.43133726716041565,
        "y": 0.2586188018321991,
        "z": 0.01686136983335018
    },
    {
        "x": 0.3679063022136688,
        "y": 0.4707891345024109,
        "z": 0.032558973878622055
    },
    {
        "x": 0.3301907479763031,
        "y": 0.5000113844871521,
        "z": 0.057500578463077545
    },
    {
        "x": 0.43796610832214355,
        "y": 0.45831412076950073,
        "z": 0.02110646665096283
    },
    {
        "x": 0.345537930727005,
        "y": 0.43658149242401123,
        "z": 0.04533394053578377
    },
    {
        "x": 0.44848528504371643,
        "y": 0.4924844801425934,
        "z": -0.015300866216421127
    },
    {
        "x": 0.4428459107875824,
        "y": 0.5703333616256714,
        "z": -0.06950851529836655
    },
    {
        "x": 0.3140762150287628,
        "y": 0.5188630819320679,
        "z": 0.07575052976608276
    },
    {
        "x": 0.3411675989627838,
        "y": 0.5147165060043335,
        "z": 0.03909192606806755
    },
    {
        "x": 0.3624212145805359,
        "y": 0.5212723016738892,
        "z": 0.02104034274816513
    },
    {
        "x": 0.39469966292381287,
        "y": 0.5154493451118469,
        "z": 0.011207851581275463
    },
    {
        "x": 0.4184175729751587,
        "y": 0.5045211315155029,
        "z": 0.007524799555540085
    },
    {
        "x": 0.4362133741378784,
        "y": 0.49216368794441223,
        "z": 0.002529205521568656
    },
    {
        "x": 0.4697055518627167,
        "y": 0.45813193917274475,
        "z": -0.03205643966794014
    },
    {
        "x": 0.31779640913009644,
        "y": 0.5688110589981079,
        "z": 0.0653824433684349
    },
    {
        "x": 0.33252519369125366,
        "y": 0.4363994300365448,
        "z": 0.05506724864244461
    },
    {
        "x": 0.4766548275947571,
        "y": 0.5963954329490662,
        "z": -0.09151425957679749
    },
    {
        "x": 0.4382583498954773,
        "y": 0.5322319865226746,
        "z": -0.019585637375712395
    },
    {
        "x": 0.3017609715461731,
        "y": 0.48327645659446716,
        "z": 0.1914922595024109
    },
    {
        "x": 0.4489339590072632,
        "y": 0.47809746861457825,
        "z": 0.0007343787583522499
    },
    {
        "x": 0.4297056794166565,
        "y": 0.5824233889579773,
        "z": -0.017681295052170753
    },
    {
        "x": 0.354295015335083,
        "y": 0.45015108585357666,
        "z": 0.04908972978591919
    },
    {
        "x": 0.4424497187137604,
        "y": 0.5550973415374756,
        "z": -0.06136215850710869
    },
    {
        "x": 0.31575363874435425,
        "y": 0.6469534039497375,
        "z": 0.1781618446111679
    },
    {
        "x": 0.4381946921348572,
        "y": 0.4487225413322449,
        "z": 0.027401378378272057
    },
    {
        "x": 0.45496219396591187,
        "y": 0.539055585861206,
        "z": -0.07839544862508774
    },
    {
        "x": 0.36315613985061646,
        "y": 0.7633385062217712,
        "z": 0.06136215850710869
    },
    {
        "x": 0.3655354976654053,
        "y": 0.793815553188324,
        "z": 0.08775846660137177
    },
    {
        "x": 0.30486923456192017,
        "y": 0.5800553560256958,
        "z": 0.12938952445983887
    },
    {
        "x": 0.3442770540714264,
        "y": 0.7302703261375427,
        "z": 0.08305050432682037
    },
    {
        "x": 0.3110564947128296,
        "y": 0.43181779980659485,
        "z": 0.11849245429039001
    },
    {
        "x": 0.42647814750671387,
        "y": 0.8515611290931702,
        "z": 0.005435312166810036
    },
    {
        "x": 0.4793950319290161,
        "y": 0.6023286581039429,
        "z": -0.06850344687700272
    },
    {
        "x": 0.42341384291648865,
        "y": 0.5508055090904236,
        "z": -0.013899059034883976
    },
    {
        "x": 0.3161633312702179,
        "y": 0.47542229294776917,
        "z": 0.08722949028015137
    },
    {
        "x": 0.38231563568115234,
        "y": 0.45898520946502686,
        "z": 0.027242684736847878
    },
    {
        "x": 0.3969133198261261,
        "y": 0.4603007435798645,
        "z": 0.02211153693497181
    },
    {
        "x": 0.4256300926208496,
        "y": 0.733065664768219,
        "z": -0.009667185135185719
    },
    {
        "x": 0.32384565472602844,
        "y": 0.6179199814796448,
        "z": 0.06585852801799774
    },
    {
        "x": 0.45857033133506775,
        "y": 0.8911597728729248,
        "z": 0.005795682314783335
    },
    {
        "x": 0.4072231650352478,
        "y": 0.8515005111694336,
        "z": 0.04239807650446892
    },
    {
        "x": 0.387482225894928,
        "y": 0.827175498008728,
        "z": 0.06247302517294884
    },
    {
        "x": 0.48435789346694946,
        "y": 0.3091451823711395,
        "z": -0.007247082889080048
    },
    {
        "x": 0.4974924623966217,
        "y": 0.8974891901016235,
        "z": -0.0007488431874662638
    },
    {
        "x": 0.4110930263996124,
        "y": 0.45865267515182495,
        "z": 0.02098744548857212
    },
    {
        "x": 0.4248538315296173,
        "y": 0.45460519194602966,
        "z": 0.02309015765786171
    },
    {
        "x": 0.43374550342559814,
        "y": 0.4519529938697815,
        "z": 0.02689884416759014
    },
    {
        "x": 0.3218435049057007,
        "y": 0.4342498481273651,
        "z": 0.07463966310024261
    },
    {
        "x": 0.4234141707420349,
        "y": 0.43118423223495483,
        "z": 0.022706642746925354
    },
    {
        "x": 0.40903806686401367,
        "y": 0.42422688007354736,
        "z": 0.020365888252854347
    },
    {
        "x": 0.39401745796203613,
        "y": 0.4227689504623413,
        "z": 0.021635450422763824
    },
    {
        "x": 0.37898537516593933,
        "y": 0.42779985070228577,
        "z": 0.026264062151312828
    },
    {
        "x": 0.3694494366645813,
        "y": 0.435810387134552,
        "z": 0.03229448199272156
    },
    {
        "x": 0.3035556972026825,
        "y": 0.4257284700870514,
        "z": 0.16864013671875
    },
    {
        "x": 0.3723762631416321,
        "y": 0.4558505415916443,
        "z": 0.033537592738866806
    },
    {
        "x": 0.4873911142349243,
        "y": 0.6274630427360535,
        "z": -0.05406217649579048
    },
    {
        "x": 0.4329841732978821,
        "y": 0.6428086161613464,
        "z": -0.034357521682977676
    },
    {
        "x": 0.4459853172302246,
        "y": 0.5898099541664124,
        "z": -0.05311000719666481
    },
    {
        "x": 0.46368616819381714,
        "y": 0.631056010723114,
        "z": -0.05109986662864685
    },
    {
        "x": 0.4862692952156067,
        "y": 0.4246111512184143,
        "z": -0.023447221145033836
    },
    {
        "x": 0.38298696279525757,
        "y": 0.7966917753219604,
        "z": 0.04382633417844772
    },
    {
        "x": 0.4036750793457031,
        "y": 0.8238409757614136,
        "z": 0.025708628818392754
    },
    {
        "x": 0.45712214708328247,
        "y": 0.8725348711013794,
        "z": -0.012365004047751427
    },
    {
        "x": 0.34824785590171814,
        "y": 0.7582132816314697,
        "z": 0.12071418762207031
    },
    {
        "x": 0.4335523843765259,
        "y": 0.44151371717453003,
        "z": 0.025430912151932716
    },
    {
        "x": 0.45863473415374756,
        "y": 0.49646615982055664,
        "z": -0.040731776505708694
    },
    {
        "x": 0.49625489115715027,
        "y": 0.8794291615486145,
        "z": -0.017734194174408913
    },
    {
        "x": 0.43003523349761963,
        "y": 0.8741424083709717,
        "z": 0.0210138950496912
    },
    {
        "x": 0.3127085268497467,
        "y": 0.6339660286903381,
        "z": 0.12134896218776703
    },
    {
        "x": 0.4584125280380249,
        "y": 0.741350531578064,
        "z": -0.026277286931872368
    },
    {
        "x": 0.4545913636684418,
        "y": 0.7483916878700256,
        "z": -0.02901477925479412
    },
    {
        "x": 0.45033949613571167,
        "y": 0.7596632838249207,
        "z": -0.03089267387986183
    },
    {
        "x": 0.447142630815506,
        "y": 0.7726309895515442,
        "z": -0.02798325940966606
    },
    {
        "x": 0.4433079659938812,
        "y": 0.7872895002365112,
        "z": -0.01510249637067318
    },
    {
        "x": 0.43668439984321594,
        "y": 0.7040415406227112,
        "z": -0.017469702288508415
    },
    {
        "x": 0.4301285147666931,
        "y": 0.7020460367202759,
        "z": -0.01691426895558834
    },
    {
        "x": 0.424422025680542,
        "y": 0.6983604431152344,
        "z": -0.016438182443380356
    },
    {
        "x": 0.40900421142578125,
        "y": 0.6822307109832764,
        "z": -0.010725153610110283
    },
    {
        "x": 0.3461507260799408,
        "y": 0.6281467080116272,
        "z": 0.028485795482993126
    },
    {
        "x": 0.45930999517440796,
        "y": 0.4736161231994629,
        "z": -0.022243784740567207
    },
    {
        "x": 0.4515542984008789,
        "y": 0.43226027488708496,
        "z": 0.014348694123327732
    },
    {
        "x": 0.4409691393375397,
        "y": 0.435330331325531,
        "z": 0.02213798649609089
    },
    {
        "x": 0.44155704975128174,
        "y": 0.700671374797821,
        "z": -0.01598854549229145
    },
    {
        "x": 0.34847259521484375,
        "y": 0.6910680532455444,
        "z": 0.05218428745865822
    },
    {
        "x": 0.46510049700737,
        "y": 0.42990487813949585,
        "z": -0.009601062163710594
    },
    {
        "x": 0.4360848069190979,
        "y": 0.803629994392395,
        "z": -0.006390789523720741
    },
    {
        "x": 0.4846552014350891,
        "y": 0.4996514916419983,
        "z": -0.07585632801055908
    },
    {
        "x": 0.4696630835533142,
        "y": 0.48211249709129333,
        "z": -0.05197269096970558
    },
    {
        "x": 0.48512038588523865,
        "y": 0.47595441341400146,
        "z": -0.056759998202323914
    },
    {
        "x": 0.44756343960762024,
        "y": 0.5350825190544128,
        "z": -0.043535396456718445
    },
    {
        "x": 0.49503031373023987,
        "y": 0.8540340065956116,
        "z": -0.023473672568798065
    },
    {
        "x": 0.4942319095134735,
        "y": 0.8269474506378174,
        "z": -0.020233644172549248
    },
    {
        "x": 0.46334630250930786,
        "y": 0.8229004144668579,
        "z": -0.01604144461452961
    },
    {
        "x": 0.39979076385498047,
        "y": 0.7470905780792236,
        "z": 0.00954155158251524
    },
    {
        "x": 0.4169725775718689,
        "y": 0.603542685508728,
        "z": -0.013713913038372993
    },
    {
        "x": 0.4153936505317688,
        "y": 0.778173565864563,
        "z": 0.0021324672270566225
    },
    {
        "x": 0.37962740659713745,
        "y": 0.6028608679771423,
        "z": -0.004185587167739868
    },
    {
        "x": 0.4031730592250824,
        "y": 0.6294547915458679,
        "z": -0.010949972085654736
    },
    {
        "x": 0.3696090579032898,
        "y": 0.6443017721176147,
        "z": 0.008761299774050713
    },
    {
        "x": 0.458646297454834,
        "y": 0.8482769727706909,
        "z": -0.017800316214561462
    },
    {
        "x": 0.43843844532966614,
        "y": 0.5500064492225647,
        "z": -0.031606804579496384
    },
    {
        "x": 0.38663601875305176,
        "y": 0.7673621773719788,
        "z": 0.02513997256755829
    },
    {
        "x": 0.4073191285133362,
        "y": 0.7973326444625854,
        "z": 0.013819711282849312
    },
    {
        "x": 0.38800302147865295,
        "y": 0.7123519778251648,
        "z": 0.011102055199444294
    },
    {
        "x": 0.33128073811531067,
        "y": 0.6611086130142212,
        "z": 0.06903243064880371
    },
    {
        "x": 0.36831384897232056,
        "y": 0.7184967398643494,
        "z": 0.028459345921874046
    },
    {
        "x": 0.3251035213470459,
        "y": 0.6842234134674072,
        "z": 0.1088649332523346
    },
    {
        "x": 0.3931677043437958,
        "y": 0.6635605096817017,
        "z": -0.003435090882703662
    },
    {
        "x": 0.4488704800605774,
        "y": 0.5139272212982178,
        "z": -0.02925282157957554
    },
    {
        "x": 0.4483288526535034,
        "y": 0.5807892680168152,
        "z": -0.07421647012233734
    },
    {
        "x": 0.4390057623386383,
        "y": 0.5880951881408691,
        "z": -0.05533174052834511
    },
    {
        "x": 0.45407333970069885,
        "y": 0.5630334615707397,
        "z": -0.08717658370733261
    },
    {
        "x": 0.43804532289505005,
        "y": 0.4135974645614624,
        "z": 0.011426057666540146
    },
    {
        "x": 0.409924179315567,
        "y": 0.4018006920814514,
        "z": 0.009845717810094357
    },
    {
        "x": 0.38527560234069824,
        "y": 0.4005945324897766,
        "z": 0.011730222962796688
    },
    {
        "x": 0.36527079343795776,
        "y": 0.4057508707046509,
        "z": 0.019281471148133278
    },
    {
        "x": 0.35160231590270996,
        "y": 0.4174160361289978,
        "z": 0.030628181993961334
    },
    {
        "x": 0.3438046872615814,
        "y": 0.45942819118499756,
        "z": 0.05601942166686058
    },
    {
        "x": 0.3014684319496155,
        "y": 0.5289798974990845,
        "z": 0.13150545954704285
    },
    {
        "x": 0.35634148120880127,
        "y": 0.48937299847602844,
        "z": 0.03813975676894188
    },
    {
        "x": 0.373576819896698,
        "y": 0.49478766322135925,
        "z": 0.02594667300581932
    },
    {
        "x": 0.39579659700393677,
        "y": 0.4934470057487488,
        "z": 0.017271332442760468
    },
    {
        "x": 0.41717901825904846,
        "y": 0.4870254695415497,
        "z": 0.014309020712971687
    },
    {
        "x": 0.4334876537322998,
        "y": 0.47804880142211914,
        "z": 0.012821252457797527
    },
    {
        "x": 0.44492918252944946,
        "y": 0.46933895349502563,
        "z": 0.012093900702893734
    },
    {
        "x": 0.30526411533355713,
        "y": 0.5363271236419678,
        "z": 0.19868643581867218
    },
    {
        "x": 0.44047442078590393,
        "y": 0.5951529741287231,
        "z": -0.04678864777088165
    },
    {
        "x": 0.4579634666442871,
        "y": 0.5170592069625854,
        "z": -0.05702449381351471
    },
    {
        "x": 0.45912060141563416,
        "y": 0.5805411338806152,
        "z": -0.08929252624511719
    },
    {
        "x": 0.4692550599575043,
        "y": 0.5929865837097168,
        "z": -0.083791084587574
    },
    {
        "x": 0.46017056703567505,
        "y": 0.5850584506988525,
        "z": -0.08077587932348251
    },
    {
        "x": 0.44575074315071106,
        "y": 0.6027869582176208,
        "z": -0.041498806327581406
    },
    {
        "x": 0.4717906713485718,
        "y": 0.5949694514274597,
        "z": -0.0887635350227356
    },
    {
        "x": 0.47431981563568115,
        "y": 0.6006199717521667,
        "z": -0.06823895126581192
    },
    {
        "x": 0.4443283975124359,
        "y": 0.45015251636505127,
        "z": 0.023632368072867393
    },
    {
        "x": 0.4536289870738983,
        "y": 0.4555421769618988,
        "z": 0.01098964549601078
    },
    {
        "x": 0.45849013328552246,
        "y": 0.45866090059280396,
        "z": -0.003340865485370159
    },
    {
        "x": 0.36404329538345337,
        "y": 0.4417179822921753,
        "z": 0.0381133072078228
    },
    {
        "x": 0.35463741421699524,
        "y": 0.43604588508605957,
        "z": 0.03930352255702019
    },
    {
        "x": 0.4996713101863861,
        "y": 0.503648579120636,
        "z": -0.07077807933092117
    },
    {
        "x": 0.6153050661087036,
        "y": 0.44533059000968933,
        "z": 0.02721623331308365
    },
    {
        "x": 0.5009885430335999,
        "y": 0.5961899161338806,
        "z": -0.06924402713775635
    },
    {
        "x": 0.6784940361976624,
        "y": 0.3697788715362549,
        "z": 0.11859823763370514
    },
    {
        "x": 0.5657528042793274,
        "y": 0.4674624800682068,
        "z": 0.009594449773430824
    },
    {
        "x": 0.5833125114440918,
        "y": 0.46892839670181274,
        "z": 0.009369632229208946
    },
    {
        "x": 0.5998182892799377,
        "y": 0.46813398599624634,
        "z": 0.013317175209522247
    },
    {
        "x": 0.6220577955245972,
        "y": 0.4556494355201721,
        "z": 0.028274202719330788
    },
    {
        "x": 0.5509517788887024,
        "y": 0.4614912271499634,
        "z": 0.012252595275640488
    },
    {
        "x": 0.586600124835968,
        "y": 0.404755175113678,
        "z": 0.006804058328270912
    },
    {
        "x": 0.567341685295105,
        "y": 0.40666937828063965,
        "z": 0.00805378332734108
    },
    {
        "x": 0.6047901511192322,
        "y": 0.40876221656799316,
        "z": 0.01097642071545124
    },
    {
        "x": 0.6174702644348145,
        "y": 0.4175480306148529,
        "z": 0.01713908649981022
    },
    {
        "x": 0.6364139318466187,
        "y": 0.4738917648792267,
        "z": 0.03499229997396469
    },
    {
        "x": 0.5634268522262573,
        "y": 0.8249083757400513,
        "z": -0.0067147924564778805
    },
    {
        "x": 0.6216633319854736,
        "y": 0.4394259750843048,
        "z": 0.03319375589489937
    },
    {
        "x": 0.6893186569213867,
        "y": 0.4703907370567322,
        "z": 0.11373159289360046
    },
    {
        "x": 0.6559047102928162,
        "y": 0.4602700471878052,
        "z": 0.0539034828543663
    },
    {
        "x": 0.5765772461891174,
        "y": 0.5682154297828674,
        "z": -0.018355749547481537
    },
    {
        "x": 0.5110330581665039,
        "y": 0.6594176888465881,
        "z": -0.060674481093883514
    },
    {
        "x": 0.5082358121871948,
        "y": 0.6856465935707092,
        "z": -0.05512014776468277
    },
    {
        "x": 0.5347129702568054,
        "y": 0.6699309349060059,
        "z": -0.051655299961566925
    },
    {
        "x": 0.5488651990890503,
        "y": 0.683799684047699,
        "z": -0.03829845041036606
    },
    {
        "x": 0.52452152967453,
        "y": 0.6896476149559021,
        "z": -0.048613645136356354
    },
    {
        "x": 0.5363597273826599,
        "y": 0.6958916783332825,
        "z": -0.035574182868003845
    },
    {
        "x": 0.573312520980835,
        "y": 0.7388911843299866,
        "z": -0.008655503392219543
    },
    {
        "x": 0.4984734058380127,
        "y": 0.5826399326324463,
        "z": -0.10013669729232788
    },
    {
        "x": 0.5004217624664307,
        "y": 0.5578190684318542,
        "z": -0.10383958369493484
    },
    {
        "x": 0.6428936719894409,
        "y": 0.3994309902191162,
        "z": 0.02387041039764881
    },
    {
        "x": 0.5409259796142578,
        "y": 0.5071640014648438,
        "z": -0.014586737379431725
    },
    {
        "x": 0.540375828742981,
        "y": 0.5788221955299377,
        "z": -0.05702449381351471
    },
    {
        "x": 0.5420910716056824,
        "y": 0.5661319494247437,
        "z": -0.050650231540203094
    },
    {
        "x": 0.6290547847747803,
        "y": 0.5669700503349304,
        "z": 0.0009604368824511766
    },
    {
        "x": 0.4998394250869751,
        "y": 0.528194010257721,
        "z": -0.09061498194932938
    },
    {
        "x": 0.5982939600944519,
        "y": 0.37305283546447754,
        "z": -0.0035210507921874523
    },
    {
        "x": 0.6243054270744324,
        "y": 0.3813163936138153,
        "z": 0.008238928392529488
    },
    {
        "x": 0.659106433391571,
        "y": 0.32514190673828125,
        "z": 0.08844614773988724
    },
    {
        "x": 0.5214492082595825,
        "y": 0.3934060037136078,
        "z": -0.016848145052790642
    },
    {
        "x": 0.5512450933456421,
        "y": 0.4153645634651184,
        "z": 0.013634566217660904
    },
    {
        "x": 0.5833134055137634,
        "y": 0.7073246240615845,
        "z": -0.006235400680452585
    },
    {
        "x": 0.6732489466667175,
        "y": 0.7028117179870605,
        "z": 0.13827645778656006
    },
    {
        "x": 0.5276557803153992,
        "y": 0.5926063060760498,
        "z": -0.05006834864616394
    },
    {
        "x": 0.513253927230835,
        "y": 0.6001783013343811,
        "z": -0.052792616188526154
    },
    {
        "x": 0.5653175115585327,
        "y": 0.7131925821304321,
        "z": -0.008285214193165302
    },
    {
        "x": 0.5555857419967651,
        "y": 0.712315559387207,
        "z": -0.012503862380981445
    },
    {
        "x": 0.6336397528648376,
        "y": 0.3676627278327942,
        "z": 0.018778936937451363
    },
    {
        "x": 0.5414127707481384,
        "y": 0.5906746983528137,
        "z": -0.04808465763926506
    },
    {
        "x": 0.5644345879554749,
        "y": 0.375485360622406,
        "z": -0.012226145714521408
    },
    {
        "x": 0.5670074224472046,
        "y": 0.3564499616622925,
        "z": -0.014216449111700058
    },
    {
        "x": 0.5849424600601196,
        "y": 0.2655209004878998,
        "z": 0.02795681171119213
    },
    {
        "x": 0.6455289721488953,
        "y": 0.3451301157474518,
        "z": 0.04922197386622429
    },
    {
        "x": 0.57407546043396,
        "y": 0.3082287311553955,
        "z": 0.005818825680762529
    },
    {
        "x": 0.6530650854110718,
        "y": 0.3909992575645447,
        "z": 0.04075822979211807
    },
    {
        "x": 0.6653547286987305,
        "y": 0.38130462169647217,
        "z": 0.07786646485328674
    },
    {
        "x": 0.5101601481437683,
        "y": 0.6743676066398621,
        "z": -0.05988100543618202
    },
    {
        "x": 0.5291910767555237,
        "y": 0.6814807057380676,
        "z": -0.05109986662864685
    },
    {
        "x": 0.5429296493530273,
        "y": 0.6899877190589905,
        "z": -0.038536492735147476
    },
    {
        "x": 0.5232043266296387,
        "y": 0.5971062779426575,
        "z": -0.04713248834013939
    },
    {
        "x": 0.5604503750801086,
        "y": 0.7134593725204468,
        "z": -0.010652418248355389
    },
    {
        "x": 0.5549214482307434,
        "y": 0.7289588451385498,
        "z": -0.018368974328041077
    },
    {
        "x": 0.5530490875244141,
        "y": 0.710896909236908,
        "z": -0.012854314409196377
    },
    {
        "x": 0.5177273750305176,
        "y": 0.5832648873329163,
        "z": -0.0745338648557663
    },
    {
        "x": 0.5327646732330322,
        "y": 0.6947518587112427,
        "z": -0.03324665501713753
    },
    {
        "x": 0.5209214091300964,
        "y": 0.6913290619850159,
        "z": -0.04213358834385872
    },
    {
        "x": 0.5065351128578186,
        "y": 0.6901552677154541,
        "z": -0.048587191849946976
    },
    {
        "x": 0.5200872421264648,
        "y": 0.803894579410553,
        "z": -0.020233644172549248
    },
    {
        "x": 0.517368495464325,
        "y": 0.7858299612998962,
        "z": -0.038695190101861954
    },
    {
        "x": 0.5152785778045654,
        "y": 0.7711528539657593,
        "z": -0.0422922819852829
    },
    {
        "x": 0.512553870677948,
        "y": 0.7564737200737,
        "z": -0.03882743790745735
    },
    {
        "x": 0.5100332498550415,
        "y": 0.7460271716117859,
        "z": -0.035653531551361084
    },
    {
        "x": 0.5371401309967041,
        "y": 0.7331346869468689,
        "z": -0.0231695044785738
    },
    {
        "x": 0.5411539077758789,
        "y": 0.7368150353431702,
        "z": -0.02589377388358116
    },
    {
        "x": 0.5468553900718689,
        "y": 0.7433218359947205,
        "z": -0.02816840633749962
    },
    {
        "x": 0.5519201755523682,
        "y": 0.7509551644325256,
        "z": -0.025272216647863388
    },
    {
        "x": 0.5620309710502625,
        "y": 0.6573213338851929,
        "z": -0.03121006488800049
    },
    {
        "x": 0.6925072073936462,
        "y": 0.5815582871437073,
        "z": 0.17467056214809418
    },
    {
        "x": 0.5445588827133179,
        "y": 0.7258228659629822,
        "z": -0.01616046577692032
    },
    {
        "x": 0.549635112285614,
        "y": 0.7269673347473145,
        "z": -0.01813093200325966
    },
    {
        "x": 0.5083677768707275,
        "y": 0.6111658215522766,
        "z": -0.053744785487651825
    },
    {
        "x": 0.5358834266662598,
        "y": 0.6064563393592834,
        "z": -0.03533614054322243
    },
    {
        "x": 0.510492742061615,
        "y": 0.606094241142273,
        "z": -0.05387703329324722
    },
    {
        "x": 0.5599443316459656,
        "y": 0.5213301777839661,
        "z": -0.01095658354461193
    },
    {
        "x": 0.588904619216919,
        "y": 0.5372204184532166,
        "z": -0.008662114851176739
    },
    {
        "x": 0.5454555749893188,
        "y": 0.577991783618927,
        "z": -0.04152525216341019
    },
    {
        "x": 0.6291239261627197,
        "y": 0.28907644748687744,
        "z": 0.05575492978096008
    },
    {
        "x": 0.6167972683906555,
        "y": 0.31964829564094543,
        "z": 0.02598634548485279
    },
    {
        "x": 0.604039192199707,
        "y": 0.3548738360404968,
        "z": 0.0016919226618483663
    },
    {
        "x": 0.5616324543952942,
        "y": 0.7628350257873535,
        "z": -0.0145206144079566
    },
    {
        "x": 0.5263705849647522,
        "y": 0.3625287413597107,
        "z": -0.021397408097982407
    },
    {
        "x": 0.5315475463867188,
        "y": 0.3068252503871918,
        "z": -0.005048492457717657
    },
    {
        "x": 0.5381978750228882,
        "y": 0.25549930334091187,
        "z": 0.01245096419006586
    },
    {
        "x": 0.614002525806427,
        "y": 0.46394678950309753,
        "z": 0.020551033318042755
    },
    {
        "x": 0.6550011038780212,
        "y": 0.49257057905197144,
        "z": 0.042768366634845734
    },
    {
        "x": 0.5410178899765015,
        "y": 0.4552531838417053,
        "z": 0.01590919867157936
    },
    {
        "x": 0.6364946365356445,
        "y": 0.4283287525177002,
        "z": 0.03176549822092056
    },
    {
        "x": 0.5280478000640869,
        "y": 0.4907601475715637,
        "z": -0.019413718953728676
    },
    {
        "x": 0.5291798710823059,
        "y": 0.5683482885360718,
        "z": -0.07337009906768799
    },
    {
        "x": 0.6740120053291321,
        "y": 0.5109686255455017,
        "z": 0.05924622714519501
    },
    {
        "x": 0.6427017450332642,
        "y": 0.5077666640281677,
        "z": 0.02517964504659176
    },
    {
        "x": 0.6198356747627258,
        "y": 0.5155941247940063,
        "z": 0.008972893469035625
    },
    {
        "x": 0.5864114761352539,
        "y": 0.511256992816925,
        "z": 0.0021688351407647133
    },
    {
        "x": 0.5614609718322754,
        "y": 0.501304030418396,
        "z": 0.0003651230363175273
    },
    {
        "x": 0.5424380898475647,
        "y": 0.48967695236206055,
        "z": -0.0028829635120928288
    },
    {
        "x": 0.5029274225234985,
        "y": 0.45724913477897644,
        "z": -0.03374918922781944
    },
    {
        "x": 0.6709607243537903,
        "y": 0.5611773729324341,
        "z": 0.04893103614449501
    },
    {
        "x": 0.6504613161087036,
        "y": 0.4275263547897339,
        "z": 0.0403350405395031
    },
    {
        "x": 0.4933711886405945,
        "y": 0.5961659550666809,
        "z": -0.09230773895978928
    },
    {
        "x": 0.5387690663337708,
        "y": 0.5302914977073669,
        "z": -0.024571312591433525
    },
    {
        "x": 0.6956594586372375,
        "y": 0.47436046600341797,
        "z": 0.17276620864868164
    },
    {
        "x": 0.5284964442253113,
        "y": 0.4763731360435486,
        "z": -0.0035640308633446693
    },
    {
        "x": 0.5479902029037476,
        "y": 0.5805389285087585,
        "z": -0.02291823923587799
    },
    {
        "x": 0.6280059218406677,
        "y": 0.4424082636833191,
        "z": 0.03612961620092392
    },
    {
        "x": 0.5302643775939941,
        "y": 0.5533990263938904,
        "z": -0.06543534249067307
    },
    {
        "x": 0.6869024038314819,
        "y": 0.6399406790733337,
        "z": 0.16123436391353607
    },
    {
        "x": 0.5410351753234863,
        "y": 0.4455198645591736,
        "z": 0.02193961665034294
    },
    {
        "x": 0.5154802799224854,
        "y": 0.5378355383872986,
        "z": -0.08125196397304535
    },
    {
        "x": 0.6342148780822754,
        "y": 0.7596781253814697,
        "z": 0.049618709832429886
    },
    {
        "x": 0.6366990208625793,
        "y": 0.7907198071479797,
        "z": 0.07580342888832092
    },
    {
        "x": 0.6899851560592651,
        "y": 0.5719581246376038,
        "z": 0.11150985956192017
    },
    {
        "x": 0.6537429094314575,
        "y": 0.7250381708145142,
        "z": 0.06924402713775635
    },
    {
        "x": 0.6775541305541992,
        "y": 0.42253339290618896,
        "z": 0.10135336220264435
    },
    {
        "x": 0.5684590935707092,
        "y": 0.8508797883987427,
        "z": 0.00006421165016945451
    },
    {
        "x": 0.4920911192893982,
        "y": 0.6020865440368652,
        "z": -0.06913822889328003
    },
    {
        "x": 0.5550297498703003,
        "y": 0.5483987331390381,
        "z": -0.01996915228664875
    },
    {
        "x": 0.6711281538009644,
        "y": 0.4666658043861389,
        "z": 0.07098967581987381
    },
    {
        "x": 0.5983646512031555,
        "y": 0.4526124894618988,
        "z": 0.01695394143462181
    },
    {
        "x": 0.5835493803024292,
        "y": 0.45468178391456604,
        "z": 0.01303945854306221
    },
    {
        "x": 0.5602062940597534,
        "y": 0.7317967414855957,
        "z": -0.016477856785058975
    },
    {
        "x": 0.6666404008865356,
        "y": 0.6111000776290894,
        "z": 0.05001544952392578
    },
    {
        "x": 0.5372829437255859,
        "y": 0.8914076685905457,
        "z": 0.0026118592359125614
    },
    {
        "x": 0.5921584963798523,
        "y": 0.8503901958465576,
        "z": 0.034648459404706955
    },
    {
        "x": 0.6133627891540527,
        "y": 0.8250656127929688,
        "z": 0.052633918821811676
    },
    {
        "x": 0.5689509510993958,
        "y": 0.4537894129753113,
        "z": 0.013171705417335033
    },
    {
        "x": 0.5549917817115784,
        "y": 0.45035994052886963,
        "z": 0.016583653166890144
    },
    {
        "x": 0.5456849932670593,
        "y": 0.44849681854248047,
        "z": 0.02098744548857212
    },
    {
        "x": 0.6631613373756409,
        "y": 0.42502719163894653,
        "z": 0.058611445128917694
    },
    {
        "x": 0.5558794140815735,
        "y": 0.4270873963832855,
        "z": 0.01586952432990074
    },
    {
        "x": 0.5702815055847168,
        "y": 0.4193742871284485,
        "z": 0.012325329706072807
    },
    {
        "x": 0.585308313369751,
        "y": 0.41730567812919617,
        "z": 0.012431127950549126
    },
    {
        "x": 0.6007476449012756,
        "y": 0.42130404710769653,
        "z": 0.015671154484152794
    },
    {
        "x": 0.6106795072555542,
        "y": 0.42867061495780945,
        "z": 0.0209477711468935
    },
    {
        "x": 0.6898370981216431,
        "y": 0.41664743423461914,
        "z": 0.15044309198856354
    },
    {
        "x": 0.6085273623466492,
        "y": 0.4491179585456848,
        "z": 0.022349579259753227
    },
    {
        "x": 0.5457667708396912,
        "y": 0.64118891954422,
        "z": -0.039488665759563446
    },
    {
        "x": 0.5278748273849487,
        "y": 0.5883750915527344,
        "z": -0.05633681267499924
    },
    {
        "x": 0.5121429562568665,
        "y": 0.6300801634788513,
        "z": -0.05329515412449837
    },
    {
        "x": 0.6138399839401245,
        "y": 0.7945975661277771,
        "z": 0.0343310683965683
    },
    {
        "x": 0.5926316976547241,
        "y": 0.8221790790557861,
        "z": 0.018223503604531288
    },
    {
        "x": 0.5362589359283447,
        "y": 0.8722199201583862,
        "z": -0.015419887378811836
    },
    {
        "x": 0.6549620032310486,
        "y": 0.7535367012023926,
        "z": 0.10627291351556778
    },
    {
        "x": 0.5454918742179871,
        "y": 0.4380575716495514,
        "z": 0.019360819831490517
    },
    {
        "x": 0.5144978165626526,
        "y": 0.4952315092086792,
        "z": -0.043561842292547226
    },
    {
        "x": 0.567571759223938,
        "y": 0.8740112781524658,
        "z": 0.015142170712351799
    },
    {
        "x": 0.6835403442382812,
        "y": 0.6266701817512512,
        "z": 0.1041569709777832
    },
    {
        "x": 0.5252779126167297,
        "y": 0.740432620048523,
        "z": -0.030284341424703598
    },
    {
        "x": 0.5290740728378296,
        "y": 0.7474976778030396,
        "z": -0.03300860896706581
    },
    {
        "x": 0.5337101817131042,
        "y": 0.7582331299781799,
        "z": -0.03515099734067917
    },
    {
        "x": 0.5377074480056763,
        "y": 0.7712234854698181,
        "z": -0.03226803243160248
    },
    {
        "x": 0.5446630120277405,
        "y": 0.786480188369751,
        "z": -0.019823679700493813
    },
    {
        "x": 0.5473501086235046,
        "y": 0.7029794454574585,
        "z": -0.023764612153172493
    },
    {
        "x": 0.5534902811050415,
        "y": 0.7007417678833008,
        "z": -0.023777836933732033
    },
    {
        "x": 0.558998703956604,
        "y": 0.6968093514442444,
        "z": -0.023579467087984085
    },
    {
        "x": 0.5746870636940002,
        "y": 0.6796491146087646,
        "z": -0.01903020404279232
    },
    {
        "x": 0.6412302255630493,
        "y": 0.6217407584190369,
        "z": 0.01498347520828247
    },
    {
        "x": 0.515173077583313,
        "y": 0.47238144278526306,
        "z": -0.02513997256755829
    },
    {
        "x": 0.52519291639328,
        "y": 0.4300941228866577,
        "z": 0.010811113752424717
    },
    {
        "x": 0.5370381474494934,
        "y": 0.43238842487335205,
        "z": 0.01705973781645298
    },
    {
        "x": 0.5431246757507324,
        "y": 0.6992985010147095,
        "z": -0.02212476171553135
    },
    {
        "x": 0.6440801024436951,
        "y": 0.6852280497550964,
        "z": 0.03890678286552429
    },
    {
        "x": 0.5091143250465393,
        "y": 0.42863285541534424,
        "z": -0.011829407885670662
    },
    {
        "x": 0.5545789003372192,
        "y": 0.8028746843338013,
        "z": -0.011035931296646595
    },
    {
        "x": 0.5016151070594788,
        "y": 0.48136675357818604,
        "z": -0.05342739820480347
    },
    {
        "x": 0.5267027616500854,
        "y": 0.5333569049835205,
        "z": -0.04713248834013939
    },
    {
        "x": 0.5259788632392883,
        "y": 0.8225334286689758,
        "z": -0.01821027882397175
    },
    {
        "x": 0.590441107749939,
        "y": 0.7448697686195374,
        "z": 0.0012753476621583104
    },
    {
        "x": 0.5625536441802979,
        "y": 0.6011799573898315,
        "z": -0.02014107070863247
    },
    {
        "x": 0.5753610134124756,
        "y": 0.7769845724105835,
        "z": -0.004393874667584896
    },
    {
        "x": 0.6029728651046753,
        "y": 0.5984860062599182,
        "z": -0.014018080197274685
    },
    {
        "x": 0.5788018107414246,
        "y": 0.6263403296470642,
        "z": -0.01896408200263977
    },
    {
        "x": 0.6162307858467102,
        "y": 0.6394359469413757,
        "z": -0.0021754472982138395
    },
    {
        "x": 0.5324942469596863,
        "y": 0.8473809957504272,
        "z": -0.020484909415245056
    },
    {
        "x": 0.5376790761947632,
        "y": 0.5483441352844238,
        "z": -0.03623541444540024
    },
    {
        "x": 0.6064871549606323,
        "y": 0.7646690607070923,
        "z": 0.0161207914352417
    },
    {
        "x": 0.5859076976776123,
        "y": 0.7956380844116211,
        "z": 0.006863569375127554
    },
    {
        "x": 0.600661039352417,
        "y": 0.7090719938278198,
        "z": 0.0013356850249692798
    },
    {
        "x": 0.6614851951599121,
        "y": 0.6545311808586121,
        "z": 0.05400928109884262
    },
    {
        "x": 0.6228697896003723,
        "y": 0.7139380574226379,
        "z": 0.017350681126117706
    },
    {
        "x": 0.6728702783584595,
        "y": 0.6777012944221497,
        "z": 0.09278382360935211
    },
    {
        "x": 0.5916495323181152,
        "y": 0.659953773021698,
        "z": -0.012629496864974499
    },
    {
        "x": 0.5263170599937439,
        "y": 0.5121962428092957,
        "z": -0.03332599997520447
    },
    {
        "x": 0.5232357978820801,
        "y": 0.5793324708938599,
        "z": -0.0776548758149147
    },
    {
        "x": 0.5350725054740906,
        "y": 0.586422860622406,
        "z": -0.05945781618356705
    },
    {
        "x": 0.5156494379043579,
        "y": 0.5618167519569397,
        "z": -0.0899273082613945
    },
    {
        "x": 0.5377116799354553,
        "y": 0.4105257987976074,
        "z": 0.006460218690335751
    },
    {
        "x": 0.5654548406600952,
        "y": 0.3967890441417694,
        "z": 0.00274410517886281
    },
    {
        "x": 0.5910628437995911,
        "y": 0.393907368183136,
        "z": 0.002664757426828146
    },
    {
        "x": 0.6124265193939209,
        "y": 0.3980654776096344,
        "z": 0.00805378332734108
    },
    {
        "x": 0.6280648708343506,
        "y": 0.4091176390647888,
        "z": 0.01799868419766426
    },
    {
        "x": 0.6398391127586365,
        "y": 0.45147356390953064,
        "z": 0.04223938286304474
    },
    {
        "x": 0.692192554473877,
        "y": 0.5203360319137573,
        "z": 0.11320260167121887
    },
    {
        "x": 0.6266646385192871,
        "y": 0.4828891158103943,
        "z": 0.025483809411525726
    },
    {
        "x": 0.6084566712379456,
        "y": 0.48903849720954895,
        "z": 0.014890903607010841
    },
    {
        "x": 0.585393488407135,
        "y": 0.4886837601661682,
        "z": 0.008027333766222
    },
    {
        "x": 0.5633973479270935,
        "y": 0.483254075050354,
        "z": 0.006949529517441988
    },
    {
        "x": 0.5460606813430786,
        "y": 0.4752999544143677,
        "z": 0.007273531518876553
    },
    {
        "x": 0.5335912108421326,
        "y": 0.4670790433883667,
        "z": 0.007445451803505421
    },
    {
        "x": 0.6947181224822998,
        "y": 0.5279613733291626,
        "z": 0.18006619811058044
    },
    {
        "x": 0.5346363186836243,
        "y": 0.5937567353248596,
        "z": -0.05075602978467941
    },
    {
        "x": 0.5138265490531921,
        "y": 0.515824556350708,
        "z": -0.05982810631394386
    },
    {
        "x": 0.5107513070106506,
        "y": 0.57957524061203,
        "z": -0.09156715124845505
    },
    {
        "x": 0.5016303062438965,
        "y": 0.5922421813011169,
        "z": -0.08500775694847107
    },
    {
        "x": 0.5109548568725586,
        "y": 0.5840899348258972,
        "z": -0.08305050432682037
    },
    {
        "x": 0.5299672484397888,
        "y": 0.6016415953636169,
        "z": -0.04499009996652603
    },
    {
        "x": 0.4986644983291626,
        "y": 0.594207763671875,
        "z": -0.08987440168857574
    },
    {
        "x": 0.49759605526924133,
        "y": 0.6001290082931519,
        "z": -0.06913822889328003
    },
    {
        "x": 0.5342609286308289,
        "y": 0.44733235239982605,
        "z": 0.0188582856208086
    },
    {
        "x": 0.5236700177192688,
        "y": 0.45364683866500854,
        "z": 0.007346267346292734
    },
    {
        "x": 0.5175275802612305,
        "y": 0.4571540653705597,
        "z": -0.006202338729053736
    },
    {
        "x": 0.616594135761261,
        "y": 0.4343317449092865,
        "z": 0.026422757655382156
    },
    {
        "x": 0.6263386607170105,
        "y": 0.4280146360397339,
        "z": 0.026726923882961273
    }
]

let happyDatabase = [
    {
        "x": 0.4864477515220642,
        "y": 0.7074116468429565,
        "z": -0.037718113511800766
    },
    {
        "x": 0.48259034752845764,
        "y": 0.643740177154541,
        "z": -0.09997828304767609
    },
    {
        "x": 0.48476535081863403,
        "y": 0.6610985994338989,
        "z": -0.04897764325141907
    },
    {
        "x": 0.4676917493343353,
        "y": 0.5546074509620667,
        "z": -0.08241021633148193
    },
    {
        "x": 0.48219555616378784,
        "y": 0.6184617280960083,
        "z": -0.1086026057600975
    },
    {
        "x": 0.48233357071876526,
        "y": 0.5821182131767273,
        "z": -0.10439691692590714
    },
    {
        "x": 0.4840625822544098,
        "y": 0.49128326773643494,
        "z": -0.06308533996343613
    },
    {
        "x": 0.3603706955909729,
        "y": 0.47609803080558777,
        "z": 0.015624933876097202
    },
    {
        "x": 0.4842563271522522,
        "y": 0.42711347341537476,
        "z": -0.05525956302881241
    },
    {
        "x": 0.48372673988342285,
        "y": 0.3937400281429291,
        "z": -0.06265944987535477
    },
    {
        "x": 0.4833938479423523,
        "y": 0.27383559942245483,
        "z": -0.05856022611260414
    },
    {
        "x": 0.486769437789917,
        "y": 0.7182073593139648,
        "z": -0.03372536972165108
    },
    {
        "x": 0.4873506426811218,
        "y": 0.7241803407669067,
        "z": -0.027363596484065056
    },
    {
        "x": 0.48799216747283936,
        "y": 0.7239073514938354,
        "z": -0.019111929461359978
    },
    {
        "x": 0.48851582407951355,
        "y": 0.7358423471450806,
        "z": -0.01670297421514988
    },
    {
        "x": 0.4886382520198822,
        "y": 0.7452148199081421,
        "z": -0.019311565905809402
    },
    {
        "x": 0.48874154686927795,
        "y": 0.7565747499465942,
        "z": -0.023344237357378006
    },
    {
        "x": 0.48904675245285034,
        "y": 0.7690738439559937,
        "z": -0.021547503769397736
    },
    {
        "x": 0.489903062582016,
        "y": 0.7906689047813416,
        "z": -0.0054567488841712475
    },
    {
        "x": 0.48311948776245117,
        "y": 0.6551073789596558,
        "z": -0.0892777293920517
    },
    {
        "x": 0.4657169282436371,
        "y": 0.6488456130027771,
        "z": -0.06265944987535477
    },
    {
        "x": 0.3031664192676544,
        "y": 0.3792822062969208,
        "z": 0.09156689792871475
    },
    {
        "x": 0.4137330651283264,
        "y": 0.4966067969799042,
        "z": -0.0027366923168301582
    },
    {
        "x": 0.39583060145378113,
        "y": 0.49800318479537964,
        "z": -0.0007598688825964928
    },
    {
        "x": 0.378692626953125,
        "y": 0.49742501974105835,
        "z": 0.004624927416443825
    },
    {
        "x": 0.3547550439834595,
        "y": 0.4842362105846405,
        "z": 0.02013673447072506
    },
    {
        "x": 0.42783570289611816,
        "y": 0.4917377531528473,
        "z": -0.0021710540167987347
    },
    {
        "x": 0.38541311025619507,
        "y": 0.4410339593887329,
        "z": -0.013342414982616901
    },
    {
        "x": 0.40488922595977783,
        "y": 0.442078173160553,
        "z": -0.014094382524490356
    },
    {
        "x": 0.36780810356140137,
        "y": 0.4447070360183716,
        "z": -0.006301878951489925
    },
    {
        "x": 0.35655122995376587,
        "y": 0.4526064395904541,
        "z": 0.0018599526956677437
    },
    {
        "x": 0.34194594621658325,
        "y": 0.498497873544693,
        "z": 0.031489431858062744
    },
    {
        "x": 0.424003005027771,
        "y": 0.8224759697914124,
        "z": 0.030052045360207558
    },
    {
        "x": 0.353398859500885,
        "y": 0.47029930353164673,
        "z": 0.021534191444516182
    },
    {
        "x": 0.29706233739852905,
        "y": 0.48210999369621277,
        "z": 0.11307448148727417
    },
    {
        "x": 0.3232525587081909,
        "y": 0.4825596213340759,
        "z": 0.04855175316333771
    },
    {
        "x": 0.39378997683525085,
        "y": 0.5990550518035889,
        "z": -0.010154875926673412
    },
    {
        "x": 0.45924222469329834,
        "y": 0.7018334865570068,
        "z": -0.035242609679698944
    },
    {
        "x": 0.4626728594303131,
        "y": 0.7214850783348083,
        "z": -0.023237762972712517
    },
    {
        "x": 0.43198737502098083,
        "y": 0.70136559009552,
        "z": -0.021001826971769333
    },
    {
        "x": 0.4153679609298706,
        "y": 0.7022160887718201,
        "z": -0.002186026657000184
    },
    {
        "x": 0.44227007031440735,
        "y": 0.7171594500541687,
        "z": -0.01304295938462019
    },
    {
        "x": 0.42718231678009033,
        "y": 0.7137770056724548,
        "z": 0.003746523754671216
    },
    {
        "x": 0.39826422929763794,
        "y": 0.7311695218086243,
        "z": 0.03447067737579346
    },
    {
        "x": 0.46705755591392517,
        "y": 0.6423377394676208,
        "z": -0.09795528650283813
    },
    {
        "x": 0.46452796459198,
        "y": 0.6175904870033264,
        "z": -0.10599401593208313
    },
    {
        "x": 0.3305954337120056,
        "y": 0.42788293957710266,
        "z": 0.004352089948952198
    },
    {
        "x": 0.43226152658462524,
        "y": 0.5406534671783447,
        "z": -0.0199770238250494
    },
    {
        "x": 0.4235880970954895,
        "y": 0.6228506565093994,
        "z": -0.05073444917798042
    },
    {
        "x": 0.4235204756259918,
        "y": 0.6078000068664551,
        "z": -0.046076253056526184
    },
    {
        "x": 0.34203505516052246,
        "y": 0.5885121822357178,
        "z": 0.016663046553730965
    },
    {
        "x": 0.46591612696647644,
        "y": 0.5841079950332642,
        "z": -0.09790205210447311
    },
    {
        "x": 0.36872151494026184,
        "y": 0.40525341033935547,
        "z": -0.031249867752194405
    },
    {
        "x": 0.34554746747016907,
        "y": 0.41223829984664917,
        "z": -0.015438605099916458
    },
    {
        "x": 0.3164338171482086,
        "y": 0.33961471915245056,
        "z": 0.05004237964749336
    },
    {
        "x": 0.4455375671386719,
        "y": 0.42289936542510986,
        "z": -0.04855175316333771
    },
    {
        "x": 0.4218563437461853,
        "y": 0.4493262767791748,
        "z": -0.008837270550429821
    },
    {
        "x": 0.3822246789932251,
        "y": 0.705054521560669,
        "z": 0.03641381487250328
    },
    {
        "x": 0.32387715578079224,
        "y": 0.6935466527938843,
        "z": 0.19079986214637756
    },
    {
        "x": 0.4366580843925476,
        "y": 0.6367047429084778,
        "z": -0.04280220344662666
    },
    {
        "x": 0.4523243308067322,
        "y": 0.6463440656661987,
        "z": -0.04415973648428917
    },
    {
        "x": 0.395325243473053,
        "y": 0.7047115564346313,
        "z": 0.03678647056221962
    },
    {
        "x": 0.4042545557022095,
        "y": 0.7062845826148987,
        "z": 0.03188870847225189
    },
    {
        "x": 0.3363376259803772,
        "y": 0.3956109881401062,
        "z": -0.00840472336858511
    },
    {
        "x": 0.42245492339134216,
        "y": 0.6299299597740173,
        "z": -0.039288587868213654
    },
    {
        "x": 0.4007604122161865,
        "y": 0.4065133035182953,
        "z": -0.04298853129148483
    },
    {
        "x": 0.3969094157218933,
        "y": 0.3862866163253784,
        "z": -0.049483396112918854
    },
    {
        "x": 0.3804088234901428,
        "y": 0.2866201400756836,
        "z": -0.0289606936275959
    },
    {
        "x": 0.32649630308151245,
        "y": 0.36718881130218506,
        "z": 0.016902612522244453
    },
    {
        "x": 0.39037075638771057,
        "y": 0.3356309235095978,
        "z": -0.0404864139854908
    },
    {
        "x": 0.3208121061325073,
        "y": 0.415505051612854,
        "z": 0.01871265470981598
    },
    {
        "x": 0.31213319301605225,
        "y": 0.39902883768081665,
        "z": 0.053209953010082245
    },
    {
        "x": 0.46039918065071106,
        "y": 0.714347243309021,
        "z": -0.030770739540457726
    },
    {
        "x": 0.4378506541252136,
        "y": 0.7116885185241699,
        "z": -0.017115557566285133
    },
    {
        "x": 0.4214853346347809,
        "y": 0.7082840800285339,
        "z": -0.0003712003235705197
    },
    {
        "x": 0.4408782720565796,
        "y": 0.6407524943351746,
        "z": -0.039022404700517654
    },
    {
        "x": 0.399578332901001,
        "y": 0.7053524255752563,
        "z": 0.03415125980973244
    },
    {
        "x": 0.410317063331604,
        "y": 0.7180306911468506,
        "z": 0.022745326161384583
    },
    {
        "x": 0.40723007917404175,
        "y": 0.7069035768508911,
        "z": 0.031010303646326065
    },
    {
        "x": 0.44710254669189453,
        "y": 0.6357482671737671,
        "z": -0.07027227431535721
    },
    {
        "x": 0.4310424327850342,
        "y": 0.7110037207603455,
        "z": 0.0065381163731217384
    },
    {
        "x": 0.44653964042663574,
        "y": 0.7160969376564026,
        "z": -0.005529948975890875
    },
    {
        "x": 0.4654436707496643,
        "y": 0.7212486863136292,
        "z": -0.015172422863543034
    },
    {
        "x": 0.46287208795547485,
        "y": 0.7890690565109253,
        "z": -0.001979734981432557
    },
    {
        "x": 0.46309688687324524,
        "y": 0.7657888531684875,
        "z": -0.017741087824106216
    },
    {
        "x": 0.4632284641265869,
        "y": 0.7521613836288452,
        "z": -0.019324876368045807
    },
    {
        "x": 0.4641816318035126,
        "y": 0.7416715621948242,
        "z": -0.01491954829543829
    },
    {
        "x": 0.4657488763332367,
        "y": 0.7337477803230286,
        "z": -0.012211139313876629
    },
    {
        "x": 0.4298708736896515,
        "y": 0.7220577001571655,
        "z": 0.009183308109641075
    },
    {
        "x": 0.42686519026756287,
        "y": 0.7245616912841797,
        "z": 0.006541443523019552
    },
    {
        "x": 0.4231905937194824,
        "y": 0.730177640914917,
        "z": 0.004891110118478537
    },
    {
        "x": 0.42056143283843994,
        "y": 0.7377992272377014,
        "z": 0.00935632735490799
    },
    {
        "x": 0.4028088450431824,
        "y": 0.6795682907104492,
        "z": 0.00004008339601568878
    },
    {
        "x": 0.30411773920059204,
        "y": 0.5784908533096313,
        "z": 0.20155365765094757
    },
    {
        "x": 0.483733594417572,
        "y": 0.6576734781265259,
        "z": -0.0632982850074768
    },
    {
        "x": 0.419702410697937,
        "y": 0.7164880633354187,
        "z": 0.022825181484222412
    },
    {
        "x": 0.41480502486228943,
        "y": 0.7164040207862854,
        "z": 0.021467648446559906
    },
    {
        "x": 0.45923858880996704,
        "y": 0.6581048369407654,
        "z": -0.04322809353470802
    },
    {
        "x": 0.42829629778862,
        "y": 0.6425241827964783,
        "z": -0.024395659565925598
    },
    {
        "x": 0.45588380098342896,
        "y": 0.6526521444320679,
        "z": -0.04453239217400551
    },
    {
        "x": 0.41362160444259644,
        "y": 0.5522595047950745,
        "z": -0.011146406643092632
    },
    {
        "x": 0.38410311937332153,
        "y": 0.5656663775444031,
        "z": -0.003460376989096403
    },
    {
        "x": 0.4202497899532318,
        "y": 0.6156945824623108,
        "z": -0.03415125980973244
    },
    {
        "x": 0.33995354175567627,
        "y": 0.3078609108924866,
        "z": 0.008198431693017483
    },
    {
        "x": 0.3508816361427307,
        "y": 0.3450332581996918,
        "z": -0.013548707589507103
    },
    {
        "x": 0.36199599504470825,
        "y": 0.3849773406982422,
        "z": -0.030557790771126747
    },
    {
        "x": 0.415505051612854,
        "y": 0.7541816234588623,
        "z": 0.02335754595696926
    },
    {
        "x": 0.43903228640556335,
        "y": 0.39084309339523315,
        "z": -0.05930554121732712
    },
    {
        "x": 0.433194100856781,
        "y": 0.3338105082511902,
        "z": -0.05611134693026543
    },
    {
        "x": 0.42671987414360046,
        "y": 0.2764829993247986,
        "z": -0.05139991268515587
    },
    {
        "x": 0.3635120689868927,
        "y": 0.49262118339538574,
        "z": 0.012849978171288967
    },
    {
        "x": 0.3241221308708191,
        "y": 0.5138092637062073,
        "z": 0.044239591807127
    },
    {
        "x": 0.43661513924598694,
        "y": 0.4867773652076721,
        "z": -0.0006870845099911094
    },
    {
        "x": 0.3396763801574707,
        "y": 0.4578537940979004,
        "z": 0.01868603751063347
    },
    {
        "x": 0.4447457194328308,
        "y": 0.526954174041748,
        "z": -0.02882760390639305
    },
    {
        "x": 0.4353375732898712,
        "y": 0.6190770268440247,
        "z": -0.07069816440343857
    },
    {
        "x": 0.3074803054332733,
        "y": 0.5280051231384277,
        "z": 0.06771691888570786
    },
    {
        "x": 0.335144579410553,
        "y": 0.530183732509613,
        "z": 0.02933335117995739
    },
    {
        "x": 0.3566663861274719,
        "y": 0.5399236083030701,
        "z": 0.012670304626226425
    },
    {
        "x": 0.38990241289138794,
        "y": 0.5385065078735352,
        "z": 0.002295827027410269
    },
    {
        "x": 0.4148973226547241,
        "y": 0.5304170846939087,
        "z": -0.0036533595994114876
    },
    {
        "x": 0.4328765571117401,
        "y": 0.5210713744163513,
        "z": -0.011033279821276665
    },
    {
        "x": 0.46739107370376587,
        "y": 0.49752795696258545,
        "z": -0.05432792007923126
    },
    {
        "x": 0.3080871105194092,
        "y": 0.5754355192184448,
        "z": 0.06867517530918121
    },
    {
        "x": 0.32587990164756775,
        "y": 0.4530737102031708,
        "z": 0.026937706395983696
    },
    {
        "x": 0.4737643301486969,
        "y": 0.653527021408081,
        "z": -0.08773386478424072
    },
    {
        "x": 0.4322222173213959,
        "y": 0.5667763948440552,
        "z": -0.02568664401769638
    },
    {
        "x": 0.2958560585975647,
        "y": 0.4747065305709839,
        "z": 0.17280590534210205
    },
    {
        "x": 0.4459775984287262,
        "y": 0.5096542239189148,
        "z": -0.01611737161874771
    },
    {
        "x": 0.41898590326309204,
        "y": 0.6142531037330627,
        "z": -0.014946168288588524
    },
    {
        "x": 0.3489081859588623,
        "y": 0.4722098708152771,
        "z": 0.025620101019740105
    },
    {
        "x": 0.43530282378196716,
        "y": 0.6006195545196533,
        "z": -0.06494861841201782
    },
    {
        "x": 0.31124037504196167,
        "y": 0.6348356008529663,
        "z": 0.2008083611726761
    },
    {
        "x": 0.43585115671157837,
        "y": 0.47767776250839233,
        "z": 0.0028182112146168947
    },
    {
        "x": 0.45052218437194824,
        "y": 0.5903746485710144,
        "z": -0.08523175120353699
    },
    {
        "x": 0.3539467453956604,
        "y": 0.7553964853286743,
        "z": 0.09992504864931107
    },
    {
        "x": 0.36148834228515625,
        "y": 0.7793779373168945,
        "z": 0.13468852639198303
    },
    {
        "x": 0.2987836003303528,
        "y": 0.5795350670814514,
        "z": 0.13554032146930695
    },
    {
        "x": 0.33211469650268555,
        "y": 0.7226511240005493,
        "z": 0.11893050372600555
    },
    {
        "x": 0.3041004240512848,
        "y": 0.436940461397171,
        "z": 0.08778710663318634
    },
    {
        "x": 0.4235762357711792,
        "y": 0.8446168899536133,
        "z": 0.04312162101268768
    },
    {
        "x": 0.47607913613319397,
        "y": 0.6564062237739563,
        "z": -0.06180765852332115
    },
    {
        "x": 0.4156814217567444,
        "y": 0.581541895866394,
        "z": -0.01651664637029171
    },
    {
        "x": 0.3100208342075348,
        "y": 0.4854559302330017,
        "z": 0.06766367703676224
    },
    {
        "x": 0.3793647289276123,
        "y": 0.4829549789428711,
        "z": 0.0049510011449456215
    },
    {
        "x": 0.3951077461242676,
        "y": 0.4846450090408325,
        "z": 0.0001435931771993637
    },
    {
        "x": 0.4062412977218628,
        "y": 0.7210841774940491,
        "z": 0.026538431644439697
    },
    {
        "x": 0.31061851978302,
        "y": 0.6220470666885376,
        "z": 0.08107929676771164
    },
    {
        "x": 0.45692288875579834,
        "y": 0.8758562207221985,
        "z": 0.0482589490711689
    },
    {
        "x": 0.4078688621520996,
        "y": 0.8392361402511597,
        "z": 0.08720150589942932
    },
    {
        "x": 0.3870301842689514,
        "y": 0.8138906359672546,
        "z": 0.1088687926530838
    },
    {
        "x": 0.48344936966896057,
        "y": 0.33424732089042664,
        "z": -0.06223354861140251
    },
    {
        "x": 0.49222517013549805,
        "y": 0.8810055255889893,
        "z": 0.04141805320978165
    },
    {
        "x": 0.41023939847946167,
        "y": 0.48348504304885864,
        "z": -0.0013616917422041297
    },
    {
        "x": 0.4241126477718353,
        "y": 0.48031577467918396,
        "z": 0.00021232242579571903
    },
    {
        "x": 0.43243056535720825,
        "y": 0.479038804769516,
        "z": 0.0030577757861465216
    },
    {
        "x": 0.3146604895591736,
        "y": 0.4460662305355072,
        "z": 0.045091379433870316
    },
    {
        "x": 0.4194127023220062,
        "y": 0.45979052782058716,
        "z": -0.004262253176420927
    },
    {
        "x": 0.40351158380508423,
        "y": 0.4524187743663788,
        "z": -0.007386574521660805
    },
    {
        "x": 0.38755151629447937,
        "y": 0.45115095376968384,
        "z": -0.006108896806836128
    },
    {
        "x": 0.3717523217201233,
        "y": 0.45528098940849304,
        "z": -0.0007361619500443339
    },
    {
        "x": 0.36210471391677856,
        "y": 0.46193021535873413,
        "z": 0.006019060034304857
    },
    {
        "x": 0.29658299684524536,
        "y": 0.4214780032634735,
        "z": 0.1356467753648758
    },
    {
        "x": 0.368213415145874,
        "y": 0.4799240529537201,
        "z": 0.01078040525317192
    },
    {
        "x": 0.4854772388935089,
        "y": 0.6755924224853516,
        "z": -0.04133819788694382
    },
    {
        "x": 0.4197041988372803,
        "y": 0.6721916198730469,
        "z": -0.01654326543211937
    },
    {
        "x": 0.4364616274833679,
        "y": 0.6349976658821106,
        "z": -0.05092078074812889
    },
    {
        "x": 0.45759180188179016,
        "y": 0.6742618083953857,
        "z": -0.038250476121902466
    },
    {
        "x": 0.484601765871048,
        "y": 0.45750224590301514,
        "z": -0.05246464163064957
    },
    {
        "x": 0.3784294128417969,
        "y": 0.789323091506958,
        "z": 0.08480586111545563
    },
    {
        "x": 0.4004172682762146,
        "y": 0.8169599175453186,
        "z": 0.06553421914577484
    },
    {
        "x": 0.45405155420303345,
        "y": 0.8644488453865051,
        "z": 0.02362372912466526
    },
    {
        "x": 0.3412971496582031,
        "y": 0.7421175241470337,
        "z": 0.165139839053154
    },
    {
        "x": 0.43059372901916504,
        "y": 0.4707726836204529,
        "z": -0.000193710409803316
    },
    {
        "x": 0.45527976751327515,
        "y": 0.5387769937515259,
        "z": -0.05509985238313675
    },
    {
        "x": 0.4912811517715454,
        "y": 0.8684954047203064,
        "z": 0.017847560346126556
    },
    {
        "x": 0.43001800775527954,
        "y": 0.861196756362915,
        "z": 0.06425654143095016
    },
    {
        "x": 0.30499735474586487,
        "y": 0.6307530999183655,
        "z": 0.13947981595993042
    },
    {
        "x": 0.44620606303215027,
        "y": 0.7285851240158081,
        "z": -0.002595282858237624
    },
    {
        "x": 0.44338589906692505,
        "y": 0.7339317798614502,
        "z": -0.005263765808194876
    },
    {
        "x": 0.44138455390930176,
        "y": 0.742699921131134,
        "z": -0.007552939001470804
    },
    {
        "x": 0.43999183177948,
        "y": 0.7546020150184631,
        "z": -0.004372053314000368
    },
    {
        "x": 0.4363930821418762,
        "y": 0.7744169235229492,
        "z": 0.009635819122195244
    },
    {
        "x": 0.41274702548980713,
        "y": 0.7089859247207642,
        "z": 0.01884574629366398
    },
    {
        "x": 0.40723830461502075,
        "y": 0.7060518264770508,
        "z": 0.019271638244390488
    },
    {
        "x": 0.40195345878601074,
        "y": 0.701985776424408,
        "z": 0.01844647154211998
    },
    {
        "x": 0.3880153298377991,
        "y": 0.6898205280303955,
        "z": 0.018885673955082893
    },
    {
        "x": 0.3287850618362427,
        "y": 0.6374083757400513,
        "z": 0.04376046359539032
    },
    {
        "x": 0.4564001262187958,
        "y": 0.5109689831733704,
        "z": -0.0402202270925045
    },
    {
        "x": 0.44814160466194153,
        "y": 0.4619874358177185,
        "z": -0.012623721733689308
    },
    {
        "x": 0.43788814544677734,
        "y": 0.46521884202957153,
        "z": -0.004704782273620367
    },
    {
        "x": 0.41766905784606934,
        "y": 0.706514835357666,
        "z": 0.02048277109861374
    },
    {
        "x": 0.33135437965393066,
        "y": 0.6911194324493408,
        "z": 0.07974838465452194
    },
    {
        "x": 0.46220311522483826,
        "y": 0.46137702465057373,
        "z": -0.037851203233003616
    },
    {
        "x": 0.42999881505966187,
        "y": 0.7970232367515564,
        "z": 0.02011011354625225
    },
    {
        "x": 0.48305824398994446,
        "y": 0.5511798858642578,
        "z": -0.08975686132907867
    },
    {
        "x": 0.46731340885162354,
        "y": 0.527625560760498,
        "z": -0.07048521935939789
    },
    {
        "x": 0.48354533314704895,
        "y": 0.5227930545806885,
        "z": -0.07591535151004791
    },
    {
        "x": 0.4419209957122803,
        "y": 0.5768812298774719,
        "z": -0.05076107382774353
    },
    {
        "x": 0.49085620045661926,
        "y": 0.8463398218154907,
        "z": 0.004495162982493639
    },
    {
        "x": 0.4902951121330261,
        "y": 0.8162313103675842,
        "z": -0.00026722264010459185
    },
    {
        "x": 0.459011048078537,
        "y": 0.8139905333518982,
        "z": 0.0055665490217506886
    },
    {
        "x": 0.38835984468460083,
        "y": 0.7423575520515442,
        "z": 0.04455900937318802
    },
    {
        "x": 0.4047708511352539,
        "y": 0.6307622194290161,
        "z": -0.007007263600826263
    },
    {
        "x": 0.4078716039657593,
        "y": 0.7727913856506348,
        "z": 0.03433758765459061
    },
    {
        "x": 0.364377498626709,
        "y": 0.6235378980636597,
        "z": 0.0020762262865900993
    },
    {
        "x": 0.38817524909973145,
        "y": 0.651205837726593,
        "z": 0.003074412001296878
    },
    {
        "x": 0.3501071631908417,
        "y": 0.6567991971969604,
        "z": 0.024502132087945938
    },
    {
        "x": 0.4544728100299835,
        "y": 0.8428757190704346,
        "z": 0.010960078798234463
    },
    {
        "x": 0.4311731159687042,
        "y": 0.5872029066085815,
        "z": -0.03516275808215141
    },
    {
        "x": 0.3784796893596649,
        "y": 0.7620645761489868,
        "z": 0.06234002858400345
    },
    {
        "x": 0.40149927139282227,
        "y": 0.7931265830993652,
        "z": 0.049297064542770386
    },
    {
        "x": 0.3712012767791748,
        "y": 0.7108282446861267,
        "z": 0.04301515221595764
    },
    {
        "x": 0.31662529706954956,
        "y": 0.6616195440292358,
        "z": 0.09284457564353943
    },
    {
        "x": 0.35315120220184326,
        "y": 0.7164813876152039,
        "z": 0.05983790382742882
    },
    {
        "x": 0.3150794804096222,
        "y": 0.6783461570739746,
        "z": 0.13830861449241638
    },
    {
        "x": 0.37316012382507324,
        "y": 0.6733802556991577,
        "z": 0.018513016402721405
    },
    {
        "x": 0.44407036900520325,
        "y": 0.5527821779251099,
        "z": -0.03931520879268646
    },
    {
        "x": 0.44096601009368896,
        "y": 0.6316675543785095,
        "z": -0.07431825250387192
    },
    {
        "x": 0.4288208484649658,
        "y": 0.6323109269142151,
        "z": -0.052438024431467056
    },
    {
        "x": 0.44897595047950745,
        "y": 0.6181753873825073,
        "z": -0.08917125314474106
    },
    {
        "x": 0.4332059919834137,
        "y": 0.442848265171051,
        "z": -0.019298257306218147
    },
    {
        "x": 0.4039287567138672,
        "y": 0.431271493434906,
        "z": -0.02257230505347252
    },
    {
        "x": 0.3790298104286194,
        "y": 0.42942431569099426,
        "z": -0.02013673447072506
    },
    {
        "x": 0.3587673008441925,
        "y": 0.4326258599758148,
        "z": -0.011306116357445717
    },
    {
        "x": 0.34537017345428467,
        "y": 0.44162431359291077,
        "z": 0.0013999554794281721
    },
    {
        "x": 0.3383161425590515,
        "y": 0.47742313146591187,
        "z": 0.0340447872877121
    },
    {
        "x": 0.29595747590065,
        "y": 0.5303628444671631,
        "z": 0.12563830614089966
    },
    {
        "x": 0.3515382409095764,
        "y": 0.5086008906364441,
        "z": 0.022905034944415092
    },
    {
        "x": 0.36989080905914307,
        "y": 0.5157307982444763,
        "z": 0.011698736809194088
    },
    {
        "x": 0.39309725165367126,
        "y": 0.5164130926132202,
        "z": 0.0033372677862644196
    },
    {
        "x": 0.41507554054260254,
        "y": 0.5119632482528687,
        "z": -0.0013508779229596257
    },
    {
        "x": 0.43153682351112366,
        "y": 0.5054309964179993,
        "z": -0.004152452573180199
    },
    {
        "x": 0.44267764687538147,
        "y": 0.498523473739624,
        "z": -0.006548098288476467
    },
    {
        "x": 0.2999405264854431,
        "y": 0.5258879661560059,
        "z": 0.19324874877929688
    },
    {
        "x": 0.42921382188796997,
        "y": 0.6357250809669495,
        "z": -0.04269573092460632
    },
    {
        "x": 0.4541867673397064,
        "y": 0.5637460350990295,
        "z": -0.0675572082400322
    },
    {
        "x": 0.4541209936141968,
        "y": 0.636720597743988,
        "z": -0.08911801874637604
    },
    {
        "x": 0.4646686911582947,
        "y": 0.6471239328384399,
        "z": -0.08033398538827896
    },
    {
        "x": 0.45431196689605713,
        "y": 0.6389954686164856,
        "z": -0.0796419084072113
    },
    {
        "x": 0.43384069204330444,
        "y": 0.6417675018310547,
        "z": -0.03564188629388809
    },
    {
        "x": 0.46803992986679077,
        "y": 0.6508731842041016,
        "z": -0.08512527495622635
    },
    {
        "x": 0.4699288606643677,
        "y": 0.6537451148033142,
        "z": -0.06218031793832779
    },
    {
        "x": 0.44179123640060425,
        "y": 0.4800513684749603,
        "z": -0.00020369226695038378
    },
    {
        "x": 0.45110249519348145,
        "y": 0.48617419600486755,
        "z": -0.01117968000471592
    },
    {
        "x": 0.4559504985809326,
        "y": 0.4913685917854309,
        "z": -0.024142786860466003
    },
    {
        "x": 0.3568386435508728,
        "y": 0.4669509530067444,
        "z": 0.012823359109461308
    },
    {
        "x": 0.3488103747367859,
        "y": 0.46028220653533936,
        "z": 0.013475507497787476
    },
    {
        "x": 0.4990004897117615,
        "y": 0.5542930960655212,
        "z": -0.08395407348871231
    },
    {
        "x": 0.6175670027732849,
        "y": 0.47171086072921753,
        "z": 0.005117365624755621
    },
    {
        "x": 0.5023434162139893,
        "y": 0.6491904258728027,
        "z": -0.06383064389228821
    },
    {
        "x": 0.6832554936408997,
        "y": 0.3735974133014679,
        "z": 0.07522327452898026
    },
    {
        "x": 0.5628297328948975,
        "y": 0.4943392276763916,
        "z": -0.009662438184022903
    },
    {
        "x": 0.5813490152359009,
        "y": 0.49522504210472107,
        "z": -0.008830616250634193
    },
    {
        "x": 0.5992487668991089,
        "y": 0.4941125810146332,
        "z": -0.004904419183731079
    },
    {
        "x": 0.624303936958313,
        "y": 0.47977718710899353,
        "z": 0.008897162042558193
    },
    {
        "x": 0.5477529168128967,
        "y": 0.48982110619544983,
        "z": -0.0074531203135848045
    },
    {
        "x": 0.5902289748191833,
        "y": 0.43574756383895874,
        "z": -0.02201332151889801
    },
    {
        "x": 0.5697659254074097,
        "y": 0.4376679062843323,
        "z": -0.021121609956026077
    },
    {
        "x": 0.6085093021392822,
        "y": 0.43932685256004333,
        "z": -0.016423482447862625
    },
    {
        "x": 0.6212124228477478,
        "y": 0.4470696449279785,
        "z": -0.009023599326610565
    },
    {
        "x": 0.6382174491882324,
        "y": 0.4944975972175598,
        "z": 0.019484585151076317
    },
    {
        "x": 0.5598734021186829,
        "y": 0.8225369453430176,
        "z": 0.02523413486778736
    },
    {
        "x": 0.6252927780151367,
        "y": 0.46559658646583557,
        "z": 0.010454332455992699
    },
    {
        "x": 0.6907760500907898,
        "y": 0.4769430160522461,
        "z": 0.09694379568099976
    },
    {
        "x": 0.6588258147239685,
        "y": 0.477530300617218,
        "z": 0.035136137157678604
    },
    {
        "x": 0.5824885964393616,
        "y": 0.597751259803772,
        "z": -0.017115557566285133
    },
    {
        "x": 0.514398992061615,
        "y": 0.7019284963607788,
        "z": -0.03723898157477379
    },
    {
        "x": 0.5135682821273804,
        "y": 0.7217908501625061,
        "z": -0.025167588144540787
    },
    {
        "x": 0.5437858700752258,
        "y": 0.7021490931510925,
        "z": -0.025353917852044106
    },
    {
        "x": 0.5631596446037292,
        "y": 0.7027655839920044,
        "z": -0.007852394133806229
    },
    {
        "x": 0.5353308320045471,
        "y": 0.7176212668418884,
        "z": -0.016796138137578964
    },
    {
        "x": 0.5521906018257141,
        "y": 0.713935375213623,
        "z": -0.0012868278427049518
    },
    {
        "x": 0.5850300788879395,
        "y": 0.7315362691879272,
        "z": 0.027629781514406204
    },
    {
        "x": 0.49857646226882935,
        "y": 0.6423109173774719,
        "z": -0.09896679222583771
    },
    {
        "x": 0.5003082156181335,
        "y": 0.6173529028892517,
        "z": -0.10700550675392151
    },
    {
        "x": 0.6483004689216614,
        "y": 0.42070120573043823,
        "z": -0.0083115603774786
    },
    {
        "x": 0.5417342782020569,
        "y": 0.539693295955658,
        "z": -0.024635223671793938
    },
    {
        "x": 0.5466828346252441,
        "y": 0.6226922273635864,
        "z": -0.05509985238313675
    },
    {
        "x": 0.547682523727417,
        "y": 0.607375979423523,
        "z": -0.05060136318206787
    },
    {
        "x": 0.63818359375,
        "y": 0.5862134695053101,
        "z": 0.00553660374134779
    },
    {
        "x": 0.49956706166267395,
        "y": 0.5838338136672974,
        "z": -0.09928620606660843
    },
    {
        "x": 0.6050782203674316,
        "y": 0.3976689577102661,
        "z": -0.03950153663754463
    },
    {
        "x": 0.6309924721717834,
        "y": 0.4046447277069092,
        "z": -0.026099229231476784
    },
    {
        "x": 0.6657533049583435,
        "y": 0.3335436284542084,
        "z": 0.03529584780335426
    },
    {
        "x": 0.5239364504814148,
        "y": 0.4199860095977783,
        "z": -0.05102725327014923
    },
    {
        "x": 0.5524364113807678,
        "y": 0.4458889365196228,
        "z": -0.01448034681379795
    },
    {
        "x": 0.6006186008453369,
        "y": 0.7051123976707458,
        "z": 0.028508184477686882
    },
    {
        "x": 0.6703915596008301,
        "y": 0.6912607550621033,
        "z": 0.17621305584907532
    },
    {
        "x": 0.5339801907539368,
        "y": 0.636955738067627,
        "z": -0.046182725578546524
    },
    {
        "x": 0.5179173350334167,
        "y": 0.6463343501091003,
        "z": -0.045889925211668015
    },
    {
        "x": 0.5867727994918823,
        "y": 0.7054426074028015,
        "z": 0.02946644276380539
    },
    {
        "x": 0.5782419443130493,
        "y": 0.7067158818244934,
        "z": 0.025274062529206276
    },
    {
        "x": 0.6409558057785034,
        "y": 0.38735273480415344,
        "z": -0.01995040476322174
    },
    {
        "x": 0.5491666793823242,
        "y": 0.630117654800415,
        "z": -0.04365399107336998
    },
    {
        "x": 0.5701250433921814,
        "y": 0.4004763662815094,
        "z": -0.04863160848617554
    },
    {
        "x": 0.5735177397727966,
        "y": 0.37994807958602905,
        "z": -0.05525956302881241
    },
    {
        "x": 0.5908591151237488,
        "y": 0.28228235244750977,
        "z": -0.03731883689761162
    },
    {
        "x": 0.6531429886817932,
        "y": 0.360302597284317,
        "z": 0.0037431963719427586
    },
    {
        "x": 0.5799581408500671,
        "y": 0.3305090367794037,
        "z": -0.04751364141702652
    },
    {
        "x": 0.6594947576522827,
        "y": 0.40825754404067993,
        "z": 0.0051040565595030785
    },
    {
        "x": 0.6711450815200806,
        "y": 0.3926981985569,
        "z": 0.03809076547622681
    },
    {
        "x": 0.5142756104469299,
        "y": 0.7147042751312256,
        "z": -0.03276710957288742
    },
    {
        "x": 0.5390027761459351,
        "y": 0.7122892141342163,
        "z": -0.02118815667927265
    },
    {
        "x": 0.5575631856918335,
        "y": 0.708916425704956,
        "z": -0.005716277286410332
    },
    {
        "x": 0.5298961997032166,
        "y": 0.640860915184021,
        "z": -0.041577763855457306
    },
    {
        "x": 0.5827216506004333,
        "y": 0.7059409618377686,
        "z": 0.027283741161227226
    },
    {
        "x": 0.5713130831718445,
        "y": 0.7185229063034058,
        "z": 0.016716282814741135
    },
    {
        "x": 0.5752554535865784,
        "y": 0.7072325348854065,
        "z": 0.024608604609966278
    },
    {
        "x": 0.5209997892379761,
        "y": 0.6358810067176819,
        "z": -0.07330676168203354
    },
    {
        "x": 0.5490241050720215,
        "y": 0.7110415101051331,
        "z": 0.0017800978384912014
    },
    {
        "x": 0.5319349765777588,
        "y": 0.716427206993103,
        "z": -0.009090145118534565
    },
    {
        "x": 0.5118675827980042,
        "y": 0.721477746963501,
        "z": -0.017182104289531708
    },
    {
        "x": 0.5180315375328064,
        "y": 0.7888801693916321,
        "z": -0.0037565056700259447
    },
    {
        "x": 0.5163345336914062,
        "y": 0.7661348581314087,
        "z": -0.019937096163630486
    },
    {
        "x": 0.5151885151863098,
        "y": 0.7524855136871338,
        "z": -0.02169390209019184
    },
    {
        "x": 0.5140123963356018,
        "y": 0.7419590950012207,
        "z": -0.017301885411143303
    },
    {
        "x": 0.5123857855796814,
        "y": 0.7339805364608765,
        "z": -0.01460012886673212
    },
    {
        "x": 0.5510437488555908,
        "y": 0.7224342226982117,
        "z": 0.004265580326318741
    },
    {
        "x": 0.553787112236023,
        "y": 0.7250368595123291,
        "z": 0.0016678018728271127
    },
    {
        "x": 0.5575677156448364,
        "y": 0.7304969429969788,
        "z": -0.0001210300179081969
    },
    {
        "x": 0.5604774951934814,
        "y": 0.7379295825958252,
        "z": 0.004199034534394741
    },
    {
        "x": 0.5748826265335083,
        "y": 0.6796828508377075,
        "z": -0.006155478768050671
    },
    {
        "x": 0.6898357272148132,
        "y": 0.5743224024772644,
        "z": 0.18536972999572754
    },
    {
        "x": 0.5621708631515503,
        "y": 0.7169462442398071,
        "z": 0.016982465982437134
    },
    {
        "x": 0.566645085811615,
        "y": 0.7167390584945679,
        "z": 0.015678169205784798
    },
    {
        "x": 0.5109884738922119,
        "y": 0.6581413745880127,
        "z": -0.04487843066453934
    },
    {
        "x": 0.5441486835479736,
        "y": 0.6425253748893738,
        "z": -0.027816109359264374
    },
    {
        "x": 0.5142344832420349,
        "y": 0.6528019905090332,
        "z": -0.046102870255708694
    },
    {
        "x": 0.5616426467895508,
        "y": 0.5511091947555542,
        "z": -0.017088938504457474
    },
    {
        "x": 0.5930382013320923,
        "y": 0.563858151435852,
        "z": -0.011392626911401749
    },
    {
        "x": 0.5520772933959961,
        "y": 0.615402102470398,
        "z": -0.03891593590378761
    },
    {
        "x": 0.6366686820983887,
        "y": 0.3020225465297699,
        "z": -0.0039228699170053005
    },
    {
        "x": 0.6243930459022522,
        "y": 0.33822864294052124,
        "z": -0.024036312475800514
    },
    {
        "x": 0.6116676330566406,
        "y": 0.37691164016723633,
        "z": -0.03958138823509216
    },
    {
        "x": 0.5671321749687195,
        "y": 0.7545130848884583,
        "z": 0.017568068578839302
    },
    {
        "x": 0.5293633937835693,
        "y": 0.38728269934654236,
        "z": -0.06175442039966583
    },
    {
        "x": 0.5345892310142517,
        "y": 0.33129188418388367,
        "z": -0.059624962508678436
    },
    {
        "x": 0.5413166284561157,
        "y": 0.27419108152389526,
        "z": -0.05547250807285309
    },
    {
        "x": 0.6152704954147339,
        "y": 0.48899251222610474,
        "z": 0.0021976723801344633
    },
    {
        "x": 0.6580873727798462,
        "y": 0.5098881721496582,
        "z": 0.031063539907336235
    },
    {
        "x": 0.5382177233695984,
        "y": 0.48483023047447205,
        "z": -0.0053835478611290455
    },
    {
        "x": 0.6399034857749939,
        "y": 0.4522177278995514,
        "z": 0.006431642919778824
    },
    {
        "x": 0.5280227661132812,
        "y": 0.5261121988296509,
        "z": -0.03258078172802925
    },
    {
        "x": 0.5330882668495178,
        "y": 0.6190513968467712,
        "z": -0.07431825250387192
    },
    {
        "x": 0.6766908168792725,
        "y": 0.5241211652755737,
        "z": 0.052943769842386246
    },
    {
        "x": 0.6455703377723694,
        "y": 0.5269943475723267,
        "z": 0.016822757199406624
    },
    {
        "x": 0.6224725842475891,
        "y": 0.537104070186615,
        "z": 0.0019281621789559722
    },
    {
        "x": 0.5873393416404724,
        "y": 0.5365009307861328,
        "z": -0.005669694859534502
    },
    {
        "x": 0.5610047578811646,
        "y": 0.528950035572052,
        "z": -0.009828802198171616
    },
    {
        "x": 0.5419261455535889,
        "y": 0.519819974899292,
        "z": -0.01577133499085903
    },
    {
        "x": 0.5021121501922607,
        "y": 0.4967042803764343,
        "z": -0.05584516003727913
    },
    {
        "x": 0.6762275099754333,
        "y": 0.5721011161804199,
        "z": 0.054008498787879944
    },
    {
        "x": 0.6548619270324707,
        "y": 0.4469374418258667,
        "z": 0.013388997875154018
    },
    {
        "x": 0.4927177131175995,
        "y": 0.6535684466362,
        "z": -0.08858565986156464
    },
    {
        "x": 0.5410534143447876,
        "y": 0.5660891532897949,
        "z": -0.030264990404248238
    },
    {
        "x": 0.6955317854881287,
        "y": 0.46964192390441895,
        "z": 0.15587668120861053
    },
    {
        "x": 0.527553915977478,
        "y": 0.5084990859031677,
        "z": -0.0197108406573534
    },
    {
        "x": 0.5546488761901855,
        "y": 0.6137425303459167,
        "z": -0.019551130011677742
    },
    {
        "x": 0.6303893327713013,
        "y": 0.46710383892059326,
        "z": 0.014187546446919441
    },
    {
        "x": 0.533907949924469,
        "y": 0.6003246903419495,
        "z": -0.06872841715812683
    },
    {
        "x": 0.6828940510749817,
        "y": 0.6315615177154541,
        "z": 0.18536972999572754
    },
    {
        "x": 0.5393701195716858,
        "y": 0.47576355934143066,
        "z": -0.001939807552844286
    },
    {
        "x": 0.51675945520401,
        "y": 0.5898080468177795,
        "z": -0.08784034103155136
    },
    {
        "x": 0.6348544359207153,
        "y": 0.7545398473739624,
        "z": 0.08917125314474106
    },
    {
        "x": 0.6299397349357605,
        "y": 0.7783074378967285,
        "z": 0.12372179329395294
    },
    {
        "x": 0.6902506351470947,
        "y": 0.5754653215408325,
        "z": 0.11956934630870819
    },
    {
        "x": 0.6577538847923279,
        "y": 0.7208587527275085,
        "z": 0.10620696097612381
    },
    {
        "x": 0.6814213991165161,
        "y": 0.43120813369750977,
        "z": 0.07197584211826324
    },
    {
        "x": 0.5613574981689453,
        "y": 0.8452785015106201,
        "z": 0.038117386400699615
    },
    {
        "x": 0.4914127290248871,
        "y": 0.6563855409622192,
        "z": -0.06234002858400345
    },
    {
        "x": 0.5590152740478516,
        "y": 0.5805951356887817,
        "z": -0.02209317684173584
    },
    {
        "x": 0.6741292476654053,
        "y": 0.48063257336616516,
        "z": 0.052943769842386246
    },
    {
        "x": 0.5978980660438538,
        "y": 0.47960785031318665,
        "z": -0.004199034534394741
    },
    {
        "x": 0.5814778804779053,
        "y": 0.4818815290927887,
        "z": -0.007985485717654228
    },
    {
        "x": 0.5757571458816528,
        "y": 0.7214387655258179,
        "z": 0.02021658793091774
    },
    {
        "x": 0.6749179363250732,
        "y": 0.619498610496521,
        "z": 0.06697160750627518
    },
    {
        "x": 0.5280464887619019,
        "y": 0.8765093088150024,
        "z": 0.04538417607545853
    },
    {
        "x": 0.5803685188293457,
        "y": 0.8393579721450806,
        "z": 0.08006780594587326
    },
    {
        "x": 0.6029727458953857,
        "y": 0.8141903281211853,
        "z": 0.10003151744604111
    },
    {
        "x": 0.5661552548408508,
        "y": 0.4807665944099426,
        "z": -0.008271632716059685
    },
    {
        "x": 0.5514878630638123,
        "y": 0.4779592454433441,
        "z": -0.005480039399117231
    },
    {
        "x": 0.5429789423942566,
        "y": 0.47696131467819214,
        "z": -0.002152753993868828
    },
    {
        "x": 0.6677075624465942,
        "y": 0.4399172067642212,
        "z": 0.030398081988096237
    },
    {
        "x": 0.5561636090278625,
        "y": 0.45688509941101074,
        "z": -0.010534186847507954
    },
    {
        "x": 0.5726413726806641,
        "y": 0.44864940643310547,
        "z": -0.01458682119846344
    },
    {
        "x": 0.5888431072235107,
        "y": 0.4469398856163025,
        "z": -0.01460012886673212
    },
    {
        "x": 0.6052043437957764,
        "y": 0.45077016949653625,
        "z": -0.01036116760224104
    },
    {
        "x": 0.6151503324508667,
        "y": 0.45732980966567993,
        "z": -0.004295526072382927
    },
    {
        "x": 0.6922144889831543,
        "y": 0.41620200872421265,
        "z": 0.11893050372600555
    },
    {
        "x": 0.6094318628311157,
        "y": 0.4761144518852234,
        "z": 0.0007760893786326051
    },
    {
        "x": 0.5551487803459167,
        "y": 0.6722452044487,
        "z": -0.021307937800884247
    },
    {
        "x": 0.5335707664489746,
        "y": 0.6352449655532837,
        "z": -0.054008498787879944
    },
    {
        "x": 0.514664888381958,
        "y": 0.6743897795677185,
        "z": -0.0402202270925045
    },
    {
        "x": 0.609394371509552,
        "y": 0.7887449264526367,
        "z": 0.07602182030677795
    },
    {
        "x": 0.5859110355377197,
        "y": 0.8167369365692139,
        "z": 0.05866670235991478
    },
    {
        "x": 0.5296521782875061,
        "y": 0.8646109104156494,
        "z": 0.020868737250566483
    },
    {
        "x": 0.6516027450561523,
        "y": 0.74034583568573,
        "z": 0.15193717181682587
    },
    {
        "x": 0.5445516705513,
        "y": 0.4684697687625885,
        "z": -0.005716277286410332
    },
    {
        "x": 0.5147005319595337,
        "y": 0.5383773446083069,
        "z": -0.05770844593644142
    },
    {
        "x": 0.5563011169433594,
        "y": 0.8616609573364258,
        "z": 0.05887964740395546
    },
    {
        "x": 0.6846358776092529,
        "y": 0.6276161074638367,
        "z": 0.12404121458530426
    },
    {
        "x": 0.5333048105239868,
        "y": 0.7289445400238037,
        "z": -0.006508170627057552
    },
    {
        "x": 0.5362337827682495,
        "y": 0.7343899607658386,
        "z": -0.009296435862779617
    },
    {
        "x": 0.5384937524795532,
        "y": 0.7429472804069519,
        "z": -0.01167877297848463
    },
    {
        "x": 0.5402976870536804,
        "y": 0.7546202540397644,
        "z": -0.008398069068789482
    },
    {
        "x": 0.545428991317749,
        "y": 0.7745850086212158,
        "z": 0.0053669121116399765
    },
    {
        "x": 0.5686327219009399,
        "y": 0.7093904614448547,
        "z": 0.012763467617332935
    },
    {
        "x": 0.5737704038619995,
        "y": 0.7066391110420227,
        "z": 0.012550522573292255
    },
    {
        "x": 0.5789217948913574,
        "y": 0.7024682760238647,
        "z": 0.011652154847979546
    },
    {
        "x": 0.5924596786499023,
        "y": 0.6899228692054749,
        "z": 0.01116637047380209
    },
    {
        "x": 0.6538946628570557,
        "y": 0.6353229284286499,
        "z": 0.0316491425037384
    },
    {
        "x": 0.5145460963249207,
        "y": 0.5102634429931641,
        "z": -0.04285544157028198
    },
    {
        "x": 0.5246158838272095,
        "y": 0.4598928689956665,
        "z": -0.015970971435308456
    },
    {
        "x": 0.5362967848777771,
        "y": 0.4632169008255005,
        "z": -0.009349673055112362
    },
    {
        "x": 0.5637600421905518,
        "y": 0.70675128698349,
        "z": 0.01457351166754961
    },
    {
        "x": 0.6550771594047546,
        "y": 0.6892940998077393,
        "z": 0.06777016073465347
    },
    {
        "x": 0.5086407661437988,
        "y": 0.46018654108047485,
        "z": -0.0399540476500988
    },
    {
        "x": 0.5528751015663147,
        "y": 0.7974289655685425,
        "z": 0.015851188451051712
    },
    {
        "x": 0.5007514357566833,
        "y": 0.5273477435112,
        "z": -0.07181613147258759
    },
    {
        "x": 0.5286048650741577,
        "y": 0.5760977268218994,
        "z": -0.05414159223437309
    },
    {
        "x": 0.522895097732544,
        "y": 0.8145193457603455,
        "z": 0.003606777871027589
    },
    {
        "x": 0.5960009098052979,
        "y": 0.7422308325767517,
        "z": 0.03707927465438843
    },
    {
        "x": 0.5708881616592407,
        "y": 0.6302065849304199,
        "z": -0.012889904901385307
    },
    {
        "x": 0.5761126279830933,
        "y": 0.772840142250061,
        "z": 0.028348473832011223
    },
    {
        "x": 0.6144105792045593,
        "y": 0.6221511960029602,
        "z": -0.006584698799997568
    },
    {
        "x": 0.590072751045227,
        "y": 0.6504125595092773,
        "z": -0.0041291615925729275
    },
    {
        "x": 0.6315526962280273,
        "y": 0.6553839445114136,
        "z": 0.01457351166754961
    },
    {
        "x": 0.5283700227737427,
        "y": 0.8430085182189941,
        "z": 0.008544469252228737
    },
    {
        "x": 0.5412819385528564,
        "y": 0.5865375995635986,
        "z": -0.0394216813147068
    },
    {
        "x": 0.6070969700813293,
        "y": 0.7620140314102173,
        "z": 0.053928643465042114
    },
    {
        "x": 0.5833677649497986,
        "y": 0.7934092283248901,
        "z": 0.04285544157028198
    },
    {
        "x": 0.6122831106185913,
        "y": 0.7101398706436157,
        "z": 0.03385845944285393
    },
    {
        "x": 0.6702728271484375,
        "y": 0.6594560742378235,
        "z": 0.07942896336317062
    },
    {
        "x": 0.6322490572929382,
        "y": 0.7155937552452087,
        "z": 0.04956325143575668
    },
    {
        "x": 0.6752268075942993,
        "y": 0.6757264137268066,
        "z": 0.12350884079933167
    },
    {
        "x": 0.6079605221748352,
        "y": 0.6725839972496033,
        "z": 0.009955238550901413
    },
    {
        "x": 0.5273473858833313,
        "y": 0.5519402027130127,
        "z": -0.04296191409230232
    },
    {
        "x": 0.5270028710365295,
        "y": 0.6317247748374939,
        "z": -0.07756568491458893
    },
    {
        "x": 0.5412663221359253,
        "y": 0.6322536468505859,
        "z": -0.05621781945228577
    },
    {
        "x": 0.5173397660255432,
        "y": 0.617929220199585,
        "z": -0.09199279546737671
    },
    {
        "x": 0.5392937660217285,
        "y": 0.43955835700035095,
        "z": -0.023983076214790344
    },
    {
        "x": 0.569023847579956,
        "y": 0.42629706859588623,
        "z": -0.02893407829105854
    },
    {
        "x": 0.5954585075378418,
        "y": 0.4234854578971863,
        "z": -0.028295239433646202
    },
    {
        "x": 0.6171512007713318,
        "y": 0.4265553951263428,
        "z": -0.021307937800884247
    },
    {
        "x": 0.6323984861373901,
        "y": 0.43547767400741577,
        "z": -0.009955238550901413
    },
    {
        "x": 0.6422640085220337,
        "y": 0.4724188446998596,
        "z": 0.02169390209019184
    },
    {
        "x": 0.6928596496582031,
        "y": 0.5258185267448425,
        "z": 0.10924144089221954
    },
    {
        "x": 0.6278926730155945,
        "y": 0.505110502243042,
        "z": 0.011598917655646801
    },
    {
        "x": 0.6086496114730835,
        "y": 0.5130147933959961,
        "z": 0.0017717796145007014
    },
    {
        "x": 0.5841491222381592,
        "y": 0.514013946056366,
        "z": -0.004728072788566351
    },
    {
        "x": 0.5611884593963623,
        "y": 0.5099283456802368,
        "z": -0.007779193576425314
    },
    {
        "x": 0.5437858700752258,
        "y": 0.5036666393280029,
        "z": -0.00891712587326765
    },
    {
        "x": 0.5319221615791321,
        "y": 0.49721604585647583,
        "z": -0.010520877316594124
    },
    {
        "x": 0.6929062604904175,
        "y": 0.5209921598434448,
        "z": 0.17631952464580536
    },
    {
        "x": 0.5418695211410522,
        "y": 0.6359553337097168,
        "z": -0.04628920182585716
    },
    {
        "x": 0.5142463445663452,
        "y": 0.5633573532104492,
        "z": -0.07021903246641159
    },
    {
        "x": 0.5122587084770203,
        "y": 0.6368668079376221,
        "z": -0.09108777344226837
    },
    {
        "x": 0.502572774887085,
        "y": 0.6474906206130981,
        "z": -0.08155842870473862
    },
    {
        "x": 0.5128755569458008,
        "y": 0.6391489505767822,
        "z": -0.08171813189983368
    },
    {
        "x": 0.5375533699989319,
        "y": 0.6418442726135254,
        "z": -0.038809459656476974
    },
    {
        "x": 0.4987044036388397,
        "y": 0.6511156558990479,
        "z": -0.0860835388302803
    },
    {
        "x": 0.49782803654670715,
        "y": 0.6536561846733093,
        "z": -0.06303209811449051
    },
    {
        "x": 0.5327446460723877,
        "y": 0.4782053530216217,
        "z": -0.004395344760268927
    },
    {
        "x": 0.5222453474998474,
        "y": 0.4848399758338928,
        "z": -0.014347256161272526
    },
    {
        "x": 0.516654372215271,
        "y": 0.4904230237007141,
        "z": -0.026618286967277527
    },
    {
        "x": 0.6210671067237854,
        "y": 0.4621165990829468,
        "z": 0.002161072101444006
    },
    {
        "x": 0.6296541690826416,
        "y": 0.45502325892448425,
        "z": 0.002102844649925828
    }
]

let neutralDatabase = [
    {
        "x": 0.49046486616134644,
        "y": 0.7170591950416565,
        "z": -0.02987985871732235
    },
    {
        "x": 0.48507121205329895,
        "y": 0.6564301252365112,
        "z": -0.08645742386579514
    },
    {
        "x": 0.4886211156845093,
        "y": 0.6701931357383728,
        "z": -0.037916138768196106
    },
    {
        "x": 0.4706524908542633,
        "y": 0.570600688457489,
        "z": -0.07469964772462845
    },
    {
        "x": 0.48404452204704285,
        "y": 0.6334298849105835,
        "z": -0.09535665810108185
    },
    {
        "x": 0.4840105473995209,
        "y": 0.5983351469039917,
        "z": -0.09303746372461319
    },
    {
        "x": 0.4853093922138214,
        "y": 0.5079919099807739,
        "z": -0.062024977058172226
    },
    {
        "x": 0.370566725730896,
        "y": 0.4826906621456146,
        "z": 0.011899356730282307
    },
    {
        "x": 0.48465561866760254,
        "y": 0.4464399218559265,
        "z": -0.06046086549758911
    },
    {
        "x": 0.48356857895851135,
        "y": 0.4149543344974518,
        "z": -0.07033092528581619
    },
    {
        "x": 0.4807187020778656,
        "y": 0.28733906149864197,
        "z": -0.07389062643051147
    },
    {
        "x": 0.49097204208374023,
        "y": 0.7276963591575623,
        "z": -0.02606397308409214
    },
    {
        "x": 0.49166426062583923,
        "y": 0.7340162992477417,
        "z": -0.019160324707627296
    },
    {
        "x": 0.49231964349746704,
        "y": 0.7351586222648621,
        "z": -0.010746501386165619
    },
    {
        "x": 0.492348313331604,
        "y": 0.7391855716705322,
        "z": -0.007301418576389551
    },
    {
        "x": 0.4926377236843109,
        "y": 0.7495378255844116,
        "z": -0.00858911033719778
    },
    {
        "x": 0.49293944239616394,
        "y": 0.7616159915924072,
        "z": -0.009897029027342796
    },
    {
        "x": 0.49366849660873413,
        "y": 0.7731133699417114,
        "z": -0.0050664967857301235
    },
    {
        "x": 0.49551305174827576,
        "y": 0.7897745370864868,
        "z": 0.015438825823366642
    },
    {
        "x": 0.48621535301208496,
        "y": 0.6656209230422974,
        "z": -0.07604801654815674
    },
    {
        "x": 0.47214382886886597,
        "y": 0.658894956111908,
        "z": -0.051130153238773346
    },
    {
        "x": 0.31696802377700806,
        "y": 0.3786586821079254,
        "z": 0.07637162506580353
    },
    {
        "x": 0.42099541425704956,
        "y": 0.50506591796875,
        "z": -0.005767648573964834
    },
    {
        "x": 0.40461021661758423,
        "y": 0.5067115426063538,
        "z": -0.0034467685036361217
    },
    {
        "x": 0.3887479901313782,
        "y": 0.5060492157936096,
        "z": 0.0021219956688582897
    },
    {
        "x": 0.36695051193237305,
        "y": 0.48992806673049927,
        "z": 0.016315266489982605
    },
    {
        "x": 0.43347498774528503,
        "y": 0.5003054141998291,
        "z": -0.0059024859219789505
    },
    {
        "x": 0.3922421932220459,
        "y": 0.4513486623764038,
        "z": -0.017286092042922974
    },
    {
        "x": 0.41048362851142883,
        "y": 0.4528438448905945,
        "z": -0.019429998472332954
    },
    {
        "x": 0.37651240825653076,
        "y": 0.45413661003112793,
        "z": -0.010328507050871849
    },
    {
        "x": 0.3666318356990814,
        "y": 0.46030259132385254,
        "z": -0.002207954181358218
    },
    {
        "x": 0.3562704920768738,
        "y": 0.5050217509269714,
        "z": 0.027520211413502693
    },
    {
        "x": 0.4387488067150116,
        "y": 0.8169578909873962,
        "z": 0.046842340379953384
    },
    {
        "x": 0.36404165625572205,
        "y": 0.47529393434524536,
        "z": 0.016908548772335052
    },
    {
        "x": 0.3162800967693329,
        "y": 0.4790624678134918,
        "z": 0.10290752351284027
    },
    {
        "x": 0.33855345845222473,
        "y": 0.48625999689102173,
        "z": 0.042419690638780594
    },
    {
        "x": 0.40987536311149597,
        "y": 0.6099166870117188,
        "z": -0.004806935787200928
    },
    {
        "x": 0.47036927938461304,
        "y": 0.7127107977867126,
        "z": -0.02685951255261898
    },
    {
        "x": 0.47504082322120667,
        "y": 0.7325005531311035,
        "z": -0.015600630082190037
    },
    {
        "x": 0.45118778944015503,
        "y": 0.7155424356460571,
        "z": -0.014656771905720234
    },
    {
        "x": 0.4404299855232239,
        "y": 0.7197058200836182,
        "z": -0.00028421092429198325
    },
    {
        "x": 0.46121981739997864,
        "y": 0.7306617498397827,
        "z": -0.007847508415579796
    },
    {
        "x": 0.4508586823940277,
        "y": 0.7299298048019409,
        "z": 0.004830532241612673
    },
    {
        "x": 0.4233517646789551,
        "y": 0.7452363967895508,
        "z": 0.03449128195643425
    },
    {
        "x": 0.47168368101119995,
        "y": 0.6548734903335571,
        "z": -0.08430003374814987
    },
    {
        "x": 0.46829015016555786,
        "y": 0.6327661871910095,
        "z": -0.09249812364578247
    },
    {
        "x": 0.34187084436416626,
        "y": 0.43702733516693115,
        "z": -0.0012565114302560687
    },
    {
        "x": 0.44009342789649963,
        "y": 0.5511384010314941,
        "z": -0.01926819421350956
    },
    {
        "x": 0.4370298683643341,
        "y": 0.6360383033752441,
        "z": -0.04050500690937042
    },
    {
        "x": 0.43649399280548096,
        "y": 0.6213741898536682,
        "z": -0.03686441108584404
    },
    {
        "x": 0.3643926978111267,
        "y": 0.6004238128662109,
        "z": 0.018917618319392204
    },
    {
        "x": 0.46913546323776245,
        "y": 0.5999616980552673,
        "z": -0.08661922812461853
    },
    {
        "x": 0.37531134486198425,
        "y": 0.4217895269393921,
        "z": -0.03737679123878479
    },
    {
        "x": 0.3544091284275055,
        "y": 0.42536208033561707,
        "z": -0.021573904901742935
    },
    {
        "x": 0.32686060667037964,
        "y": 0.3438699245452881,
        "z": 0.03476095199584961
    },
    {
        "x": 0.4477372467517853,
        "y": 0.4428796172142029,
        "z": -0.0536111555993557
    },
    {
        "x": 0.4269302189350128,
        "y": 0.4598274230957031,
        "z": -0.014535418711602688
    },
    {
        "x": 0.4106920659542084,
        "y": 0.7246847152709961,
        "z": 0.03546210750937462
    },
    {
        "x": 0.3490729033946991,
        "y": 0.6759858131408691,
        "z": 0.18995822966098785
    },
    {
        "x": 0.44898706674575806,
        "y": 0.6488319635391235,
        "z": -0.032792337238788605
    },
    {
        "x": 0.462635338306427,
        "y": 0.6567139625549316,
        "z": -0.034005869179964066
    },
    {
        "x": 0.4277510643005371,
        "y": 0.7267701625823975,
        "z": 0.03244176134467125
    },
    {
        "x": 0.4348660409450531,
        "y": 0.7261048555374146,
        "z": 0.027021316811442375
    },
    {
        "x": 0.34565508365631104,
        "y": 0.40792524814605713,
        "z": -0.0159646887332201
    },
    {
        "x": 0.4377261996269226,
        "y": 0.6429334282875061,
        "z": -0.029529282823204994
    },
    {
        "x": 0.40511372685432434,
        "y": 0.4258713126182556,
        "z": -0.048568252474069595
    },
    {
        "x": 0.40087568759918213,
        "y": 0.40636366605758667,
        "z": -0.0556606762111187
    },
    {
        "x": 0.3835010230541229,
        "y": 0.2992843985557556,
        "z": -0.0433635488152504
    },
    {
        "x": 0.33614641427993774,
        "y": 0.37539559602737427,
        "z": 0.005150769837200642
    },
    {
        "x": 0.39369434118270874,
        "y": 0.35222965478897095,
        "z": -0.05169646814465523
    },
    {
        "x": 0.3327109217643738,
        "y": 0.4231914281845093,
        "z": 0.011656650342047215
    },
    {
        "x": 0.3249041438102722,
        "y": 0.40243446826934814,
        "z": 0.04128706082701683
    },
    {
        "x": 0.47218313813209534,
        "y": 0.7250574231147766,
        "z": -0.023097561672329903
    },
    {
        "x": 0.4566526710987091,
        "y": 0.7255415320396423,
        "z": -0.011852163821458817
    },
    {
        "x": 0.4456484317779541,
        "y": 0.7253931164741516,
        "z": 0.0010264459997415543
    },
    {
        "x": 0.45354196429252625,
        "y": 0.6522263288497925,
        "z": -0.02950231358408928
    },
    {
        "x": 0.4314205050468445,
        "y": 0.7270114421844482,
        "z": 0.029421411454677582
    },
    {
        "x": 0.4379374384880066,
        "y": 0.7332575917243958,
        "z": 0.0201041828840971
    },
    {
        "x": 0.43658164143562317,
        "y": 0.7246448397636414,
        "z": 0.026266228407621384
    },
    {
        "x": 0.4556644558906555,
        "y": 0.6473091840744019,
        "z": -0.05841134861111641
    },
    {
        "x": 0.4545097053050995,
        "y": 0.7275823354721069,
        "z": 0.007665478158742189
    },
    {
        "x": 0.46531665325164795,
        "y": 0.7303222417831421,
        "z": -0.0008069145842455328
    },
    {
        "x": 0.47806718945503235,
        "y": 0.7333252429962158,
        "z": -0.0077261547558009624
    },
    {
        "x": 0.4747907519340515,
        "y": 0.788310706615448,
        "z": 0.017299573868513107
    },
    {
        "x": 0.47423237562179565,
        "y": 0.77048259973526,
        "z": -0.0029209046624600887
    },
    {
        "x": 0.47414642572402954,
        "y": 0.7584017515182495,
        "z": -0.007180065382272005
    },
    {
        "x": 0.4751431941986084,
        "y": 0.7468824982643127,
        "z": -0.005615957081317902
    },
    {
        "x": 0.47659188508987427,
        "y": 0.7382342219352722,
        "z": -0.0042102825827896595
    },
    {
        "x": 0.4519537091255188,
        "y": 0.7322173118591309,
        "z": 0.010294797830283642
    },
    {
        "x": 0.44938746094703674,
        "y": 0.7354140877723694,
        "z": 0.008602594956755638
    },
    {
        "x": 0.44619041681289673,
        "y": 0.7409201860427856,
        "z": 0.008177858777344227
    },
    {
        "x": 0.44343507289886475,
        "y": 0.747859001159668,
        "z": 0.012647701427340508
    },
    {
        "x": 0.42579394578933716,
        "y": 0.6942887902259827,
        "z": 0.001971989870071411
    },
    {
        "x": 0.32734885811805725,
        "y": 0.5640712976455688,
        "z": 0.19287070631980896
    },
    {
        "x": 0.48730218410491943,
        "y": 0.6667578220367432,
        "z": -0.051642533391714096
    },
    {
        "x": 0.4450298845767975,
        "y": 0.7294282913208008,
        "z": 0.019847992807626724
    },
    {
        "x": 0.44158846139907837,
        "y": 0.730910062789917,
        "z": 0.018958069384098053
    },
    {
        "x": 0.46853986382484436,
        "y": 0.6678581833839417,
        "z": -0.03211815282702446
    },
    {
        "x": 0.44407033920288086,
        "y": 0.6552228331565857,
        "z": -0.015465793199837208
    },
    {
        "x": 0.46548280119895935,
        "y": 0.6627188920974731,
        "z": -0.03376316279172897
    },
    {
        "x": 0.42507219314575195,
        "y": 0.5625473260879517,
        "z": -0.009701515547931194
    },
    {
        "x": 0.3995027542114258,
        "y": 0.577254056930542,
        "z": -0.0011166181648150086
    },
    {
        "x": 0.43503713607788086,
        "y": 0.6288719177246094,
        "z": -0.025659462437033653
    },
    {
        "x": 0.3470577001571655,
        "y": 0.31700536608695984,
        "z": -0.006839601788669825
    },
    {
        "x": 0.357702374458313,
        "y": 0.35757529735565186,
        "z": -0.02485044114291668
    },
    {
        "x": 0.3685862421989441,
        "y": 0.40145036578178406,
        "z": -0.03794310614466667
    },
    {
        "x": 0.4370655119419098,
        "y": 0.7623228430747986,
        "z": 0.028100011870265007
    },
    {
        "x": 0.4404042959213257,
        "y": 0.41291141510009766,
        "z": -0.06585434824228287
    },
    {
        "x": 0.43392786383628845,
        "y": 0.3517206907272339,
        "z": -0.06752632558345795
    },
    {
        "x": 0.4265880584716797,
        "y": 0.2904689908027649,
        "z": -0.06563860177993774
    },
    {
        "x": 0.37479251623153687,
        "y": 0.5004724860191345,
        "z": 0.00972848292440176
    },
    {
        "x": 0.34106218814849854,
        "y": 0.5204603672027588,
        "z": 0.04037017002701759
    },
    {
        "x": 0.4414242208003998,
        "y": 0.49560219049453735,
        "z": -0.0048709833063185215
    },
    {
        "x": 0.351766973733902,
        "y": 0.4633672833442688,
        "z": 0.013200533576309681
    },
    {
        "x": 0.4501405954360962,
        "y": 0.5380663275718689,
        "z": -0.02820787951350212
    },
    {
        "x": 0.4449872672557831,
        "y": 0.6324856281280518,
        "z": -0.05922036990523338
    },
    {
        "x": 0.3271195888519287,
        "y": 0.5318557024002075,
        "z": 0.06348121911287308
    },
    {
        "x": 0.35166630148887634,
        "y": 0.5401751399040222,
        "z": 0.027520211413502693
    },
    {
        "x": 0.37192296981811523,
        "y": 0.5520008206367493,
        "z": 0.01184542290866375
    },
    {
        "x": 0.4023244380950928,
        "y": 0.5493148565292358,
        "z": 0.0016416392754763365
    },
    {
        "x": 0.4242632985115051,
        "y": 0.5398320555686951,
        "z": -0.0048709833063185215
    },
    {
        "x": 0.4395146071910858,
        "y": 0.5304338335990906,
        "z": -0.0126342186704278
    },
    {
        "x": 0.46981167793273926,
        "y": 0.5130783319473267,
        "z": -0.053557220846414566
    },
    {
        "x": 0.3318900465965271,
        "y": 0.5806984305381775,
        "z": 0.06704091280698776
    },
    {
        "x": 0.3390020728111267,
        "y": 0.45835080742836,
        "z": 0.02076488360762596
    },
    {
        "x": 0.4780053496360779,
        "y": 0.6639987826347351,
        "z": -0.07448390871286392
    },
    {
        "x": 0.4420096278190613,
        "y": 0.5778669714927673,
        "z": -0.02207280322909355
    },
    {
        "x": 0.31597229838371277,
        "y": 0.4661214351654053,
        "z": 0.15921542048454285
    },
    {
        "x": 0.4508766233921051,
        "y": 0.5202218294143677,
        "z": -0.01824343390762806
    },
    {
        "x": 0.4345892667770386,
        "y": 0.6265762448310852,
        "z": -0.008696980774402618
    },
    {
        "x": 0.3607080578804016,
        "y": 0.4767744243144989,
        "z": 0.020724432542920113
    },
    {
        "x": 0.4448583126068115,
        "y": 0.6143643856048584,
        "z": -0.055040422827005386
    },
    {
        "x": 0.335715651512146,
        "y": 0.6180464625358582,
        "z": 0.19589105248451233
    },
    {
        "x": 0.4404958188533783,
        "y": 0.48640865087509155,
        "z": -0.0021675031166523695
    },
    {
        "x": 0.4562285542488098,
        "y": 0.6053029298782349,
        "z": -0.07421423494815826
    },
    {
        "x": 0.3767828941345215,
        "y": 0.7498528361320496,
        "z": 0.10555032640695572
    },
    {
        "x": 0.3820750117301941,
        "y": 0.7658951282501221,
        "z": 0.14163267612457275
    },
    {
        "x": 0.32288816571235657,
        "y": 0.5739083290100098,
        "z": 0.1300906538963318
    },
    {
        "x": 0.35851770639419556,
        "y": 0.7147011160850525,
        "z": 0.1227555200457573
    },
    {
        "x": 0.3198613226413727,
        "y": 0.4365865886211395,
        "z": 0.07610195130109787
    },
    {
        "x": 0.43759360909461975,
        "y": 0.8365337252616882,
        "z": 0.062024977058172226
    },
    {
        "x": 0.4808221161365509,
        "y": 0.6656891107559204,
        "z": -0.05015932768583298
    },
    {
        "x": 0.42895248532295227,
        "y": 0.592415452003479,
        "z": -0.012175772339105606
    },
    {
        "x": 0.32723379135131836,
        "y": 0.4872662127017975,
        "z": 0.060622669756412506
    },
    {
        "x": 0.3882162272930145,
        "y": 0.491960346698761,
        "z": 0.0018624347867444158
    },
    {
        "x": 0.4030100703239441,
        "y": 0.4940745234489441,
        "z": -0.0029495572671294212
    },
    {
        "x": 0.43429458141326904,
        "y": 0.7367556691169739,
        "z": 0.024041419848799706
    },
    {
        "x": 0.3384573459625244,
        "y": 0.6243404150009155,
        "z": 0.08122575283050537
    },
    {
        "x": 0.46757712960243225,
        "y": 0.8660715222358704,
        "z": 0.07081633806228638
    },
    {
        "x": 0.4228544235229492,
        "y": 0.8269395232200623,
        "z": 0.10166702419519424
    },
    {
        "x": 0.4041215777397156,
        "y": 0.8018620014190674,
        "z": 0.11898007988929749
    },
    {
        "x": 0.4818187654018402,
        "y": 0.3509710133075714,
        "z": -0.07416030019521713
    },
    {
        "x": 0.5006246566772461,
        "y": 0.8714067935943604,
        "z": 0.06450597196817398
    },
    {
        "x": 0.4170222282409668,
        "y": 0.49245890974998474,
        "z": -0.004854128696024418
    },
    {
        "x": 0.42994144558906555,
        "y": 0.48884350061416626,
        "z": -0.003940608352422714
    },
    {
        "x": 0.4374837875366211,
        "y": 0.48759743571281433,
        "z": -0.0016559658106416464
    },
    {
        "x": 0.3289092481136322,
        "y": 0.44984856247901917,
        "z": 0.03764646500349045
    },
    {
        "x": 0.4248200058937073,
        "y": 0.4664704203605652,
        "z": -0.009088007733225822
    },
    {
        "x": 0.4098712205886841,
        "y": 0.457741916179657,
        "z": -0.011622942052781582
    },
    {
        "x": 0.3941086530685425,
        "y": 0.45592767000198364,
        "z": -0.009843094274401665
    },
    {
        "x": 0.37903422117233276,
        "y": 0.4598580300807953,
        "z": -0.004355231765657663
    },
    {
        "x": 0.37088561058044434,
        "y": 0.46686509251594543,
        "z": 0.002366387750953436
    },
    {
        "x": 0.31357383728027344,
        "y": 0.41710489988327026,
        "z": 0.1207059994339943
    },
    {
        "x": 0.37783050537109375,
        "y": 0.4877767562866211,
        "z": 0.007456480525434017
    },
    {
        "x": 0.48936450481414795,
        "y": 0.6837039589881897,
        "z": -0.031174292787909508
    },
    {
        "x": 0.43845853209495544,
        "y": 0.6852109432220459,
        "z": -0.010092542506754398
    },
    {
        "x": 0.44810983538627625,
        "y": 0.6468294262886047,
        "z": -0.04082861542701721
    },
    {
        "x": 0.4673621654510498,
        "y": 0.6842700242996216,
        "z": -0.02796517312526703
    },
    {
        "x": 0.48550134897232056,
        "y": 0.47433269023895264,
        "z": -0.054905589669942856
    },
    {
        "x": 0.3970831334590912,
        "y": 0.7829651832580566,
        "z": 0.09314534068107605
    },
    {
        "x": 0.41647547483444214,
        "y": 0.809760332107544,
        "z": 0.07901442795991898
    },
    {
        "x": 0.4647030532360077,
        "y": 0.8563272953033447,
        "z": 0.046518731862306595
    },
    {
        "x": 0.3649635910987854,
        "y": 0.7261261940002441,
        "z": 0.168707937002182
    },
    {
        "x": 0.43547874689102173,
        "y": 0.47870516777038574,
        "z": -0.005322686862200499
    },
    {
        "x": 0.45952340960502625,
        "y": 0.5529062151908875,
        "z": -0.05137285962700844
    },
    {
        "x": 0.4990449547767639,
        "y": 0.8616461753845215,
        "z": 0.04104435443878174
    },
    {
        "x": 0.4430810213088989,
        "y": 0.8496968746185303,
        "z": 0.08338314294815063
    },
    {
        "x": 0.3314317464828491,
        "y": 0.6224156618118286,
        "z": 0.1371021568775177
    },
    {
        "x": 0.4629804790019989,
        "y": 0.7355297803878784,
        "z": 0.00243212073110044
    },
    {
        "x": 0.4606483578681946,
        "y": 0.7413126230239868,
        "z": 0.0005406116833910346
    },
    {
        "x": 0.4585524797439575,
        "y": 0.7499690651893616,
        "z": -0.00010281314462190494
    },
    {
        "x": 0.457124263048172,
        "y": 0.7614937424659729,
        "z": 0.0042439913377165794
    },
    {
        "x": 0.453998863697052,
        "y": 0.7770671844482422,
        "z": 0.02094017155468464
    },
    {
        "x": 0.44156593084335327,
        "y": 0.7277461290359497,
        "z": 0.01632874831557274
    },
    {
        "x": 0.43659186363220215,
        "y": 0.7260830402374268,
        "z": 0.016423135995864868
    },
    {
        "x": 0.43181923031806946,
        "y": 0.7224037647247314,
        "z": 0.0159646887332201
    },
    {
        "x": 0.4153214693069458,
        "y": 0.7082292437553406,
        "z": 0.017515314742922783
    },
    {
        "x": 0.357045441865921,
        "y": 0.6442418098449707,
        "z": 0.046707503497600555
    },
    {
        "x": 0.4599679410457611,
        "y": 0.524421751499176,
        "z": -0.039722952991724014
    },
    {
        "x": 0.45162978768348694,
        "y": 0.4744735360145569,
        "z": -0.018364787101745605
    },
    {
        "x": 0.4419301748275757,
        "y": 0.47574689984321594,
        "z": -0.010524020530283451
    },
    {
        "x": 0.44521287083625793,
        "y": 0.7248232364654541,
        "z": 0.018162531778216362
    },
    {
        "x": 0.3601876497268677,
        "y": 0.691666841506958,
        "z": 0.08300559967756271
    },
    {
        "x": 0.4643762707710266,
        "y": 0.4769012928009033,
        "z": -0.041071321815252304
    },
    {
        "x": 0.44572049379348755,
        "y": 0.7961577773094177,
        "z": 0.03513849899172783
    },
    {
        "x": 0.48444077372550964,
        "y": 0.5678372383117676,
        "z": -0.08198083937168121
    },
    {
        "x": 0.4698108732700348,
        "y": 0.5432831645011902,
        "z": -0.06639369577169418
    },
    {
        "x": 0.48488327860832214,
        "y": 0.5390651226043701,
        "z": -0.07184110581874847
    },
    {
        "x": 0.4498618543148041,
        "y": 0.589849591255188,
        "z": -0.04425347223877907
    },
    {
        "x": 0.4978271424770355,
        "y": 0.8421003222465515,
        "z": 0.027264023199677467
    },
    {
        "x": 0.4967636168003082,
        "y": 0.813922643661499,
        "z": 0.021937964484095573
    },
    {
        "x": 0.47042417526245117,
        "y": 0.8113791942596436,
        "z": 0.02657635509967804
    },
    {
        "x": 0.4093703031539917,
        "y": 0.751166582107544,
        "z": 0.04713898524641991
    },
    {
        "x": 0.4221895635128021,
        "y": 0.6425547003746033,
        "z": -0.0011992057552561164
    },
    {
        "x": 0.42616158723831177,
        "y": 0.776268720626831,
        "z": 0.04250059276819229
    },
    {
        "x": 0.3865348696708679,
        "y": 0.634663462638855,
        "z": 0.008063246496021748
    },
    {
        "x": 0.4087439477443695,
        "y": 0.6631489992141724,
        "z": 0.006863198708742857
    },
    {
        "x": 0.37640708684921265,
        "y": 0.6667224168777466,
        "z": 0.028935998678207397
    },
    {
        "x": 0.4656466245651245,
        "y": 0.8373294472694397,
        "z": 0.03300807625055313
    },
    {
        "x": 0.44216108322143555,
        "y": 0.5991523265838623,
        "z": -0.028962967917323112
    },
    {
        "x": 0.39813458919525146,
        "y": 0.7639659643173218,
        "z": 0.067957803606987
    },
    {
        "x": 0.4182901084423065,
        "y": 0.7919021844863892,
        "z": 0.06051480397582054
    },
    {
        "x": 0.39580264687538147,
        "y": 0.7242977023124695,
        "z": 0.04446921497583389
    },
    {
        "x": 0.3457264304161072,
        "y": 0.6604942083358765,
        "z": 0.09438583254814148
    },
    {
        "x": 0.37852591276168823,
        "y": 0.721927285194397,
        "z": 0.0629958063364029
    },
    {
        "x": 0.3421162962913513,
        "y": 0.6685945987701416,
        "z": 0.13893595337867737
    },
    {
        "x": 0.39857110381126404,
        "y": 0.6888799071311951,
        "z": 0.020562628284096718
    },
    {
        "x": 0.45076242089271545,
        "y": 0.5648113489151001,
        "z": -0.03575874865055084
    },
    {
        "x": 0.450246661901474,
        "y": 0.6439257860183716,
        "z": -0.062294650822877884
    },
    {
        "x": 0.4416216015815735,
        "y": 0.6446101665496826,
        "z": -0.041772473603487015
    },
    {
        "x": 0.45555803179740906,
        "y": 0.6323519349098206,
        "z": -0.07674916833639145
    },
    {
        "x": 0.4368353486061096,
        "y": 0.4571131467819214,
        "z": -0.025956105440855026
    },
    {
        "x": 0.40914011001586914,
        "y": 0.44595688581466675,
        "z": -0.02904387004673481
    },
    {
        "x": 0.3859266936779022,
        "y": 0.44308626651763916,
        "z": -0.025807783007621765
    },
    {
        "x": 0.3675958514213562,
        "y": 0.4441811442375183,
        "z": -0.016598423942923546
    },
    {
        "x": 0.35609734058380127,
        "y": 0.4503675699234009,
        "z": -0.004250733647495508
    },
    {
        "x": 0.35168224573135376,
        "y": 0.48177891969680786,
        "z": 0.028504522517323494
    },
    {
        "x": 0.3173708915710449,
        "y": 0.526225745677948,
        "z": 0.11779352277517319
    },
    {
        "x": 0.3650914430618286,
        "y": 0.5167044401168823,
        "z": 0.01992889493703842
    },
    {
        "x": 0.38198384642601013,
        "y": 0.5256959795951843,
        "z": 0.009323972277343273
    },
    {
        "x": 0.40345299243927,
        "y": 0.5259997248649597,
        "z": 0.001114089973270893
    },
    {
        "x": 0.4232632517814636,
        "y": 0.5205711722373962,
        "z": -0.0037754334043711424
    },
    {
        "x": 0.43767207860946655,
        "y": 0.5140601992607117,
        "z": -0.007180065382272005
    },
    {
        "x": 0.44755470752716064,
        "y": 0.5081819295883179,
        "z": -0.009923996403813362
    },
    {
        "x": 0.3218151926994324,
        "y": 0.5140876173973083,
        "z": 0.1813286691904068
    },
    {
        "x": 0.44315624237060547,
        "y": 0.6480427384376526,
        "z": -0.032603565603494644
    },
    {
        "x": 0.45905837416648865,
        "y": 0.5785142779350281,
        "z": -0.06035299971699715
    },
    {
        "x": 0.460640549659729,
        "y": 0.6492598652839661,
        "z": -0.07594014704227448
    },
    {
        "x": 0.47062551975250244,
        "y": 0.6577634811401367,
        "z": -0.06768812984228134
    },
    {
        "x": 0.46151167154312134,
        "y": 0.6503995060920715,
        "z": -0.06720271706581116
    },
    {
        "x": 0.44815897941589355,
        "y": 0.6537327766418457,
        "z": -0.02596958912909031
    },
    {
        "x": 0.4732408821582794,
        "y": 0.6614700555801392,
        "z": -0.072056844830513
    },
    {
        "x": 0.4758419096469879,
        "y": 0.6631631255149841,
        "z": -0.050617776811122894
    },
    {
        "x": 0.4459135830402374,
        "y": 0.4897921085357666,
        "z": -0.004948514513671398
    },
    {
        "x": 0.45502743124961853,
        "y": 0.4971560835838318,
        "z": -0.015250054188072681
    },
    {
        "x": 0.45939117670059204,
        "y": 0.5040048360824585,
        "z": -0.026643773540854454
    },
    {
        "x": 0.3667137026786804,
        "y": 0.47180816531181335,
        "z": 0.008825075812637806
    },
    {
        "x": 0.36009299755096436,
        "y": 0.466138631105423,
        "z": 0.009000363759696484
    },
    {
        "x": 0.4993424713611603,
        "y": 0.5699500441551208,
        "z": -0.07696490734815598
    },
    {
        "x": 0.613013744354248,
        "y": 0.4750208854675293,
        "z": -0.00472266273573041
    },
    {
        "x": 0.5025637149810791,
        "y": 0.6587978005409241,
        "z": -0.05288303643465042
    },
    {
        "x": 0.6756685972213745,
        "y": 0.36606618762016296,
        "z": 0.05005146190524101
    },
    {
        "x": 0.5605539083480835,
        "y": 0.5007114410400391,
        "z": -0.016396168619394302
    },
    {
        "x": 0.5778183937072754,
        "y": 0.5013560056686401,
        "z": -0.01609952747821808
    },
    {
        "x": 0.594635009765625,
        "y": 0.49970489740371704,
        "z": -0.01296456903219223
    },
    {
        "x": 0.6182445287704468,
        "y": 0.4824340045452118,
        "z": -0.0012514550471678376
    },
    {
        "x": 0.5465008020401001,
        "y": 0.4965742230415344,
        "z": -0.014252261258661747
    },
    {
        "x": 0.5868970155715942,
        "y": 0.44313278794288635,
        "z": -0.03103945590555668
    },
    {
        "x": 0.5672840476036072,
        "y": 0.4459698796272278,
        "z": -0.030365271493792534
    },
    {
        "x": 0.6041697263717651,
        "y": 0.4449279308319092,
        "z": -0.02615836076438427
    },
    {
        "x": 0.615864098072052,
        "y": 0.4511086046695709,
        "z": -0.019510900601744652
    },
    {
        "x": 0.6312926411628723,
        "y": 0.49693983793258667,
        "z": 0.008568884804844856
    },
    {
        "x": 0.5593496561050415,
        "y": 0.8165827989578247,
        "z": 0.03956114873290062
    },
    {
        "x": 0.6202912330627441,
        "y": 0.4668741822242737,
        "z": -0.0006413180381059647
    },
    {
        "x": 0.6828650236129761,
        "y": 0.4678085744380951,
        "z": 0.07653342932462692
    },
    {
        "x": 0.6514299511909485,
        "y": 0.4768362045288086,
        "z": 0.02103455737233162
    },
    {
        "x": 0.5738194584846497,
        "y": 0.6064043045043945,
        "z": -0.015088249929249287
    },
    {
        "x": 0.5111441612243652,
        "y": 0.7124825716018677,
        "z": -0.02961018495261669
    },
    {
        "x": 0.5095595717430115,
        "y": 0.732351541519165,
        "z": -0.01796027645468712
    },
    {
        "x": 0.5331710577011108,
        "y": 0.7153682708740234,
        "z": -0.020306438207626343
    },
    {
        "x": 0.5470064282417297,
        "y": 0.7192205190658569,
        "z": -0.007935152389109135
    },
    {
        "x": 0.5250797867774963,
        "y": 0.7304291725158691,
        "z": -0.01274882908910513
    },
    {
        "x": 0.5373661518096924,
        "y": 0.72883540391922,
        "z": -0.0015725353732705116
    },
    {
        "x": 0.5702675580978394,
        "y": 0.7439531087875366,
        "z": 0.02462122030556202
    },
    {
        "x": 0.4990813136100769,
        "y": 0.6545268893241882,
        "z": -0.08575627207756042
    },
    {
        "x": 0.5006474852561951,
        "y": 0.6320692300796509,
        "z": -0.09433189779520035
    },
    {
        "x": 0.6415694952011108,
        "y": 0.42518121004104614,
        "z": -0.021708743646740913
    },
    {
        "x": 0.5395344495773315,
        "y": 0.5484420657157898,
        "z": -0.026185326278209686
    },
    {
        "x": 0.5403621792793274,
        "y": 0.6344434022903442,
        "z": -0.04700414463877678
    },
    {
        "x": 0.5415500998497009,
        "y": 0.6194698214530945,
        "z": -0.04366019368171692
    },
    {
        "x": 0.6246538162231445,
        "y": 0.5948299169540405,
        "z": 0.0017815326573327184
    },
    {
        "x": 0.4997669756412506,
        "y": 0.5992865562438965,
        "z": -0.08877662569284439
    },
    {
        "x": 0.6002587080001831,
        "y": 0.4107452630996704,
        "z": -0.051076218485832214
    },
    {
        "x": 0.624656617641449,
        "y": 0.41331326961517334,
        "z": -0.039021801203489304
    },
    {
        "x": 0.6585919857025146,
        "y": 0.33118706941604614,
        "z": 0.010921789333224297
    },
    {
        "x": 0.5227895975112915,
        "y": 0.438909649848938,
        "z": -0.057871997356414795
    },
    {
        "x": 0.5507322549819946,
        "y": 0.4545215666294098,
        "z": -0.023353751748800278
    },
    {
        "x": 0.5819811820983887,
        "y": 0.722517728805542,
        "z": 0.02359645813703537
    },
    {
        "x": 0.6653218865394592,
        "y": 0.6705467104911804,
        "z": 0.1661190688610077
    },
    {
        "x": 0.5285933017730713,
        "y": 0.6481125950813293,
        "z": -0.03775433450937271
    },
    {
        "x": 0.5148438811302185,
        "y": 0.6563411355018616,
        "z": -0.03648686781525612
    },
    {
        "x": 0.5636605620384216,
        "y": 0.7250508069992065,
        "z": 0.022167187184095383
    },
    {
        "x": 0.5561079978942871,
        "y": 0.7248587012290955,
        "z": 0.018027694895863533
    },
    {
        "x": 0.634452223777771,
        "y": 0.39521026611328125,
        "z": -0.034707020968198776
    },
    {
        "x": 0.5414919853210449,
        "y": 0.6416206955909729,
        "z": -0.035812683403491974
    },
    {
        "x": 0.5668666958808899,
        "y": 0.41764014959335327,
        "z": -0.058195605874061584
    },
    {
        "x": 0.5695289373397827,
        "y": 0.3976137638092041,
        "z": -0.06558467447757721
    },
    {
        "x": 0.5851675271987915,
        "y": 0.2910517752170563,
        "z": -0.056955110281705856
    },
    {
        "x": 0.6458733677864075,
        "y": 0.3629911541938782,
        "z": -0.015951206907629967
    },
    {
        "x": 0.5749719142913818,
        "y": 0.3438953757286072,
        "z": -0.06326548010110855
    },
    {
        "x": 0.6518241763114929,
        "y": 0.41095590591430664,
        "z": -0.010186928324401379
    },
    {
        "x": 0.6633272171020508,
        "y": 0.390242338180542,
        "z": 0.017434412613511086
    },
    {
        "x": 0.5108007192611694,
        "y": 0.7248564958572388,
        "z": -0.025672947987914085
    },
    {
        "x": 0.5287103652954102,
        "y": 0.7252053022384644,
        "z": -0.01712428778409958
    },
    {
        "x": 0.5420835614204407,
        "y": 0.7247484922409058,
        "z": -0.0059968712739646435
    },
    {
        "x": 0.5245189666748047,
        "y": 0.651616096496582,
        "z": -0.033385615795850754
    },
    {
        "x": 0.5595637559890747,
        "y": 0.7253903150558472,
        "z": 0.019847992807626724
    },
    {
        "x": 0.5522739887237549,
        "y": 0.7318111658096313,
        "z": 0.011993742547929287
    },
    {
        "x": 0.5545876622200012,
        "y": 0.7234395742416382,
        "z": 0.017474863678216934
    },
    {
        "x": 0.5186614990234375,
        "y": 0.6470875144004822,
        "z": -0.06288792937994003
    },
    {
        "x": 0.5345453023910522,
        "y": 0.7265698313713074,
        "z": 0.0016222565900534391
    },
    {
        "x": 0.5222712159156799,
        "y": 0.7298893928527832,
        "z": -0.005170995369553566
    },
    {
        "x": 0.5080556273460388,
        "y": 0.7332335710525513,
        "z": -0.010139735415577888
    },
    {
        "x": 0.5175051689147949,
        "y": 0.7877703309059143,
        "z": 0.01507476530969143
    },
    {
        "x": 0.5143580436706543,
        "y": 0.769974946975708,
        "z": -0.005427185911685228
    },
    {
        "x": 0.5125462412834167,
        "y": 0.7579159736633301,
        "z": -0.009816126897931099
    },
    {
        "x": 0.5109542608261108,
        "y": 0.746429443359375,
        "z": -0.00816437415778637
    },
    {
        "x": 0.5093827247619629,
        "y": 0.7378193736076355,
        "z": -0.006650830619037151
    },
    {
        "x": 0.5373824834823608,
        "y": 0.7311365604400635,
        "z": 0.004267588257789612
    },
    {
        "x": 0.5397780537605286,
        "y": 0.7342705726623535,
        "z": 0.0025096519384533167
    },
    {
        "x": 0.543268620967865,
        "y": 0.7396920323371887,
        "z": 0.0019079422345384955
    },
    {
        "x": 0.5465536713600159,
        "y": 0.746554434299469,
        "z": 0.006006984040141106
    },
    {
        "x": 0.5606247782707214,
        "y": 0.6925830841064453,
        "z": -0.006903649773448706
    },
    {
        "x": 0.6834831833839417,
        "y": 0.5546755790710449,
        "z": 0.1661190688610077
    },
    {
        "x": 0.5453440546989441,
        "y": 0.7281591892242432,
        "z": 0.01216903142631054
    },
    {
        "x": 0.5483744740486145,
        "y": 0.7295591831207275,
        "z": 0.011292590759694576
    },
    {
        "x": 0.5093106627464294,
        "y": 0.6670547127723694,
        "z": -0.03451824560761452
    },
    {
        "x": 0.5364004373550415,
        "y": 0.6537670493125916,
        "z": -0.02033340558409691
    },
    {
        "x": 0.5118646621704102,
        "y": 0.6621321439743042,
        "z": -0.03624416142702103
    },
    {
        "x": 0.5566548109054565,
        "y": 0.5591567158699036,
        "z": -0.018863683566451073
    },
    {
        "x": 0.5847999453544617,
        "y": 0.5728962421417236,
        "z": -0.013234241865575314
    },
    {
        "x": 0.5448392629623413,
        "y": 0.626907467842102,
        "z": -0.032603565603494644
    },
    {
        "x": 0.6299294233322144,
        "y": 0.3053721785545349,
        "z": -0.026414550840854645
    },
    {
        "x": 0.617705762386322,
        "y": 0.34608757495880127,
        "z": -0.041907310485839844
    },
    {
        "x": 0.6061496734619141,
        "y": 0.3896712064743042,
        "z": -0.052667297422885895
    },
    {
        "x": 0.5563638210296631,
        "y": 0.7608135938644409,
        "z": 0.02015811763703823
    },
    {
        "x": 0.5275323390960693,
        "y": 0.4080694913864136,
        "z": -0.07043880224227905
    },
    {
        "x": 0.5309845805168152,
        "y": 0.34747233986854553,
        "z": -0.07356701791286469
    },
    {
        "x": 0.5365869998931885,
        "y": 0.285841166973114,
        "z": -0.07238045334815979
    },
    {
        "x": 0.609906792640686,
        "y": 0.49318307638168335,
        "z": -0.0070115188136696815
    },
    {
        "x": 0.6495224237442017,
        "y": 0.5119554400444031,
        "z": 0.019335612654685974
    },
    {
        "x": 0.5378409028053284,
        "y": 0.49236878752708435,
        "z": -0.012290384620428085
    },
    {
        "x": 0.6335723400115967,
        "y": 0.4534735679626465,
        "z": -0.006408124230802059
    },
    {
        "x": 0.5273635387420654,
        "y": 0.5359387397766113,
        "z": -0.0338979996740818
    },
    {
        "x": 0.5295531749725342,
        "y": 0.631415843963623,
        "z": -0.06461384892463684
    },
    {
        "x": 0.6677214503288269,
        "y": 0.5226565003395081,
        "z": 0.039534181356430054
    },
    {
        "x": 0.6371574997901917,
        "y": 0.5328237414360046,
        "z": 0.007935152389109135
    },
    {
        "x": 0.6145980358123779,
        "y": 0.5460540652275085,
        "z": -0.004759742878377438
    },
    {
        "x": 0.5813633799552917,
        "y": 0.5447485446929932,
        "z": -0.01077346969395876
    },
    {
        "x": 0.5575697422027588,
        "y": 0.5361319780349731,
        "z": -0.014279228635132313
    },
    {
        "x": 0.5404657125473022,
        "y": 0.5277183651924133,
        "z": -0.01987496018409729
    },
    {
        "x": 0.5023826956748962,
        "y": 0.5120909214019775,
        "z": -0.05593034625053406
    },
    {
        "x": 0.6641964912414551,
        "y": 0.5730424523353577,
        "z": 0.04352535307407379
    },
    {
        "x": 0.6477695107460022,
        "y": 0.44754067063331604,
        "z": -0.0007154783234000206
    },
    {
        "x": 0.49461856484413147,
        "y": 0.6640762686729431,
        "z": -0.07561653852462769
    },
    {
        "x": 0.5373538136482239,
        "y": 0.5755101442337036,
        "z": -0.028747228905558586
    },
    {
        "x": 0.6883798837661743,
        "y": 0.45450618863105774,
        "z": 0.13138508796691895
    },
    {
        "x": 0.5272366404533386,
        "y": 0.518105149269104,
        "z": -0.02382568083703518
    },
    {
        "x": 0.5467644333839417,
        "y": 0.6245818138122559,
        "z": -0.015155667439103127
    },
    {
        "x": 0.6246140599250793,
        "y": 0.46797019243240356,
        "z": 0.0024152661208063364
    },
    {
        "x": 0.530285120010376,
        "y": 0.6129960417747498,
        "z": -0.06046086549758911
    },
    {
        "x": 0.6774104833602905,
        "y": 0.6108471155166626,
        "z": 0.17043384909629822
    },
    {
        "x": 0.5388540625572205,
        "y": 0.4831506609916687,
        "z": -0.009903770871460438
    },
    {
        "x": 0.5155500173568726,
        "y": 0.6039771437644958,
        "z": -0.078205406665802
    },
    {
        "x": 0.6287588477134705,
        "y": 0.747240424156189,
        "z": 0.08785972744226456
    },
    {
        "x": 0.6288734674453735,
        "y": 0.7633482813835144,
        "z": 0.12351060658693314
    },
    {
        "x": 0.680968165397644,
        "y": 0.5650633573532104,
        "z": 0.10409408807754517
    },
    {
        "x": 0.6483460068702698,
        "y": 0.7104592323303223,
        "z": 0.1019366979598999
    },
    {
        "x": 0.6734973788261414,
        "y": 0.4247773289680481,
        "z": 0.050752609968185425
    },
    {
        "x": 0.5635877251625061,
        "y": 0.8360904455184937,
        "z": 0.05385386198759079
    },
    {
        "x": 0.49376380443573,
        "y": 0.6652377247810364,
        "z": -0.05091441422700882
    },
    {
        "x": 0.5527729392051697,
        "y": 0.589698314666748,
        "z": -0.020279470831155777
    },
    {
        "x": 0.6661016345024109,
        "y": 0.47693824768066406,
        "z": 0.03699924796819687
    },
    {
        "x": 0.5936717987060547,
        "y": 0.48562151193618774,
        "z": -0.0126342186704278
    },
    {
        "x": 0.5783734321594238,
        "y": 0.4884040355682373,
        "z": -0.015708500519394875
    },
    {
        "x": 0.5568288564682007,
        "y": 0.7352055311203003,
        "z": 0.015317472629249096
    },
    {
        "x": 0.6601991653442383,
        "y": 0.617681086063385,
        "z": 0.05868101865053177
    },
    {
        "x": 0.5346730947494507,
        "y": 0.8657980561256409,
        "z": 0.06639369577169418
    },
    {
        "x": 0.5835809707641602,
        "y": 0.8260568976402283,
        "z": 0.09001711755990982
    },
    {
        "x": 0.6045423150062561,
        "y": 0.800477147102356,
        "z": 0.10436376929283142
    },
    {
        "x": 0.5636956691741943,
        "y": 0.4874390661716461,
        "z": -0.01577591896057129
    },
    {
        "x": 0.5500842928886414,
        "y": 0.48473459482192993,
        "z": -0.013139856979250908
    },
    {
        "x": 0.5420961380004883,
        "y": 0.4839726686477661,
        "z": -0.010092542506754398
    },
    {
        "x": 0.6602193713188171,
        "y": 0.43860939145088196,
        "z": 0.01436013076454401
    },
    {
        "x": 0.5546665787696838,
        "y": 0.4616634249687195,
        "z": -0.018971553072333336
    },
    {
        "x": 0.5701274275779724,
        "y": 0.451399564743042,
        "z": -0.023057110607624054
    },
    {
        "x": 0.5862907767295837,
        "y": 0.4488937556743622,
        "z": -0.023205433040857315
    },
    {
        "x": 0.6020635366439819,
        "y": 0.45214617252349854,
        "z": -0.019659221172332764
    },
    {
        "x": 0.6113870143890381,
        "y": 0.4586445689201355,
        "z": -0.013928652741014957
    },
    {
        "x": 0.6845730543136597,
        "y": 0.4046444892883301,
        "z": 0.09336107224225998
    },
    {
        "x": 0.604854941368103,
        "y": 0.48058971762657166,
        "z": -0.008373372256755829
    },
    {
        "x": 0.5448110103607178,
        "y": 0.683577835559845,
        "z": -0.016733258962631226
    },
    {
        "x": 0.5285789370536804,
        "y": 0.6460990905761719,
        "z": -0.0453321672976017
    },
    {
        "x": 0.5122338533401489,
        "y": 0.6837023496627808,
        "z": -0.030742814764380455
    },
    {
        "x": 0.6074274778366089,
        "y": 0.7814548015594482,
        "z": 0.07879868894815445
    },
    {
        "x": 0.5864783525466919,
        "y": 0.8087603449821472,
        "z": 0.0677959993481636
    },
    {
        "x": 0.534603476524353,
        "y": 0.8560183644294739,
        "z": 0.04231182113289833
    },
    {
        "x": 0.6484278440475464,
        "y": 0.7219647765159607,
        "z": 0.14691829681396484
    },
    {
        "x": 0.5437585115432739,
        "y": 0.47503402829170227,
        "z": -0.014063488692045212
    },
    {
        "x": 0.5143125057220459,
        "y": 0.5513501167297363,
        "z": -0.05528312921524048
    },
    {
        "x": 0.5608773827552795,
        "y": 0.8493573069572449,
        "z": 0.07480751723051071
    },
    {
        "x": 0.674420952796936,
        "y": 0.6151999235153198,
        "z": 0.1121843010187149
    },
    {
        "x": 0.5244632959365845,
        "y": 0.7347519993782043,
        "z": -0.00219952710904181
    },
    {
        "x": 0.5270929932594299,
        "y": 0.7404720187187195,
        "z": -0.004092299845069647
    },
    {
        "x": 0.5297431349754333,
        "y": 0.7490684390068054,
        "z": -0.0048339031636714935
    },
    {
        "x": 0.5321980714797974,
        "y": 0.760543942451477,
        "z": -0.0006859828135930002
    },
    {
        "x": 0.5390002727508545,
        "y": 0.7765671610832214,
        "z": 0.015371407382190228
    },
    {
        "x": 0.5485677123069763,
        "y": 0.726392388343811,
        "z": 0.008225050754845142
    },
    {
        "x": 0.5533034801483154,
        "y": 0.7248941659927368,
        "z": 0.0073823207058012486
    },
    {
        "x": 0.5580229163169861,
        "y": 0.7210948467254639,
        "z": 0.006414865609258413
    },
    {
        "x": 0.5740962028503418,
        "y": 0.7059328556060791,
        "z": 0.0065025100484490395
    },
    {
        "x": 0.6379107236862183,
        "y": 0.6386749744415283,
        "z": 0.02801910974085331
    },
    {
        "x": 0.5145413279533386,
        "y": 0.5228683948516846,
        "z": -0.043768059462308884
    },
    {
        "x": 0.5243162512779236,
        "y": 0.47154033184051514,
        "z": -0.023677360266447067
    },
    {
        "x": 0.5357560515403748,
        "y": 0.472258597612381,
        "z": -0.017865890637040138
    },
    {
        "x": 0.5448798537254333,
        "y": 0.7235624194145203,
        "z": 0.010463343933224678
    },
    {
        "x": 0.6404139399528503,
        "y": 0.6872587203979492,
        "z": 0.06375089287757874
    },
    {
        "x": 0.5085926055908203,
        "y": 0.47519123554229736,
        "z": -0.04425347223877907
    },
    {
        "x": 0.5501375794410706,
        "y": 0.7954121828079224,
        "z": 0.02890903316438198
    },
    {
        "x": 0.5010895729064941,
        "y": 0.5425997972488403,
        "z": -0.06844321638345718
    },
    {
        "x": 0.5264396071434021,
        "y": 0.5880178213119507,
        "z": -0.04924244061112404
    },
    {
        "x": 0.524356484413147,
        "y": 0.8106968998908997,
        "z": 0.02365039475262165
    },
    {
        "x": 0.5869196653366089,
        "y": 0.7494957447052002,
        "z": 0.0359475202858448
    },
    {
        "x": 0.5615445971488953,
        "y": 0.6399287581443787,
        "z": -0.009667806327342987
    },
    {
        "x": 0.5707043409347534,
        "y": 0.7750154137611389,
        "z": 0.033682260662317276
    },
    {
        "x": 0.6011732816696167,
        "y": 0.6302221417427063,
        "z": -0.005251897498965263
    },
    {
        "x": 0.5778696537017822,
        "y": 0.6601464152336121,
        "z": -0.003805771702900529
    },
    {
        "x": 0.6160742044448853,
        "y": 0.6625397801399231,
        "z": 0.013766848482191563
    },
    {
        "x": 0.5314440727233887,
        "y": 0.8364970684051514,
        "z": 0.029124772176146507
    },
    {
        "x": 0.5366443991661072,
        "y": 0.5970939993858337,
        "z": -0.03505759686231613
    },
    {
        "x": 0.6018991470336914,
        "y": 0.7625387907028198,
        "z": 0.05477075278759003
    },
    {
        "x": 0.5809541344642639,
        "y": 0.7904196381568909,
        "z": 0.050429001450538635
    },
    {
        "x": 0.5992354154586792,
        "y": 0.7217240929603577,
        "z": 0.03090461902320385
    },
    {
        "x": 0.6557171940803528,
        "y": 0.6548466086387634,
        "z": 0.0729198008775711
    },
    {
        "x": 0.6203585267066956,
        "y": 0.7188678979873657,
        "z": 0.04695020988583565
    },
    {
        "x": 0.6656980514526367,
        "y": 0.6627749800682068,
        "z": 0.11520465463399887
    },
    {
        "x": 0.5918605327606201,
        "y": 0.6858592629432678,
        "z": 0.007854250259697437
    },
    {
        "x": 0.525830090045929,
        "y": 0.5629986524581909,
        "z": -0.041152223944664
    },
    {
        "x": 0.5238124132156372,
        "y": 0.6432827115058899,
        "z": -0.06725664436817169
    },
    {
        "x": 0.5354658961296082,
        "y": 0.6437106728553772,
        "z": -0.047354720532894135
    },
    {
        "x": 0.515960156917572,
        "y": 0.631300151348114,
        "z": -0.08095607906579971
    },
    {
        "x": 0.5379899144172668,
        "y": 0.4526691436767578,
        "z": -0.03319684788584709
    },
    {
        "x": 0.5663699507713318,
        "y": 0.43878981471061707,
        "z": -0.039453279227018356
    },
    {
        "x": 0.5911481380462646,
        "y": 0.43416136503219604,
        "z": -0.03912967070937157
    },
    {
        "x": 0.6118612289428711,
        "y": 0.4343308210372925,
        "z": -0.032927174121141434
    },
    {
        "x": 0.6261413097381592,
        "y": 0.44004732370376587,
        "z": -0.022517764940857887
    },
    {
        "x": 0.6358667612075806,
        "y": 0.47271811962127686,
        "z": 0.00893968716263771
    },
    {
        "x": 0.6845033168792725,
        "y": 0.5161155462265015,
        "z": 0.09093400835990906
    },
    {
        "x": 0.6214570999145508,
        "y": 0.5094338655471802,
        "z": 0.0021068265195935965
    },
    {
        "x": 0.602973997592926,
        "y": 0.5194482803344727,
        "z": -0.006158675532788038
    },
    {
        "x": 0.5798991322517395,
        "y": 0.5208908915519714,
        "z": -0.011515071615576744
    },
    {
        "x": 0.5585091710090637,
        "y": 0.516558825969696,
        "z": -0.013672462664544582
    },
    {
        "x": 0.5427200198173523,
        "y": 0.5110052824020386,
        "z": -0.014737674035131931
    },
    {
        "x": 0.5314632058143616,
        "y": 0.5056820511817932,
        "z": -0.016072560101747513
    },
    {
        "x": 0.6865705251693726,
        "y": 0.5034321546554565,
        "z": 0.15371407568454742
    },
    {
        "x": 0.5352747440338135,
        "y": 0.647165060043335,
        "z": -0.03794310614466667
    },
    {
        "x": 0.5136317610740662,
        "y": 0.5769609212875366,
        "z": -0.06439810991287231
    },
    {
        "x": 0.511339008808136,
        "y": 0.6489061713218689,
        "z": -0.07912229746580124
    },
    {
        "x": 0.5029869675636292,
        "y": 0.6576417684555054,
        "z": -0.06952190399169922
    },
    {
        "x": 0.5117786526679993,
        "y": 0.6500512957572937,
        "z": -0.07038486748933792
    },
    {
        "x": 0.531001091003418,
        "y": 0.6529723405838013,
        "z": -0.030500108376145363
    },
    {
        "x": 0.49999338388442993,
        "y": 0.6614193320274353,
        "z": -0.07345914840698242
    },
    {
        "x": 0.49892494082450867,
        "y": 0.6628711223602295,
        "z": -0.051831308752298355
    },
    {
        "x": 0.5326224565505981,
        "y": 0.4866814911365509,
        "z": -0.011710585094988346
    },
    {
        "x": 0.522324800491333,
        "y": 0.49486640095710754,
        "z": -0.020144633948802948
    },
    {
        "x": 0.5165492296218872,
        "y": 0.5018434524536133,
        "z": -0.030554043129086494
    },
    {
        "x": 0.6165993213653564,
        "y": 0.46346890926361084,
        "z": -0.007921667769551277
    },
    {
        "x": 0.6241027116775513,
        "y": 0.45675769448280334,
        "z": -0.009067782200872898
    }
]

let sadDatabase = [
    {
        "x": 0.4986416697502136,
        "y": 0.6927242279052734,
        "z": -0.06017725169658661
    },
    {
        "x": 0.4938603937625885,
        "y": 0.6041364669799805,
        "z": -0.09895209223031998
    },
    {
        "x": 0.49625298380851746,
        "y": 0.6328914165496826,
        "z": -0.0549219474196434
    },
    {
        "x": 0.4770979881286621,
        "y": 0.5169982314109802,
        "z": -0.0680738091468811
    },
    {
        "x": 0.49277475476264954,
        "y": 0.5762531757354736,
        "z": -0.10363556444644928
    },
    {
        "x": 0.4921257197856903,
        "y": 0.5405279397964478,
        "z": -0.09410523623228073
    },
    {
        "x": 0.4912649989128113,
        "y": 0.4561524987220764,
        "z": -0.03839362785220146
    },
    {
        "x": 0.3667704463005066,
        "y": 0.46527379751205444,
        "z": 0.03910159692168236
    },
    {
        "x": 0.4897475242614746,
        "y": 0.3973363935947418,
        "z": -0.021279873326420784
    },
    {
        "x": 0.4886626601219177,
        "y": 0.3630632758140564,
        "z": -0.02220567874610424
    },
    {
        "x": 0.48519250750541687,
        "y": 0.24209076166152954,
        "z": 0.009789014235138893
    },
    {
        "x": 0.49907565116882324,
        "y": 0.7060850262641907,
        "z": -0.058543477207422256
    },
    {
        "x": 0.49972790479660034,
        "y": 0.7159603834152222,
        "z": -0.05268913134932518
    },
    {
        "x": 0.5001630187034607,
        "y": 0.7203171849250793,
        "z": -0.04473811015486717
    },
    {
        "x": 0.5012514591217041,
        "y": 0.726416826248169,
        "z": -0.04454750195145607
    },
    {
        "x": 0.5016857981681824,
        "y": 0.7368730902671814,
        "z": -0.04822348430752754
    },
    {
        "x": 0.5021198391914368,
        "y": 0.7502337694168091,
        "z": -0.05301588401198387
    },
    {
        "x": 0.5027715563774109,
        "y": 0.7641754150390625,
        "z": -0.05170886591076851
    },
    {
        "x": 0.5040756464004517,
        "y": 0.787411630153656,
        "z": -0.035670675337314606
    },
    {
        "x": 0.49451208114624023,
        "y": 0.6186590194702148,
        "z": -0.09034755825996399
    },
    {
        "x": 0.4792635440826416,
        "y": 0.6186556220054626,
        "z": -0.06507856398820877
    },
    {
        "x": 0.30600494146347046,
        "y": 0.3795779347419739,
        "z": 0.13625654578208923
    },
    {
        "x": 0.41741517186164856,
        "y": 0.4827120304107666,
        "z": 0.017726419493556023
    },
    {
        "x": 0.40042346715927124,
        "y": 0.48648402094841003,
        "z": 0.019047053530812263
    },
    {
        "x": 0.3839767873287201,
        "y": 0.4870612621307373,
        "z": 0.024424882605671883
    },
    {
        "x": 0.36197662353515625,
        "y": 0.47660019993782043,
        "z": 0.04108935222029686
    },
    {
        "x": 0.4320112466812134,
        "y": 0.4745827317237854,
        "z": 0.01910151168704033
    },
    {
        "x": 0.3925893008708954,
        "y": 0.4236002266407013,
        "z": 0.014826475642621517
    },
    {
        "x": 0.41110551357269287,
        "y": 0.4225878119468689,
        "z": 0.014649483375251293
    },
    {
        "x": 0.3757062554359436,
        "y": 0.4294053912162781,
        "z": 0.020476602017879486
    },
    {
        "x": 0.3645954132080078,
        "y": 0.43898773193359375,
        "z": 0.027991950511932373
    },
    {
        "x": 0.3494488000869751,
        "y": 0.4946051836013794,
        "z": 0.04955773428082466
    },
    {
        "x": 0.44067975878715515,
        "y": 0.8315455913543701,
        "z": -0.015874812379479408
    },
    {
        "x": 0.3608895540237427,
        "y": 0.46004438400268555,
        "z": 0.04552776366472244
    },
    {
        "x": 0.30272364616394043,
        "y": 0.4890761971473694,
        "z": 0.13331575691699982
    },
    {
        "x": 0.3297364115715027,
        "y": 0.4800783395767212,
        "z": 0.06981649994850159
    },
    {
        "x": 0.41108423471450806,
        "y": 0.5916286706924438,
        "z": -0.008822365663945675
    },
    {
        "x": 0.4777296781539917,
        "y": 0.6903960108757019,
        "z": -0.05669187009334564
    },
    {
        "x": 0.4827364981174469,
        "y": 0.7174088358879089,
        "z": -0.049285437911748886
    },
    {
        "x": 0.45725157856941223,
        "y": 0.7022997736930847,
        "z": -0.04596344009041786
    },
    {
        "x": 0.4450509548187256,
        "y": 0.7165290713310242,
        "z": -0.03371015191078186
    },
    {
        "x": 0.46814095973968506,
        "y": 0.7214717864990234,
        "z": -0.04209684208035469
    },
    {
        "x": 0.4568127989768982,
        "y": 0.7269878387451172,
        "z": -0.030415380373597145
    },
    {
        "x": 0.425658255815506,
        "y": 0.7583492994308472,
        "z": -0.010633129626512527
    },
    {
        "x": 0.4790474772453308,
        "y": 0.6047140955924988,
        "z": -0.0968826487660408
    },
    {
        "x": 0.47556543350219727,
        "y": 0.5782824754714966,
        "z": -0.10107599943876266
    },
    {
        "x": 0.3364972472190857,
        "y": 0.4174882769584656,
        "z": 0.03675985708832741
    },
    {
        "x": 0.4422434866428375,
        "y": 0.522508978843689,
        "z": -0.007848910987377167
    },
    {
        "x": 0.44005492329597473,
        "y": 0.6035435199737549,
        "z": -0.04944881424307823
    },
    {
        "x": 0.4387497007846832,
        "y": 0.5893113017082214,
        "z": -0.04310433939099312
    },
    {
        "x": 0.361417293548584,
        "y": 0.5939411520957947,
        "z": 0.0162968710064888
    },
    {
        "x": 0.4762231409549713,
        "y": 0.5448811054229736,
        "z": -0.08773352950811386
    },
    {
        "x": 0.375929594039917,
        "y": 0.38583824038505554,
        "z": 0.00474134087562561
    },
    {
        "x": 0.3520750403404236,
        "y": 0.3975960314273834,
        "z": 0.019401036202907562
    },
    {
        "x": 0.3191900849342346,
        "y": 0.3315117061138153,
        "z": 0.10287314653396606
    },
    {
        "x": 0.45315131545066833,
        "y": 0.39529508352279663,
        "z": -0.01379175391048193
    },
    {
        "x": 0.42766034603118896,
        "y": 0.4281100034713745,
        "z": 0.01941465213894844
    },
    {
        "x": 0.41237306594848633,
        "y": 0.7362722158432007,
        "z": -0.00334923155605793
    },
    {
        "x": 0.33449795842170715,
        "y": 0.7255082130432129,
        "z": 0.16043636202812195
    },
    {
        "x": 0.4535590708255768,
        "y": 0.6171976327896118,
        "z": -0.0435672365128994
    },
    {
        "x": 0.46837112307548523,
        "y": 0.6235908269882202,
        "z": -0.04792396351695061
    },
    {
        "x": 0.4321959912776947,
        "y": 0.737438440322876,
        "z": -0.006402342114597559
    },
    {
        "x": 0.43982064723968506,
        "y": 0.7342451810836792,
        "z": -0.01178357657045126
    },
    {
        "x": 0.3420565128326416,
        "y": 0.38220006227493286,
        "z": 0.03036091849207878
    },
    {
        "x": 0.44070690870285034,
        "y": 0.6157425045967102,
        "z": -0.04021800681948662
    },
    {
        "x": 0.40871432423591614,
        "y": 0.38265061378479004,
        "z": -0.006609966978430748
    },
    {
        "x": 0.40436023473739624,
        "y": 0.36173737049102783,
        "z": -0.008475189097225666
    },
    {
        "x": 0.38465845584869385,
        "y": 0.2632710039615631,
        "z": 0.03463595360517502
    },
    {
        "x": 0.3308413326740265,
        "y": 0.355185866355896,
        "z": 0.06170210242271423
    },
    {
        "x": 0.39608898758888245,
        "y": 0.3098905384540558,
        "z": 0.011865265667438507
    },
    {
        "x": 0.32626020908355713,
        "y": 0.40746551752090454,
        "z": 0.05451350659132004
    },
    {
        "x": 0.31613248586654663,
        "y": 0.3942478597164154,
        "z": 0.09301605075597763
    },
    {
        "x": 0.4799060523509979,
        "y": 0.7060807347297668,
        "z": -0.05516701564192772
    },
    {
        "x": 0.46334949135780334,
        "y": 0.7142095565795898,
        "z": -0.045146554708480835
    },
    {
        "x": 0.4509318172931671,
        "y": 0.7223392724990845,
        "z": -0.03379184007644653
    },
    {
        "x": 0.4585687518119812,
        "y": 0.621555507183075,
        "z": -0.041034892201423645
    },
    {
        "x": 0.4363349974155426,
        "y": 0.736568033695221,
        "z": -0.009196772240102291
    },
    {
        "x": 0.44265204668045044,
        "y": 0.7380216717720032,
        "z": -0.021919768303632736
    },
    {
        "x": 0.4415636360645294,
        "y": 0.7319219708442688,
        "z": -0.012532388791441917
    },
    {
        "x": 0.4616203308105469,
        "y": 0.6067432761192322,
        "z": -0.06867286562919617
    },
    {
        "x": 0.46051621437072754,
        "y": 0.7252459526062012,
        "z": -0.027665195986628532
    },
    {
        "x": 0.4720618724822998,
        "y": 0.722634494304657,
        "z": -0.03526223450899124
    },
    {
        "x": 0.4855678975582123,
        "y": 0.7211852669715881,
        "z": -0.0419606976211071
    },
    {
        "x": 0.4818561375141144,
        "y": 0.7891493439674377,
        "z": -0.03463595360517502
    },
    {
        "x": 0.4818592071533203,
        "y": 0.764751672744751,
        "z": -0.04988449066877365
    },
    {
        "x": 0.48229682445526123,
        "y": 0.7493579983711243,
        "z": -0.05078306421637535
    },
    {
        "x": 0.48338764905929565,
        "y": 0.7362880706787109,
        "z": -0.04533715918660164
    },
    {
        "x": 0.4844779372215271,
        "y": 0.7272844314575195,
        "z": -0.04163394123315811
    },
    {
        "x": 0.45746591687202454,
        "y": 0.7301828861236572,
        "z": -0.027883034199476242
    },
    {
        "x": 0.45506924390792847,
        "y": 0.7336677312850952,
        "z": -0.03155902028083801
    },
    {
        "x": 0.4513651430606842,
        "y": 0.7409281134605408,
        "z": -0.03515331819653511
    },
    {
        "x": 0.44809645414352417,
        "y": 0.749931275844574,
        "z": -0.032539281994104385
    },
    {
        "x": 0.4291526675224304,
        "y": 0.6866092681884766,
        "z": -0.025827202945947647
    },
    {
        "x": 0.31087809801101685,
        "y": 0.6032242178916931,
        "z": 0.198775514960289
    },
    {
        "x": 0.495382696390152,
        "y": 0.624468207359314,
        "z": -0.06687571108341217
    },
    {
        "x": 0.4500592350959778,
        "y": 0.7319238781929016,
        "z": -0.019292118027806282
    },
    {
        "x": 0.4465736150741577,
        "y": 0.7339562773704529,
        "z": -0.021565783768892288
    },
    {
        "x": 0.47468695044517517,
        "y": 0.6349197030067444,
        "z": -0.04966665059328079
    },
    {
        "x": 0.44832921028137207,
        "y": 0.6314284205436707,
        "z": -0.02869991958141327
    },
    {
        "x": 0.47163793444633484,
        "y": 0.6294005513191223,
        "z": -0.04920374974608421
    },
    {
        "x": 0.42503219842910767,
        "y": 0.5402224659919739,
        "z": -0.0021256047766655684
    },
    {
        "x": 0.39823582768440247,
        "y": 0.5602574348449707,
        "z": 0.0027654985897243023
    },
    {
        "x": 0.4370054602622986,
        "y": 0.6018002033233643,
        "z": -0.0333017073571682
    },
    {
        "x": 0.34370166063308716,
        "y": 0.2917983829975128,
        "z": 0.06622220575809479
    },
    {
        "x": 0.3561139702796936,
        "y": 0.3264371156692505,
        "z": 0.03553453087806702
    },
    {
        "x": 0.36874350905418396,
        "y": 0.36579573154449463,
        "z": 0.010462944395840168
    },
    {
        "x": 0.44068750739097595,
        "y": 0.7699705362319946,
        "z": -0.02098034881055355
    },
    {
        "x": 0.4459669589996338,
        "y": 0.36160144209861755,
        "z": -0.01887006126344204
    },
    {
        "x": 0.43834996223449707,
        "y": 0.3038005530834198,
        "z": -0.0024744828697293997
    },
    {
        "x": 0.43029701709747314,
        "y": 0.24832314252853394,
        "z": 0.015153230167925358
    },
    {
        "x": 0.3700355887413025,
        "y": 0.4844440817832947,
        "z": 0.033111102879047394
    },
    {
        "x": 0.3326728343963623,
        "y": 0.5149328112602234,
        "z": 0.05876131355762482
    },
    {
        "x": 0.441379189491272,
        "y": 0.4664522409439087,
        "z": 0.02212398871779442
    },
    {
        "x": 0.34607821702957153,
        "y": 0.44798749685287476,
        "z": 0.04457473382353783
    },
    {
        "x": 0.4533555507659912,
        "y": 0.5033418536186218,
        "z": -0.01384621299803257
    },
    {
        "x": 0.4496411979198456,
        "y": 0.5919277667999268,
        "z": -0.06720247119665146
    },
    {
        "x": 0.3165505528450012,
        "y": 0.5343891978263855,
        "z": 0.07771305739879608
    },
    {
        "x": 0.34476056694984436,
        "y": 0.5323624014854431,
        "z": 0.04043584316968918
    },
    {
        "x": 0.3669790029525757,
        "y": 0.5393381118774414,
        "z": 0.022151216864585876
    },
    {
        "x": 0.3993285894393921,
        "y": 0.5317937135696411,
        "z": 0.012743417173624039
    },
    {
        "x": 0.4228566288948059,
        "y": 0.518147885799408,
        "z": 0.008883632719516754
    },
    {
        "x": 0.4407210052013397,
        "y": 0.5036295056343079,
        "z": 0.004006143659353256
    },
    {
        "x": 0.4747084081172943,
        "y": 0.46442657709121704,
        "z": -0.031014427542686462
    },
    {
        "x": 0.32296988368034363,
        "y": 0.5884140133857727,
        "z": 0.06834610551595688
    },
    {
        "x": 0.3318101763725281,
        "y": 0.44609636068344116,
        "z": 0.05445905029773712
    },
    {
        "x": 0.485798716545105,
        "y": 0.6180762052536011,
        "z": -0.08887717127799988
    },
    {
        "x": 0.4446364641189575,
        "y": 0.5480689406394958,
        "z": -0.017249904572963715
    },
    {
        "x": 0.30065399408340454,
        "y": 0.4905279874801636,
        "z": 0.19539906084537506
    },
    {
        "x": 0.45357540249824524,
        "y": 0.48736727237701416,
        "z": 0.0021834673825651407
    },
    {
        "x": 0.4365695118904114,
        "y": 0.6041236519813538,
        "z": -0.014989852905273438
    },
    {
        "x": 0.35609668493270874,
        "y": 0.46352869272232056,
        "z": 0.049067605286836624
    },
    {
        "x": 0.4489898383617401,
        "y": 0.5747911930084229,
        "z": -0.05919698625802994
    },
    {
        "x": 0.3192571997642517,
        "y": 0.6636393070220947,
        "z": 0.1847250908613205
    },
    {
        "x": 0.44138050079345703,
        "y": 0.4561413526535034,
        "z": 0.027937492355704308
    },
    {
        "x": 0.46184444427490234,
        "y": 0.5567862391471863,
        "z": -0.07684171944856644
    },
    {
        "x": 0.369018018245697,
        "y": 0.7809915542602539,
        "z": 0.057781048119068146
    },
    {
        "x": 0.3722820281982422,
        "y": 0.808875322341919,
        "z": 0.08811473846435547
    },
    {
        "x": 0.30924516916275024,
        "y": 0.5968340039253235,
        "z": 0.13375142216682434
    },
    {
        "x": 0.34887224435806274,
        "y": 0.7484568357467651,
        "z": 0.08397585153579712
    },
    {
        "x": 0.30882948637008667,
        "y": 0.4378134608268738,
        "z": 0.11893856525421143
    },
    {
        "x": 0.43740907311439514,
        "y": 0.8565233945846558,
        "z": -0.007236246485263109
    },
    {
        "x": 0.4884120225906372,
        "y": 0.6238857507705688,
        "z": -0.06540531665086746
    },
    {
        "x": 0.43025657534599304,
        "y": 0.5695589184761047,
        "z": -0.011402362957596779
    },
    {
        "x": 0.3164476156234741,
        "y": 0.4864652454853058,
        "z": 0.08849595487117767
    },
    {
        "x": 0.38386985659599304,
        "y": 0.4710865616798401,
        "z": 0.027338441461324692
    },
    {
        "x": 0.39890047907829285,
        "y": 0.47167080640792847,
        "z": 0.02232821099460125
    },
    {
        "x": 0.4385124444961548,
        "y": 0.7438297271728516,
        "z": -0.01897897757589817
    },
    {
        "x": 0.33047884702682495,
        "y": 0.6392441987991333,
        "z": 0.06943528354167938
    },
    {
        "x": 0.4709519147872925,
        "y": 0.8878992795944214,
        "z": -0.005377831403166056
    },
    {
        "x": 0.41845688223838806,
        "y": 0.8600044846534729,
        "z": 0.03490824997425079
    },
    {
        "x": 0.39667582511901855,
        "y": 0.8396682739257812,
        "z": 0.05827118083834648
    },
    {
        "x": 0.48692768812179565,
        "y": 0.30177831649780273,
        "z": -0.007556193042546511
    },
    {
        "x": 0.5086373090744019,
        "y": 0.8902313113212585,
        "z": -0.012015026994049549
    },
    {
        "x": 0.4137137234210968,
        "y": 0.4687696695327759,
        "z": 0.021252643316984177
    },
    {
        "x": 0.4276559352874756,
        "y": 0.46325427293777466,
        "z": 0.02356715314090252
    },
    {
        "x": 0.43658769130706787,
        "y": 0.4596256613731384,
        "z": 0.027515435591340065
    },
    {
        "x": 0.32037419080734253,
        "y": 0.44260844588279724,
        "z": 0.07422768324613571
    },
    {
        "x": 0.42548054456710815,
        "y": 0.4395822286605835,
        "z": 0.02245074324309826
    },
    {
        "x": 0.41023266315460205,
        "y": 0.43435078859329224,
        "z": 0.01976863481104374
    },
    {
        "x": 0.3949841558933258,
        "y": 0.4342021346092224,
        "z": 0.020844200626015663
    },
    {
        "x": 0.3797348737716675,
        "y": 0.4402981400489807,
        "z": 0.02547322027385235
    },
    {
        "x": 0.3703668713569641,
        "y": 0.4485737979412079,
        "z": 0.03147733211517334
    },
    {
        "x": 0.30022603273391724,
        "y": 0.42938852310180664,
        "z": 0.17078357934951782
    },
    {
        "x": 0.37363189458847046,
        "y": 0.4684702455997467,
        "z": 0.03362846001982689
    },
    {
        "x": 0.4973398447036743,
        "y": 0.6514803171157837,
        "z": -0.0522262267768383
    },
    {
        "x": 0.44266071915626526,
        "y": 0.6691854000091553,
        "z": -0.033982448279857635
    },
    {
        "x": 0.4529061019420624,
        "y": 0.6128407716751099,
        "z": -0.05021124333143234
    },
    {
        "x": 0.47381293773651123,
        "y": 0.6561222076416016,
        "z": -0.050401847809553146
    },
    {
        "x": 0.4908330738544464,
        "y": 0.4263814687728882,
        "z": -0.022382669150829315
    },
    {
        "x": 0.39057984948158264,
        "y": 0.8123648166656494,
        "z": 0.03610634803771973
    },
    {
        "x": 0.41279634833335876,
        "y": 0.8344438076019287,
        "z": 0.015221303328871727
    },
    {
        "x": 0.4687756597995758,
        "y": 0.8710528612136841,
        "z": -0.026753008365631104
    },
    {
        "x": 0.35268115997314453,
        "y": 0.7740171551704407,
        "z": 0.12558257579803467
    },
    {
        "x": 0.43637117743492126,
        "y": 0.4490242302417755,
        "z": 0.02569105662405491
    },
    {
        "x": 0.46424680948257446,
        "y": 0.50770103931427,
        "z": -0.039591725915670395
    },
    {
        "x": 0.5073326230049133,
        "y": 0.8716423511505127,
        "z": -0.03251205384731293
    },
    {
        "x": 0.4424167573451996,
        "y": 0.8768559098243713,
        "z": 0.011000728234648705
    },
    {
        "x": 0.31860512495040894,
        "y": 0.6520212292671204,
        "z": 0.12590932846069336
    },
    {
        "x": 0.46966493129730225,
        "y": 0.728442907333374,
        "z": -0.0352894626557827
    },
    {
        "x": 0.4672679603099823,
        "y": 0.7348322868347168,
        "z": -0.03940112143754959
    },
    {
        "x": 0.4650883078575134,
        "y": 0.7449974417686462,
        "z": -0.043376632034778595
    },
    {
        "x": 0.4631260633468628,
        "y": 0.7586480379104614,
        "z": -0.042151302099227905
    },
    {
        "x": 0.4589843451976776,
        "y": 0.781011700630188,
        "z": -0.030306460335850716
    },
    {
        "x": 0.4470095932483673,
        "y": 0.7316327691078186,
        "z": -0.02044937200844288
    },
    {
        "x": 0.4413459300994873,
        "y": 0.7307601571083069,
        "z": -0.02042214386165142
    },
    {
        "x": 0.4361182749271393,
        "y": 0.7275640368461609,
        "z": -0.019932011142373085
    },
    {
        "x": 0.41804003715515137,
        "y": 0.7104235887527466,
        "z": -0.014322729781270027
    },
    {
        "x": 0.3530234694480896,
        "y": 0.6505767107009888,
        "z": 0.030796591192483902
    },
    {
        "x": 0.46425002813339233,
        "y": 0.4821415841579437,
        "z": -0.020953118801116943
    },
    {
        "x": 0.4548887610435486,
        "y": 0.43697479367256165,
        "z": 0.015316607430577278
    },
    {
        "x": 0.443778395652771,
        "y": 0.44263604283332825,
        "z": 0.022573277354240417
    },
    {
        "x": 0.45071327686309814,
        "y": 0.7278578281402588,
        "z": -0.018801987171173096
    },
    {
        "x": 0.3543227016925812,
        "y": 0.7124424576759338,
        "z": 0.05277081951498985
    },
    {
        "x": 0.46926647424697876,
        "y": 0.4329117238521576,
        "z": -0.00887001771479845
    },
    {
        "x": 0.4496142566204071,
        "y": 0.805988073348999,
        "z": -0.021838080137968063
    },
    {
        "x": 0.49191153049468994,
        "y": 0.5114830732345581,
        "z": -0.07477227598428726
    },
    {
        "x": 0.4753584563732147,
        "y": 0.49172884225845337,
        "z": -0.05121873691678047
    },
    {
        "x": 0.4916971027851105,
        "y": 0.48447132110595703,
        "z": -0.055874984711408615
    },
    {
        "x": 0.4540030062198639,
        "y": 0.5515564680099487,
        "z": -0.04149779677391052
    },
    {
        "x": 0.5062466859817505,
        "y": 0.8455017805099487,
        "z": -0.040463075041770935
    },
    {
        "x": 0.505161464214325,
        "y": 0.8141331076622009,
        "z": -0.03763120248913765
    },
    {
        "x": 0.47640687227249146,
        "y": 0.8158693909645081,
        "z": -0.033437855541706085
    },
    {
        "x": 0.4086659550666809,
        "y": 0.7670589089393616,
        "z": 0.0001588034356245771
    },
    {
        "x": 0.42393219470977783,
        "y": 0.6261948943138123,
        "z": -0.01227370835840702
    },
    {
        "x": 0.4271790385246277,
        "y": 0.7908797860145569,
        "z": -0.010816928930580616
    },
    {
        "x": 0.38690027594566345,
        "y": 0.6244439482688904,
        "z": -0.0035330308601260185
    },
    {
        "x": 0.4104229509830475,
        "y": 0.6534940004348755,
        "z": -0.011654237285256386
    },
    {
        "x": 0.3753494620323181,
        "y": 0.66800856590271,
        "z": 0.008162049576640129
    },
    {
        "x": 0.47073930501937866,
        "y": 0.8460747003555298,
        "z": -0.03428196907043457
    },
    {
        "x": 0.44485175609588623,
        "y": 0.5684003829956055,
        "z": -0.029217278584837914
    },
    {
        "x": 0.3945043385028839,
        "y": 0.7850635051727295,
        "z": 0.016773385927081108
    },
    {
        "x": 0.41737398505210876,
        "y": 0.8100472092628479,
        "z": 0.0022209081798791885
    },
    {
        "x": 0.39451029896736145,
        "y": 0.7377204895019531,
        "z": 0.005765852052718401
    },
    {
        "x": 0.3376619815826416,
        "y": 0.6825225949287415,
        "z": 0.07188594341278076
    },
    {
        "x": 0.3746868968009949,
        "y": 0.740039587020874,
        "z": 0.024697178974747658
    },
    {
        "x": 0.33014410734176636,
        "y": 0.7025618553161621,
        "z": 0.1127302274107933
    },
    {
        "x": 0.39930862188339233,
        "y": 0.6906689405441284,
        "z": -0.005554823204874992
    },
    {
        "x": 0.4548773765563965,
        "y": 0.5274494290351868,
        "z": -0.0275562796741724
    },
    {
        "x": 0.45573920011520386,
        "y": 0.6029661893844604,
        "z": -0.07188594341278076
    },
    {
        "x": 0.44549983739852905,
        "y": 0.6116772890090942,
        "z": -0.052416834980249405
    },
    {
        "x": 0.4616231918334961,
        "y": 0.5837978720664978,
        "z": -0.08506503701210022
    },
    {
        "x": 0.4400782287120819,
        "y": 0.41838279366493225,
        "z": 0.011313867755234241
    },
    {
        "x": 0.4111071825027466,
        "y": 0.40937238931655884,
        "z": 0.008808751590549946
    },
    {
        "x": 0.3863826096057892,
        "y": 0.4103834629058838,
        "z": 0.01033360417932272
    },
    {
        "x": 0.36601415276527405,
        "y": 0.4166235327720642,
        "z": 0.01775364950299263
    },
    {
        "x": 0.35228896141052246,
        "y": 0.4285288453102112,
        "z": 0.02935342863202095
    },
    {
        "x": 0.344768226146698,
        "y": 0.47136828303337097,
        "z": 0.05647403374314308
    },
    {
        "x": 0.3031526207923889,
        "y": 0.5422283411026001,
        "z": 0.13440494239330292
    },
    {
        "x": 0.3590322732925415,
        "y": 0.5047730207443237,
        "z": 0.0390743687748909
    },
    {
        "x": 0.3765674829483032,
        "y": 0.5097145438194275,
        "z": 0.026657704263925552
    },
    {
        "x": 0.3988959789276123,
        "y": 0.5073959827423096,
        "z": 0.018175708130002022
    },
    {
        "x": 0.4206806719303131,
        "y": 0.4989778399467468,
        "z": 0.015044312924146652
    },
    {
        "x": 0.437455415725708,
        "y": 0.4882349967956543,
        "z": 0.01411850843578577
    },
    {
        "x": 0.44900205731391907,
        "y": 0.4777814447879791,
        "z": 0.013376504182815552
    },
    {
        "x": 0.30554819107055664,
        "y": 0.546876072883606,
        "z": 0.20367683470249176
    },
    {
        "x": 0.4468059241771698,
        "y": 0.6189388036727905,
        "z": -0.043812304735183716
    },
    {
        "x": 0.46446168422698975,
        "y": 0.5312274098396301,
        "z": -0.05552100017666817
    },
    {
        "x": 0.46706676483154297,
        "y": 0.6023877859115601,
        "z": -0.0871344730257988
    },
    {
        "x": 0.47773921489715576,
        "y": 0.6145890355110168,
        "z": -0.08119843900203705
    },
    {
        "x": 0.46793752908706665,
        "y": 0.6070351600646973,
        "z": -0.07842102646827698
    },
    {
        "x": 0.4529044032096863,
        "y": 0.6264917850494385,
        "z": -0.03850254788994789
    },
    {
        "x": 0.48057082295417786,
        "y": 0.616622805595398,
        "z": -0.08620867878198624
    },
    {
        "x": 0.4829663038253784,
        "y": 0.622432291507721,
        "z": -0.06524194031953812
    },
    {
        "x": 0.44769757986068726,
        "y": 0.45759499073028564,
        "z": 0.024601874873042107
    },
    {
        "x": 0.45815309882164,
        "y": 0.46253496408462524,
        "z": 0.012334974482655525
    },
    {
        "x": 0.46316295862197876,
        "y": 0.46529534459114075,
        "z": -0.0018584150820970535
    },
    {
        "x": 0.36502909660339355,
        "y": 0.45467203855514526,
        "z": 0.03763120248913765
    },
    {
        "x": 0.3562074303627014,
        "y": 0.44915154576301575,
        "z": 0.03863869607448578
    },
    {
        "x": 0.5075953006744385,
        "y": 0.5152623653411865,
        "z": -0.06921745091676712
    },
    {
        "x": 0.6226213574409485,
        "y": 0.4471780061721802,
        "z": 0.031858544796705246
    },
    {
        "x": 0.5117213726043701,
        "y": 0.6166297197341919,
        "z": -0.0658954530954361
    },
    {
        "x": 0.6844983696937561,
        "y": 0.35541021823883057,
        "z": 0.12612715363502502
    },
    {
        "x": 0.5722981095314026,
        "y": 0.47170960903167725,
        "z": 0.012784261256456375
    },
    {
        "x": 0.5899426341056824,
        "y": 0.4731658101081848,
        "z": 0.013240355998277664
    },
    {
        "x": 0.6069340705871582,
        "y": 0.47171735763549805,
        "z": 0.01776726543903351
    },
    {
        "x": 0.6287194490432739,
        "y": 0.45778071880340576,
        "z": 0.03346508368849754
    },
    {
        "x": 0.5566146373748779,
        "y": 0.465606689453125,
        "z": 0.015262148343026638
    },
    {
        "x": 0.5921291708946228,
        "y": 0.4082511067390442,
        "z": 0.008992550894618034
    },
    {
        "x": 0.57317715883255,
        "y": 0.41013479232788086,
        "z": 0.009891125373542309
    },
    {
        "x": 0.6102091670036316,
        "y": 0.4117405414581299,
        "z": 0.013914286158978939
    },
    {
        "x": 0.6226248145103455,
        "y": 0.4195854067802429,
        "z": 0.02065359428524971
    },
    {
        "x": 0.6430944204330444,
        "y": 0.474920392036438,
        "z": 0.041143812239170074
    },
    {
        "x": 0.5722538232803345,
        "y": 0.8234424591064453,
        "z": -0.019155969843268394
    },
    {
        "x": 0.6282858848571777,
        "y": 0.4407894015312195,
        "z": 0.03795795515179634
    },
    {
        "x": 0.6945051550865173,
        "y": 0.46418529748916626,
        "z": 0.12307744473218918
    },
    {
        "x": 0.6627019047737122,
        "y": 0.4576430916786194,
        "z": 0.06077629700303078
    },
    {
        "x": 0.5838297605514526,
        "y": 0.5803398489952087,
        "z": -0.013995975255966187
    },
    {
        "x": 0.519554615020752,
        "y": 0.6872104406356812,
        "z": -0.05827118083834648
    },
    {
        "x": 0.5173727869987488,
        "y": 0.7148025631904602,
        "z": -0.05059245601296425
    },
    {
        "x": 0.5417727828025818,
        "y": 0.6959288716316223,
        "z": -0.04909483343362808
    },
    {
        "x": 0.5559306144714355,
        "y": 0.7081308364868164,
        "z": -0.03784903883934021
    },
    {
        "x": 0.5332745909690857,
        "y": 0.7165488004684448,
        "z": -0.0448470264673233
    },
    {
        "x": 0.5456908345222473,
        "y": 0.7200369238853455,
        "z": -0.034009676426649094
    },
    {
        "x": 0.58054119348526,
        "y": 0.7476372718811035,
        "z": -0.015343836508691311
    },
    {
        "x": 0.5088912844657898,
        "y": 0.6026875972747803,
        "z": -0.0975906103849411
    },
    {
        "x": 0.510419487953186,
        "y": 0.5759667158126831,
        "z": -0.10183841735124588
    },
    {
        "x": 0.6505110263824463,
        "y": 0.3943226635456085,
        "z": 0.028427623212337494
    },
    {
        "x": 0.5476770997047424,
        "y": 0.5155618190765381,
        "z": -0.011279829777777195
    },
    {
        "x": 0.5507166385650635,
        "y": 0.596307098865509,
        "z": -0.05268913134932518
    },
    {
        "x": 0.5518076419830322,
        "y": 0.5820753574371338,
        "z": -0.046371880918741226
    },
    {
        "x": 0.6361110210418701,
        "y": 0.5757043957710266,
        "z": 0.008189279586076736
    },
    {
        "x": 0.5086809992790222,
        "y": 0.5428552031517029,
        "z": -0.08882271498441696
    },
    {
        "x": 0.6060758233070374,
        "y": 0.36773666739463806,
        "z": -0.0008032709592953324
    },
    {
        "x": 0.6322150826454163,
        "y": 0.3763107657432556,
        "z": 0.01227370835840702
    },
    {
        "x": 0.6657703518867493,
        "y": 0.30864381790161133,
        "z": 0.09366956353187561
    },
    {
        "x": 0.5269985795021057,
        "y": 0.3890669643878937,
        "z": -0.015425525605678558
    },
    {
        "x": 0.5568384528160095,
        "y": 0.41840890049934387,
        "z": 0.015602517873048782
    },
    {
        "x": 0.5920894742012024,
        "y": 0.7238231301307678,
        "z": -0.008992550894618034
    },
    {
        "x": 0.6792265176773071,
        "y": 0.703801691532135,
        "z": 0.15117831528186798
    },
    {
        "x": 0.5385158658027649,
        "y": 0.6116980910301208,
        "z": -0.046045128256082535
    },
    {
        "x": 0.5241376161575317,
        "y": 0.6201179027557373,
        "z": -0.04904037341475487
    },
    {
        "x": 0.5718302726745605,
        "y": 0.7273039817810059,
        "z": -0.011490860022604465
    },
    {
        "x": 0.5642063021659851,
        "y": 0.7249786853790283,
        "z": -0.016324099153280258
    },
    {
        "x": 0.6418019533157349,
        "y": 0.3597573935985565,
        "z": 0.022913644090294838
    },
    {
        "x": 0.55180424451828,
        "y": 0.6087965965270996,
        "z": -0.04345832020044327
    },
    {
        "x": 0.5714396238327026,
        "y": 0.36961686611175537,
        "z": -0.01021107193082571
    },
    {
        "x": 0.5742741823196411,
        "y": 0.3479791283607483,
        "z": -0.01227370835840702
    },
    {
        "x": 0.5899708271026611,
        "y": 0.24901238083839417,
        "z": 0.02946234494447708
    },
    {
        "x": 0.6535685062408447,
        "y": 0.33245784044265747,
        "z": 0.05334263667464256
    },
    {
        "x": 0.5803800821304321,
        "y": 0.2963533103466034,
        "z": 0.007501733954995871
    },
    {
        "x": 0.660968542098999,
        "y": 0.38343316316604614,
        "z": 0.04566391184926033
    },
    {
        "x": 0.6727334260940552,
        "y": 0.37007519602775574,
        "z": 0.083540178835392
    },
    {
        "x": 0.5188990831375122,
        "y": 0.7031849026679993,
        "z": -0.05669187009334564
    },
    {
        "x": 0.5367609858512878,
        "y": 0.7087074518203735,
        "z": -0.04811456799507141
    },
    {
        "x": 0.5507017374038696,
        "y": 0.7148100137710571,
        "z": -0.03771289065480232
    },
    {
        "x": 0.5339406728744507,
        "y": 0.616634726524353,
        "z": -0.043022651225328445
    },
    {
        "x": 0.567691445350647,
        "y": 0.7267221212387085,
        "z": -0.014050434343516827
    },
    {
        "x": 0.5613738894462585,
        "y": 0.7293347716331482,
        "z": -0.02614034339785576
    },
    {
        "x": 0.5624638199806213,
        "y": 0.7232356071472168,
        "z": -0.016991224139928818
    },
    {
        "x": 0.5282787680625916,
        "y": 0.6021110415458679,
        "z": -0.0709601417183876
    },
    {
        "x": 0.5424233675003052,
        "y": 0.7191648483276367,
        "z": -0.0311505775898695
    },
    {
        "x": 0.5297890305519104,
        "y": 0.7182906866073608,
        "z": -0.03787626698613167
    },
    {
        "x": 0.5154117345809937,
        "y": 0.7188683748245239,
        "z": -0.04343109205365181
    },
    {
        "x": 0.5267307162284851,
        "y": 0.7862548828125,
        "z": -0.035997431725263596
    },
    {
        "x": 0.5239019393920898,
        "y": 0.7618566155433655,
        "z": -0.05143657326698303
    },
    {
        "x": 0.5221611857414246,
        "y": 0.7464624643325806,
        "z": -0.05236237496137619
    },
    {
        "x": 0.5199844241142273,
        "y": 0.7336822152137756,
        "z": -0.04697092995047569
    },
    {
        "x": 0.5182428359985352,
        "y": 0.7249683737754822,
        "z": -0.04321325570344925
    },
    {
        "x": 0.5461260080337524,
        "y": 0.7238128781318665,
        "z": -0.031232265755534172
    },
    {
        "x": 0.5489575266838074,
        "y": 0.7267179489135742,
        "z": -0.034989938139915466
    },
    {
        "x": 0.5528777241706848,
        "y": 0.7333991527557373,
        "z": -0.038557007908821106
    },
    {
        "x": 0.5567976832389832,
        "y": 0.742113471031189,
        "z": -0.03616080805659294
    },
    {
        "x": 0.5703117251396179,
        "y": 0.677056074142456,
        "z": -0.03046983852982521
    },
    {
        "x": 0.6962333917617798,
        "y": 0.579203188419342,
        "z": 0.18853722512722015
    },
    {
        "x": 0.5541858673095703,
        "y": 0.7243955731391907,
        "z": -0.023267628625035286
    },
    {
        "x": 0.5572354197502136,
        "y": 0.7258484363555908,
        "z": -0.025704670697450638
    },
    {
        "x": 0.5184723734855652,
        "y": 0.6320250630378723,
        "z": -0.050864752382040024
    },
    {
        "x": 0.5457026958465576,
        "y": 0.6256412267684937,
        "z": -0.03125949203968048
    },
    {
        "x": 0.5210871696472168,
        "y": 0.6262166500091553,
        "z": -0.050429075956344604
    },
    {
        "x": 0.5668447613716125,
        "y": 0.5309598445892334,
        "z": -0.006626985501497984
    },
    {
        "x": 0.5955970883369446,
        "y": 0.5472313761711121,
        "z": -0.0030394955538213253
    },
    {
        "x": 0.5548557639122009,
        "y": 0.5942748785018921,
        "z": -0.03695046529173851
    },
    {
        "x": 0.6357135772705078,
        "y": 0.2718954086303711,
        "z": 0.0587068572640419
    },
    {
        "x": 0.6239460110664368,
        "y": 0.3068917989730835,
        "z": 0.028863295912742615
    },
    {
        "x": 0.6119600534439087,
        "y": 0.34668055176734924,
        "z": 0.004479256458580494
    },
    {
        "x": 0.567033588886261,
        "y": 0.7612853646278381,
        "z": -0.02513284981250763
    },
    {
        "x": 0.53179532289505,
        "y": 0.3546498715877533,
        "z": -0.02044937200844288
    },
    {
        "x": 0.536159336566925,
        "y": 0.2967064380645752,
        "z": -0.00460859714075923
    },
    {
        "x": 0.5413944721221924,
        "y": 0.24057850241661072,
        "z": 0.012736610136926174
    },
    {
        "x": 0.6208761930465698,
        "y": 0.4667828679084778,
        "z": 0.025622982531785965
    },
    {
        "x": 0.6618260145187378,
        "y": 0.4935132563114166,
        "z": 0.04991171881556511
    },
    {
        "x": 0.54659503698349,
        "y": 0.45892414450645447,
        "z": 0.018788371235132217
    },
    {
        "x": 0.6431005001068115,
        "y": 0.4267059862613678,
        "z": 0.036433104425668716
    },
    {
        "x": 0.5346091389656067,
        "y": 0.4978415071964264,
        "z": -0.016664469614624977
    },
    {
        "x": 0.539390504360199,
        "y": 0.5855579972267151,
        "z": -0.06981649994850159
    },
    {
        "x": 0.6801220774650574,
        "y": 0.5109442472457886,
        "z": 0.06796489655971527
    },
    {
        "x": 0.6496248245239258,
        "y": 0.5120992064476013,
        "z": 0.03183131292462349
    },
    {
        "x": 0.6269686222076416,
        "y": 0.5222598314285278,
        "z": 0.014472492970526218
    },
    {
        "x": 0.5932044386863708,
        "y": 0.5187668800354004,
        "z": 0.006885665934532881
    },
    {
        "x": 0.5681545734405518,
        "y": 0.5085956454277039,
        "z": 0.0042478060349822044
    },
    {
        "x": 0.5489864945411682,
        "y": 0.49639248847961426,
        "z": 0.000322925130603835
    },
    {
        "x": 0.5091267824172974,
        "y": 0.462110698223114,
        "z": -0.032103609293699265
    },
    {
        "x": 0.676629900932312,
        "y": 0.5652573108673096,
        "z": 0.058325640857219696
    },
    {
        "x": 0.6579138040542603,
        "y": 0.42322391271591187,
        "z": 0.04563668370246887
    },
    {
        "x": 0.5036614537239075,
        "y": 0.6169183850288391,
        "z": -0.08942175656557083
    },
    {
        "x": 0.5457133054733276,
        "y": 0.5414112210273743,
        "z": -0.02066720835864544
    },
    {
        "x": 0.6997330188751221,
        "y": 0.4656386971473694,
        "z": 0.18461617827415466
    },
    {
        "x": 0.534393310546875,
        "y": 0.48186683654785156,
        "z": -0.000697756593581289
    },
    {
        "x": 0.5563803911209106,
        "y": 0.5965988039970398,
        "z": -0.01852969080209732
    },
    {
        "x": 0.6339492797851562,
        "y": 0.4434047043323517,
        "z": 0.04130718857049942
    },
    {
        "x": 0.5398283004760742,
        "y": 0.568712055683136,
        "z": -0.06186547875404358
    },
    {
        "x": 0.6909976005554199,
        "y": 0.6404865980148315,
        "z": 0.1750313937664032
    },
    {
        "x": 0.546378493309021,
        "y": 0.4484679698944092,
        "z": 0.02457464672625065
    },
    {
        "x": 0.524799644947052,
        "y": 0.5524436235427856,
        "z": -0.07874778658151627
    },
    {
        "x": 0.6430581212043762,
        "y": 0.763625979423523,
        "z": 0.05067414417862892
    },
    {
        "x": 0.6439258456230164,
        "y": 0.7926709651947021,
        "z": 0.08081723004579544
    },
    {
        "x": 0.6940559148788452,
        "y": 0.5719414949417114,
        "z": 0.12340420484542847
    },
    {
        "x": 0.6622321605682373,
        "y": 0.7281955480575562,
        "z": 0.0756436213850975
    },
    {
        "x": 0.6840554475784302,
        "y": 0.4133545160293579,
        "z": 0.10891810059547424
    },
    {
        "x": 0.5774787664413452,
        "y": 0.8484221696853638,
        "z": -0.010619514621794224
    },
    {
        "x": 0.5023536682128906,
        "y": 0.6230174899101257,
        "z": -0.06584098935127258
    },
    {
        "x": 0.5622664093971252,
        "y": 0.5608749985694885,
        "z": -0.015507213771343231
    },
    {
        "x": 0.6775140762329102,
        "y": 0.462729275226593,
        "z": 0.07880224287509918
    },
    {
        "x": 0.6056290864944458,
        "y": 0.45545196533203125,
        "z": 0.02089865878224373
    },
    {
        "x": 0.5903802514076233,
        "y": 0.4580625891685486,
        "z": 0.016555551439523697
    },
    {
        "x": 0.5661656260490417,
        "y": 0.7345638871192932,
        "z": -0.023471850901842117
    },
    {
        "x": 0.6722666621208191,
        "y": 0.6166656613349915,
        "z": 0.05974157527089119
    },
    {
        "x": 0.5463236570358276,
        "y": 0.8844307661056519,
        "z": -0.007569807581603527
    },
    {
        "x": 0.5990443229675293,
        "y": 0.8501696586608887,
        "z": 0.030006935819983482
    },
    {
        "x": 0.6203951835632324,
        "y": 0.8269385695457458,
        "z": 0.05225345864892006
    },
    {
        "x": 0.5751317739486694,
        "y": 0.45718783140182495,
        "z": 0.01631048507988453
    },
    {
        "x": 0.5607550740242004,
        "y": 0.45355403423309326,
        "z": 0.019605256617069244
    },
    {
        "x": 0.5513883829116821,
        "y": 0.4512283205986023,
        "z": 0.023812219500541687
    },
    {
        "x": 0.6705489158630371,
        "y": 0.4185795485973358,
        "z": 0.06464289128780365
    },
    {
        "x": 0.5609759092330933,
        "y": 0.4297373294830322,
        "z": 0.01818932220339775
    },
    {
        "x": 0.5760075449943542,
        "y": 0.42218902707099915,
        "z": 0.01473117247223854
    },
    {
        "x": 0.5912563800811768,
        "y": 0.4198688268661499,
        "z": 0.015234919264912605
    },
    {
        "x": 0.6073758006095886,
        "y": 0.42364829778671265,
        "z": 0.01897897757589817
    },
    {
        "x": 0.6173954010009766,
        "y": 0.4304760694503784,
        "z": 0.024588260799646378
    },
    {
        "x": 0.6949483156204224,
        "y": 0.4046434760093689,
        "z": 0.16010960936546326
    },
    {
        "x": 0.6156500577926636,
        "y": 0.4513879418373108,
        "z": 0.026725776493549347
    },
    {
        "x": 0.5546294450759888,
        "y": 0.6616588234901428,
        "z": -0.03752228617668152
    },
    {
        "x": 0.5385164618492126,
        "y": 0.6070509552955627,
        "z": -0.052416834980249405
    },
    {
        "x": 0.5213016271591187,
        "y": 0.6529379487037659,
        "z": -0.051872242242097855
    },
    {
        "x": 0.6230128407478333,
        "y": 0.7984752655029297,
        "z": 0.030197542160749435
    },
    {
        "x": 0.6016616821289062,
        "y": 0.8240299224853516,
        "z": 0.010619514621794224
    },
    {
        "x": 0.5463258624076843,
        "y": 0.867003858089447,
        "z": -0.028836065903306007
    },
    {
        "x": 0.662664532661438,
        "y": 0.7546263933181763,
        "z": 0.11697803437709808
    },
    {
        "x": 0.5507362484931946,
        "y": 0.4406268298625946,
        "z": 0.021851694211363792
    },
    {
        "x": 0.5219739079475403,
        "y": 0.5039380788803101,
        "z": -0.041470564901828766
    },
    {
        "x": 0.5750798583030701,
        "y": 0.8699148297309875,
        "z": 0.007297512609511614
    },
    {
        "x": 0.6879494190216064,
        "y": 0.6282870769500732,
        "z": 0.11588884890079498
    },
    {
        "x": 0.5337094068527222,
        "y": 0.7235196232795715,
        "z": -0.03809410706162453
    },
    {
        "x": 0.5363226532936096,
        "y": 0.7296196222305298,
        "z": -0.042042385786771774
    },
    {
        "x": 0.539371132850647,
        "y": 0.7397859692573547,
        "z": -0.0462629608809948
    },
    {
        "x": 0.5424191355705261,
        "y": 0.7528568506240845,
        "z": -0.044955942779779434
    },
    {
        "x": 0.5493870973587036,
        "y": 0.775222897529602,
        "z": -0.03341062739491463
    },
    {
        "x": 0.5565822720527649,
        "y": 0.7232342958450317,
        "z": -0.024819713085889816
    },
    {
        "x": 0.561592698097229,
        "y": 0.7217832207679749,
        "z": -0.0250239335000515
    },
    {
        "x": 0.5666033625602722,
        "y": 0.7180084586143494,
        "z": -0.024846939370036125
    },
    {
        "x": 0.583814799785614,
        "y": 0.6991332173347473,
        "z": -0.019932011142373085
    },
    {
        "x": 0.6487385630607605,
        "y": 0.6308923363685608,
        "z": 0.02232821099460125
    },
    {
        "x": 0.5215414762496948,
        "y": 0.4780881404876709,
        "z": -0.02288641408085823
    },
    {
        "x": 0.5302608013153076,
        "y": 0.4313279092311859,
        "z": 0.012988483533263206
    },
    {
        "x": 0.5420234799385071,
        "y": 0.43539679050445557,
        "z": 0.019346576184034348
    },
    {
        "x": 0.5528793931007385,
        "y": 0.7200385332107544,
        "z": -0.022954488173127174
    },
    {
        "x": 0.6522161960601807,
        "y": 0.6927586197853088,
        "z": 0.04452027380466461
    },
    {
        "x": 0.5141411423683167,
        "y": 0.4295816421508789,
        "z": -0.0101702269166708
    },
    {
        "x": 0.5611472725868225,
        "y": 0.799042284488678,
        "z": -0.02490140125155449
    },
    {
        "x": 0.5086876749992371,
        "y": 0.4897031784057617,
        "z": -0.052171770483255386
    },
    {
        "x": 0.5346030592918396,
        "y": 0.5460559129714966,
        "z": -0.04400291293859482
    },
    {
        "x": 0.5343517065048218,
        "y": 0.8123969435691833,
        "z": -0.03496270999312401
    },
    {
        "x": 0.5994919538497925,
        "y": 0.7551932334899902,
        "z": -0.005132765043526888
    },
    {
        "x": 0.5718441605567932,
        "y": 0.6169336438179016,
        "z": -0.016718927770853043
    },
    {
        "x": 0.5824974775314331,
        "y": 0.781039297580719,
        "z": -0.015112386085093021
    },
    {
        "x": 0.611273467540741,
        "y": 0.6093907952308655,
        "z": -0.009945583529770374
    },
    {
        "x": 0.5883965492248535,
        "y": 0.6419159173965454,
        "z": -0.017032068222761154
    },
    {
        "x": 0.6265166997909546,
        "y": 0.6515092253684998,
        "z": 0.000987921142950654
    },
    {
        "x": 0.5424079298973083,
        "y": 0.8420244455337524,
        "z": -0.03605189174413681
    },
    {
        "x": 0.5454928874969482,
        "y": 0.5617426037788391,
        "z": -0.032321445643901825
    },
    {
        "x": 0.6156098246574402,
        "y": 0.7711714506149292,
        "z": 0.010973498225212097
    },
    {
        "x": 0.5944762229919434,
        "y": 0.7990497350692749,
        "z": -0.002336633624508977
    },
    {
        "x": 0.6112591028213501,
        "y": 0.7235369682312012,
        "z": -0.0006343628047034144
    },
    {
        "x": 0.6683400869369507,
        "y": 0.6605224609375,
        "z": 0.06273682415485382
    },
    {
        "x": 0.632607102394104,
        "y": 0.7229608297348022,
        "z": 0.017712805420160294
    },
    {
        "x": 0.6792294383049011,
        "y": 0.6802753806114197,
        "z": 0.10319989919662476
    },
    {
        "x": 0.6025514602661133,
        "y": 0.6770632863044739,
        "z": -0.01178357657045126
    },
    {
        "x": 0.5335168838500977,
        "y": 0.5222389101982117,
        "z": -0.03025200217962265
    },
    {
        "x": 0.5339431166648865,
        "y": 0.5974651575088501,
        "z": -0.0741732269525528
    },
    {
        "x": 0.5457053184509277,
        "y": 0.6050193905830383,
        "z": -0.055221475660800934
    },
    {
        "x": 0.5258854627609253,
        "y": 0.579455554485321,
        "z": -0.0868077203631401
    },
    {
        "x": 0.5433335900306702,
        "y": 0.4104185700416565,
        "z": 0.008168857544660568
    },
    {
        "x": 0.5718718767166138,
        "y": 0.3967738747596741,
        "z": 0.004649441223591566
    },
    {
        "x": 0.5973590016365051,
        "y": 0.39402031898498535,
        "z": 0.004880892112851143
    },
    {
        "x": 0.6191422343254089,
        "y": 0.39736536145210266,
        "z": 0.011027957312762737
    },
    {
        "x": 0.6348251700401306,
        "y": 0.4076797366142273,
        "z": 0.02175639010965824
    },
    {
        "x": 0.6465829014778137,
        "y": 0.4505234956741333,
        "z": 0.047951191663742065
    },
    {
        "x": 0.697112500667572,
        "y": 0.5173379182815552,
        "z": 0.12383987754583359
    },
    {
        "x": 0.6335083246231079,
        "y": 0.48595526814460754,
        "z": 0.031096115708351135
    },
    {
        "x": 0.6156446933746338,
        "y": 0.4937933683395386,
        "z": 0.01976863481104374
    },
    {
        "x": 0.5923362374305725,
        "y": 0.4940786361694336,
        "z": 0.012246479280292988
    },
    {
        "x": 0.5696819424629211,
        "y": 0.48855504393577576,
        "z": 0.010326797142624855
    },
    {
        "x": 0.5518203973770142,
        "y": 0.48041847348213196,
        "z": 0.010435715317726135
    },
    {
        "x": 0.5391870141029358,
        "y": 0.4717022180557251,
        "z": 0.010354026220738888
    },
    {
        "x": 0.6984188556671143,
        "y": 0.5225662589073181,
        "z": 0.19289393723011017
    },
    {
        "x": 0.545268714427948,
        "y": 0.6125709414482117,
        "z": -0.0464535690844059
    },
    {
        "x": 0.5219709277153015,
        "y": 0.5274643898010254,
        "z": -0.05739983916282654
    },
    {
        "x": 0.5213084816932678,
        "y": 0.5986241102218628,
        "z": -0.08865933120250702
    },
    {
        "x": 0.5121576189994812,
        "y": 0.612273097038269,
        "z": -0.08201532810926437
    },
    {
        "x": 0.5213078856468201,
        "y": 0.6032712459564209,
        "z": -0.0799458846449852
    },
    {
        "x": 0.5404752492904663,
        "y": 0.62099289894104,
        "z": -0.04084428772330284
    },
    {
        "x": 0.5091075897216797,
        "y": 0.6145960688591003,
        "z": -0.08702556043863297
    },
    {
        "x": 0.5080176591873169,
        "y": 0.6209856271743774,
        "z": -0.0658954530954361
    },
    {
        "x": 0.5398430824279785,
        "y": 0.4509353041648865,
        "z": 0.021633857861161232
    },
    {
        "x": 0.5287326574325562,
        "y": 0.4574679136276245,
        "z": 0.009952391497790813
    },
    {
        "x": 0.5228505730628967,
        "y": 0.4612424373626709,
        "z": -0.0037508669774979353
    },
    {
        "x": 0.6234940886497498,
        "y": 0.4359959363937378,
        "z": 0.030551526695489883
    },
    {
        "x": 0.6322084665298462,
        "y": 0.4288818836212158,
        "z": 0.030851051211357117
    }
]

let surprisedDatabase = [
    {
        "x": 0.4824729859828949,
        "y": 0.6501528024673462,
        "z": -0.05730165168642998
    },
    {
        "x": 0.475002259016037,
        "y": 0.5684777498245239,
        "z": -0.09539483487606049
    },
    {
        "x": 0.4790034294128418,
        "y": 0.593316376209259,
        "z": -0.05228371173143387
    },
    {
        "x": 0.4592136740684509,
        "y": 0.4832235872745514,
        "z": -0.06685192883014679
    },
    {
        "x": 0.47376924753189087,
        "y": 0.5423362255096436,
        "z": -0.10008904337882996
    },
    {
        "x": 0.4733501672744751,
        "y": 0.5075101852416992,
        "z": -0.09113229066133499
    },
    {
        "x": 0.47439512610435486,
        "y": 0.4217711091041565,
        "z": -0.0387946218252182
    },
    {
        "x": 0.3531404435634613,
        "y": 0.4193039536476135,
        "z": 0.032994311302900314
    },
    {
        "x": 0.47360959649086,
        "y": 0.3467879891395569,
        "z": -0.022756092250347137
    },
    {
        "x": 0.47251713275909424,
        "y": 0.31113457679748535,
        "z": -0.02402406930923462
    },
    {
        "x": 0.47079795598983765,
        "y": 0.2127297818660736,
        "z": 0.0017333478899672627
    },
    {
        "x": 0.48304983973503113,
        "y": 0.661929726600647,
        "z": -0.05638439580798149
    },
    {
        "x": 0.4837806820869446,
        "y": 0.6716821193695068,
        "z": -0.05096178129315376
    },
    {
        "x": 0.4848194718360901,
        "y": 0.677385687828064,
        "z": -0.04365069046616554
    },
    {
        "x": 0.48729008436203003,
        "y": 0.7368686199188232,
        "z": -0.028435001149773598
    },
    {
        "x": 0.4877129793167114,
        "y": 0.7506699562072754,
        "z": -0.030997928231954575
    },
    {
        "x": 0.4881887435913086,
        "y": 0.7661964297294617,
        "z": -0.033210139721632004
    },
    {
        "x": 0.48904290795326233,
        "y": 0.7799742221832275,
        "z": -0.026762353256344795
    },
    {
        "x": 0.4908519685268402,
        "y": 0.7896679043769836,
        "z": -0.006913158111274242
    },
    {
        "x": 0.4762701094150543,
        "y": 0.5816569924354553,
        "z": -0.08703161031007767
    },
    {
        "x": 0.462613970041275,
        "y": 0.5800968408584595,
        "z": -0.06269729137420654
    },
    {
        "x": 0.2945835292339325,
        "y": 0.3340754806995392,
        "z": 0.1263657957315445
    },
    {
        "x": 0.4041435420513153,
        "y": 0.44129428267478943,
        "z": 0.01102058682590723
    },
    {
        "x": 0.38674673438072205,
        "y": 0.4445459842681885,
        "z": 0.013158606365323067
    },
    {
        "x": 0.3701067864894867,
        "y": 0.44430041313171387,
        "z": 0.01880379021167755
    },
    {
        "x": 0.3486781716346741,
        "y": 0.4287632405757904,
        "z": 0.03553026169538498
    },
    {
        "x": 0.41879403591156006,
        "y": 0.4330080449581146,
        "z": 0.012895569205284119
    },
    {
        "x": 0.37601929903030396,
        "y": 0.36232826113700867,
        "z": 0.010110071860253811
    },
    {
        "x": 0.3965849280357361,
        "y": 0.363800048828125,
        "z": 0.00888931006193161
    },
    {
        "x": 0.35797345638275146,
        "y": 0.36907142400741577,
        "z": 0.016429711133241653
    },
    {
        "x": 0.34681081771850586,
        "y": 0.381919801235199,
        "z": 0.023484503850340843
    },
    {
        "x": 0.3364287316799164,
        "y": 0.44843897223472595,
        "z": 0.04381256178021431
    },
    {
        "x": 0.43016326427459717,
        "y": 0.7970058917999268,
        "z": 0.009644698351621628
    },
    {
        "x": 0.3469502925872803,
        "y": 0.4111449122428894,
        "z": 0.03971187770366669
    },
    {
        "x": 0.28978070616722107,
        "y": 0.43816375732421875,
        "z": 0.12442336231470108
    },
    {
        "x": 0.31728410720825195,
        "y": 0.42989736795425415,
        "z": 0.06366850435733795
    },
    {
        "x": 0.39708754420280457,
        "y": 0.549393355846405,
        "z": -0.010744059458374977
    },
    {
        "x": 0.4619161784648895,
        "y": 0.6489685773849487,
        "z": -0.053200967609882355
    },
    {
        "x": 0.46895402669906616,
        "y": 0.6742178201675415,
        "z": -0.047751378268003464
    },
    {
        "x": 0.44457685947418213,
        "y": 0.6611453890800476,
        "z": -0.043353933840990067
    },
    {
        "x": 0.4368228018283844,
        "y": 0.6759681105613708,
        "z": -0.03107886202633381
    },
    {
        "x": 0.4574589133262634,
        "y": 0.6797401309013367,
        "z": -0.04079100489616394
    },
    {
        "x": 0.4503472149372101,
        "y": 0.6873276829719543,
        "z": -0.029433192685246468
    },
    {
        "x": 0.4186703860759735,
        "y": 0.725054144859314,
        "z": -0.0011077914386987686
    },
    {
        "x": 0.46096768975257874,
        "y": 0.5686662197113037,
        "z": -0.09318263083696365
    },
    {
        "x": 0.45739778876304626,
        "y": 0.5438040494918823,
        "z": -0.09712144732475281
    },
    {
        "x": 0.32201308012008667,
        "y": 0.3586459159851074,
        "z": 0.034451134502887726
    },
    {
        "x": 0.4270031750202179,
        "y": 0.48238611221313477,
        "z": -0.01111500896513462
    },
    {
        "x": 0.42775365710258484,
        "y": 0.5632752776145935,
        "z": -0.04872259125113487
    },
    {
        "x": 0.426252543926239,
        "y": 0.5495327115058899,
        "z": -0.043138109147548676
    },
    {
        "x": 0.34881147742271423,
        "y": 0.5494310259819031,
        "z": 0.012544853612780571
    },
    {
        "x": 0.45791178941726685,
        "y": 0.5112311840057373,
        "z": -0.08487334847450256
    },
    {
        "x": 0.355903685092926,
        "y": 0.32267096638679504,
        "z": 0.004309764131903648
    },
    {
        "x": 0.33502379059791565,
        "y": 0.3356166481971741,
        "z": 0.019275909289717674
    },
    {
        "x": 0.30681467056274414,
        "y": 0.2891280949115753,
        "z": 0.09436967223882675
    },
    {
        "x": 0.43320879340171814,
        "y": 0.3394845128059387,
        "z": -0.0153505839407444
    },
    {
        "x": 0.4146290421485901,
        "y": 0.37462544441223145,
        "z": 0.012598809786140919
    },
    {
        "x": 0.4085518419742584,
        "y": 0.6979566216468811,
        "z": 0.002139706863090396
    },
    {
        "x": 0.3268100619316101,
        "y": 0.663240373134613,
        "z": 0.1542072743177414
    },
    {
        "x": 0.44111526012420654,
        "y": 0.5763717889785767,
        "z": -0.04324601963162422
    },
    {
        "x": 0.4540938436985016,
        "y": 0.5840170383453369,
        "z": -0.04610570892691612
    },
    {
        "x": 0.429130882024765,
        "y": 0.7069159150123596,
        "z": -0.0032845931127667427
    },
    {
        "x": 0.4390241205692291,
        "y": 0.7055130004882812,
        "z": -0.008963500149548054
    },
    {
        "x": 0.3255261778831482,
        "y": 0.32173365354537964,
        "z": 0.028947584331035614
    },
    {
        "x": 0.42962440848350525,
        "y": 0.574981689453125,
        "z": -0.03976583480834961
    },
    {
        "x": 0.3870600461959839,
        "y": 0.320829838514328,
        "z": -0.007877628318965435
    },
    {
        "x": 0.3828258216381073,
        "y": 0.30248400568962097,
        "z": -0.010157284326851368
    },
    {
        "x": 0.3695504665374756,
        "y": 0.22875723242759705,
        "z": 0.027113068848848343
    },
    {
        "x": 0.31566545367240906,
        "y": 0.30657443404197693,
        "z": 0.05676208809018135
    },
    {
        "x": 0.3774292469024658,
        "y": 0.2673530876636505,
        "z": 0.006663610227406025
    },
    {
        "x": 0.31267404556274414,
        "y": 0.3499385118484497,
        "z": 0.05131249502301216
    },
    {
        "x": 0.303427517414093,
        "y": 0.34424999356269836,
        "z": 0.08606039732694626
    },
    {
        "x": 0.46493563055992126,
        "y": 0.6629164218902588,
        "z": -0.05258047208189964
    },
    {
        "x": 0.4513986110687256,
        "y": 0.6722940802574158,
        "z": -0.043084148317575455
    },
    {
        "x": 0.443054735660553,
        "y": 0.6819648146629333,
        "z": -0.03194216266274452
    },
    {
        "x": 0.44579359889030457,
        "y": 0.5810130834579468,
        "z": -0.039927706122398376
    },
    {
        "x": 0.43410834670066833,
        "y": 0.707220733165741,
        "z": -0.0062016090378165245
    },
    {
        "x": 0.4369209408760071,
        "y": 0.721467912197113,
        "z": -0.013934229500591755
    },
    {
        "x": 0.44152379035949707,
        "y": 0.7024967074394226,
        "z": -0.009246771223843098
    },
    {
        "x": 0.4462597370147705,
        "y": 0.5680273771286011,
        "z": -0.0666361004114151
    },
    {
        "x": 0.4552806317806244,
        "y": 0.6861949563026428,
        "z": -0.027180515229701996
    },
    {
        "x": 0.4622647762298584,
        "y": 0.6814943552017212,
        "z": -0.03493674099445343
    },
    {
        "x": 0.47233846783638,
        "y": 0.6789295673370361,
        "z": -0.041087765246629715
    },
    {
        "x": 0.4667743444442749,
        "y": 0.7863714098930359,
        "z": -0.006781639531254768
    },
    {
        "x": 0.46581026911735535,
        "y": 0.776055634021759,
        "z": -0.025926031172275543
    },
    {
        "x": 0.46669885516166687,
        "y": 0.7627589702606201,
        "z": -0.030215561389923096
    },
    {
        "x": 0.46904411911964417,
        "y": 0.7476547956466675,
        "z": -0.028138238936662674
    },
    {
        "x": 0.47127947211265564,
        "y": 0.7360126972198486,
        "z": -0.025912540033459663
    },
    {
        "x": 0.45169058442115784,
        "y": 0.7241194248199463,
        "z": -0.016672514379024506
    },
    {
        "x": 0.44772544503211975,
        "y": 0.7286555767059326,
        "z": -0.018695877864956856
    },
    {
        "x": 0.4416479468345642,
        "y": 0.7347468137741089,
        "z": -0.02097553387284279
    },
    {
        "x": 0.4366662800312042,
        "y": 0.7413542866706848,
        "z": -0.018115846440196037
    },
    {
        "x": 0.42037126421928406,
        "y": 0.6466234922409058,
        "z": -0.024091511964797974
    },
    {
        "x": 0.30158257484436035,
        "y": 0.5413474440574646,
        "z": 0.1875522881746292
    },
    {
        "x": 0.47748929262161255,
        "y": 0.5861986875534058,
        "z": -0.06458576023578644
    },
    {
        "x": 0.4473554193973541,
        "y": 0.7165794372558594,
        "z": -0.01200528908520937
    },
    {
        "x": 0.4420347809791565,
        "y": 0.7191733121871948,
        "z": -0.013435132801532745
    },
    {
        "x": 0.4593973159790039,
        "y": 0.5949603915214539,
        "z": -0.046726204454898834
    },
    {
        "x": 0.4365871250629425,
        "y": 0.5907308459281921,
        "z": -0.02805730514228344
    },
    {
        "x": 0.45686662197113037,
        "y": 0.5899141430854797,
        "z": -0.04683411866426468
    },
    {
        "x": 0.41043412685394287,
        "y": 0.4985530972480774,
        "z": -0.005635066889226437
    },
    {
        "x": 0.383800208568573,
        "y": 0.5175723433494568,
        "z": -0.0001797842705855146
    },
    {
        "x": 0.4255443215370178,
        "y": 0.5616676211357117,
        "z": -0.033803656697273254
    },
    {
        "x": 0.3292495906352997,
        "y": 0.25291311740875244,
        "z": 0.05870451405644417
    },
    {
        "x": 0.3379466235637665,
        "y": 0.2794400751590729,
        "z": 0.030539298430085182
    },
    {
        "x": 0.34856900572776794,
        "y": 0.30535805225372314,
        "z": 0.008201366290450096
    },
    {
        "x": 0.42884597182273865,
        "y": 0.7469644546508789,
        "z": -0.0056654177606105804
    },
    {
        "x": 0.4259551465511322,
        "y": 0.30719077587127686,
        "z": -0.020274100825190544
    },
    {
        "x": 0.4212537705898285,
        "y": 0.26654988527297974,
        "z": -0.008039497770369053
    },
    {
        "x": 0.41542550921440125,
        "y": 0.21733009815216064,
        "z": 0.007533656433224678
    },
    {
        "x": 0.3563360869884491,
        "y": 0.4390023648738861,
        "z": 0.027531230822205544
    },
    {
        "x": 0.3191204369068146,
        "y": 0.4686782956123352,
        "z": 0.05258047208189964
    },
    {
        "x": 0.4284890294075012,
        "y": 0.4251357316970825,
        "z": 0.015660833567380905
    },
    {
        "x": 0.3320944905281067,
        "y": 0.3951057195663452,
        "z": 0.03995468094944954
    },
    {
        "x": 0.4379037916660309,
        "y": 0.464511901140213,
        "z": -0.01652413420379162
    },
    {
        "x": 0.4345792233943939,
        "y": 0.5533992648124695,
        "z": -0.06550301611423492
    },
    {
        "x": 0.30311688780784607,
        "y": 0.48567846417427063,
        "z": 0.07095260918140411
    },
    {
        "x": 0.33059197664260864,
        "y": 0.48706191778182983,
        "z": 0.034613002091646194
    },
    {
        "x": 0.35256391763687134,
        "y": 0.4956572949886322,
        "z": 0.016807405278086662
    },
    {
        "x": 0.3853000998497009,
        "y": 0.48897790908813477,
        "z": 0.008444170467555523
    },
    {
        "x": 0.4086686968803406,
        "y": 0.4761846959590912,
        "z": 0.004326625261455774
    },
    {
        "x": 0.4259728193283081,
        "y": 0.46285775303840637,
        "z": -0.0002238345769001171
    },
    {
        "x": 0.45841991901397705,
        "y": 0.4291214644908905,
        "z": -0.03186122700572014
    },
    {
        "x": 0.3100477159023285,
        "y": 0.539158284664154,
        "z": 0.062265634536743164
    },
    {
        "x": 0.31869572401046753,
        "y": 0.391371488571167,
        "z": 0.04969380423426628
    },
    {
        "x": 0.46782469749450684,
        "y": 0.580964982509613,
        "z": -0.08541291952133179
    },
    {
        "x": 0.4299525320529938,
        "y": 0.5081461071968079,
        "z": -0.02058435045182705
    },
    {
        "x": 0.28950780630111694,
        "y": 0.43630653619766235,
        "z": 0.1830199658870697
    },
    {
        "x": 0.43847984075546265,
        "y": 0.44806408882141113,
        "z": -0.002134648384526372
    },
    {
        "x": 0.4251570999622345,
        "y": 0.5631287097930908,
        "z": -0.017117654904723167
    },
    {
        "x": 0.3417022228240967,
        "y": 0.4125828146934509,
        "z": 0.04359673708677292
    },
    {
        "x": 0.4340594410896301,
        "y": 0.5364351272583008,
        "z": -0.05838077887892723
    },
    {
        "x": 0.3094179630279541,
        "y": 0.5996741056442261,
        "z": 0.17578981816768646
    },
    {
        "x": 0.4288055896759033,
        "y": 0.4143182039260864,
        "z": 0.02078668773174286
    },
    {
        "x": 0.4450305104255676,
        "y": 0.5208611488342285,
        "z": -0.07478351145982742
    },
    {
        "x": 0.3618456721305847,
        "y": 0.7316056489944458,
        "z": 0.0642620250582695
    },
    {
        "x": 0.36280137300491333,
        "y": 0.7557461857795715,
        "z": 0.0925891101360321
    },
    {
        "x": 0.295859158039093,
        "y": 0.54137122631073,
        "z": 0.1251787394285202
    },
    {
        "x": 0.3429272174835205,
        "y": 0.6957712173461914,
        "z": 0.08476544171571732
    },
    {
        "x": 0.29603302478790283,
        "y": 0.3884298801422119,
        "z": 0.11044865846633911
    },
    {
        "x": 0.42614150047302246,
        "y": 0.8208415508270264,
        "z": 0.018844258040189743
    },
    {
        "x": 0.4709934890270233,
        "y": 0.5856885313987732,
        "z": -0.0630749836564064
    },
    {
        "x": 0.416517049074173,
        "y": 0.5278864502906799,
        "z": -0.014662640169262886
    },
    {
        "x": 0.3037448227405548,
        "y": 0.4356750249862671,
        "z": 0.08142014592885971
    },
    {
        "x": 0.37008875608444214,
        "y": 0.42961302399635315,
        "z": 0.021083446219563484
    },
    {
        "x": 0.3854788839817047,
        "y": 0.4313667416572571,
        "z": 0.015998059883713722
    },
    {
        "x": 0.43178069591522217,
        "y": 0.7228999137878418,
        "z": -0.011371302418410778
    },
    {
        "x": 0.31940770149230957,
        "y": 0.5873216390609741,
        "z": 0.06410015374422073
    },
    {
        "x": 0.45695358514785767,
        "y": 0.8606362342834473,
        "z": 0.0221895519644022
    },
    {
        "x": 0.40506529808044434,
        "y": 0.8168055415153503,
        "z": 0.05309305712580681
    },
    {
        "x": 0.38461339473724365,
        "y": 0.7908469438552856,
        "z": 0.0699813961982727
    },
    {
        "x": 0.4717875123023987,
        "y": 0.26617321372032166,
        "z": -0.01363072544336319
    },
    {
        "x": 0.4962497651576996,
        "y": 0.8671358823776245,
        "z": 0.016281330958008766
    },
    {
        "x": 0.40073245763778687,
        "y": 0.42866379022598267,
        "z": 0.015053823590278625
    },
    {
        "x": 0.4150221347808838,
        "y": 0.42270123958587646,
        "z": 0.017063697800040245
    },
    {
        "x": 0.42418473958969116,
        "y": 0.41860201954841614,
        "z": 0.020732728764414787
    },
    {
        "x": 0.3074798583984375,
        "y": 0.3883823752403259,
        "z": 0.06884831190109253
    },
    {
        "x": 0.41238951683044434,
        "y": 0.39317989349365234,
        "z": 0.015431518666446209
    },
    {
        "x": 0.3965722918510437,
        "y": 0.3845372796058655,
        "z": 0.013961207121610641
    },
    {
        "x": 0.3801215589046478,
        "y": 0.3834173381328583,
        "z": 0.015391051769256592
    },
    {
        "x": 0.3643267750740051,
        "y": 0.38960587978363037,
        "z": 0.02038201317191124
    },
    {
        "x": 0.3554261326789856,
        "y": 0.39873093366622925,
        "z": 0.026020454242825508
    },
    {
        "x": 0.28843677043914795,
        "y": 0.3802034854888916,
        "z": 0.15960291028022766
    },
    {
        "x": 0.36000609397888184,
        "y": 0.42483413219451904,
        "z": 0.027571698650717735
    },
    {
        "x": 0.48061907291412354,
        "y": 0.6107968688011169,
        "z": -0.048965394496917725
    },
    {
        "x": 0.43041810393333435,
        "y": 0.6290838122367859,
        "z": -0.03178029507398605
    },
    {
        "x": 0.4394823908805847,
        "y": 0.5724286437034607,
        "z": -0.04950495809316635
    },
    {
        "x": 0.45810845494270325,
        "y": 0.6163431406021118,
        "z": -0.04599779471755028
    },
    {
        "x": 0.4745480716228485,
        "y": 0.3844658136367798,
        "z": -0.024374783039093018
    },
    {
        "x": 0.38166406750679016,
        "y": 0.7650869488716125,
        "z": 0.04980171471834183
    },
    {
        "x": 0.4027804732322693,
        "y": 0.791585385799408,
        "z": 0.0355842188000679
    },
    {
        "x": 0.4564249813556671,
        "y": 0.8433845639228821,
        "z": 0.0039388141594827175
    },
    {
        "x": 0.34561896324157715,
        "y": 0.7166491746902466,
        "z": 0.12366797029972076
    },
    {
        "x": 0.4235902726650238,
        "y": 0.40625011920928955,
        "z": 0.018749834969639778
    },
    {
        "x": 0.4478457272052765,
        "y": 0.4717465341091156,
        "z": -0.040683094412088394
    },
    {
        "x": 0.49444490671157837,
        "y": 0.8505297899246216,
        "z": -0.000914728851057589
    },
    {
        "x": 0.4280873239040375,
        "y": 0.842048168182373,
        "z": 0.03515256941318512
    },
    {
        "x": 0.3059432804584503,
        "y": 0.5955432653427124,
        "z": 0.11891981214284897
    },
    {
        "x": 0.45967406034469604,
        "y": 0.7308847308158875,
        "z": -0.02140718512237072
    },
    {
        "x": 0.45582348108291626,
        "y": 0.7391587495803833,
        "z": -0.02361939661204815
    },
    {
        "x": 0.4514140486717224,
        "y": 0.7503431439399719,
        "z": -0.02568322792649269
    },
    {
        "x": 0.4480828642845154,
        "y": 0.7614688873291016,
        "z": -0.022783072665333748
    },
    {
        "x": 0.4442322850227356,
        "y": 0.7697428464889526,
        "z": -0.008606038987636566
    },
    {
        "x": 0.4443313777446747,
        "y": 0.6954315900802612,
        "z": -0.018749834969639778
    },
    {
        "x": 0.43758469820022583,
        "y": 0.6937830448150635,
        "z": -0.0183856301009655
    },
    {
        "x": 0.4314144551753998,
        "y": 0.6897990703582764,
        "z": -0.017832575365900993
    },
    {
        "x": 0.41333046555519104,
        "y": 0.6706236600875854,
        "z": -0.01191761065274477
    },
    {
        "x": 0.34405338764190674,
        "y": 0.6021075248718262,
        "z": 0.02865082584321499
    },
    {
        "x": 0.44832906126976013,
        "y": 0.44522351026535034,
        "z": -0.023066343739628792
    },
    {
        "x": 0.44001856446266174,
        "y": 0.3925389051437378,
        "z": 0.008309278637170792
    },
    {
        "x": 0.43042463064193726,
        "y": 0.39666157960891724,
        "z": 0.01572827808558941
    },
    {
        "x": 0.44917669892311096,
        "y": 0.6914235353469849,
        "z": -0.017441391944885254
    },
    {
        "x": 0.3482667803764343,
        "y": 0.6620715856552124,
        "z": 0.05303909629583359
    },
    {
        "x": 0.45288240909576416,
        "y": 0.38939008116722107,
        "z": -0.012774167582392693
    },
    {
        "x": 0.4371822774410248,
        "y": 0.7793431282043457,
        "z": 0.00250222603790462
    },
    {
        "x": 0.4737541973590851,
        "y": 0.4783994257450104,
        "z": -0.07311086356639862
    },
    {
        "x": 0.45842957496643066,
        "y": 0.4576336741447449,
        "z": -0.05109667032957077
    },
    {
        "x": 0.47400426864624023,
        "y": 0.4513131082057953,
        "z": -0.05552109330892563
    },
    {
        "x": 0.4385301172733307,
        "y": 0.5131509900093079,
        "z": -0.042679477483034134
    },
    {
        "x": 0.49307551980018616,
        "y": 0.8269877433776855,
        "z": -0.0068086180835962296
    },
    {
        "x": 0.4919394254684448,
        "y": 0.8040090799331665,
        "z": -0.004916773177683353
    },
    {
        "x": 0.46392732858657837,
        "y": 0.7991988658905029,
        "z": -0.0018834141083061695
    },
    {
        "x": 0.4005737602710724,
        "y": 0.7266159653663635,
        "z": 0.011897376738488674
    },
    {
        "x": 0.4126282334327698,
        "y": 0.5842597484588623,
        "z": -0.012807890772819519
    },
    {
        "x": 0.4159030318260193,
        "y": 0.75458163022995,
        "z": 0.006838968489319086
    },
    {
        "x": 0.37625882029533386,
        "y": 0.5816327333450317,
        "z": -0.0037196162156760693
    },
    {
        "x": 0.4013626277446747,
        "y": 0.6113700270652771,
        "z": -0.01120943296700716
    },
    {
        "x": 0.36918991804122925,
        "y": 0.6223388314247131,
        "z": 0.008727440610527992
    },
    {
        "x": 0.45917052030563354,
        "y": 0.8201944231987,
        "z": -0.001984582282602787
    },
    {
        "x": 0.4310005307197571,
        "y": 0.5282495617866516,
        "z": -0.031024906784296036
    },
    {
        "x": 0.3860994875431061,
        "y": 0.7406527400016785,
        "z": 0.02946017123758793
    },
    {
        "x": 0.4070707857608795,
        "y": 0.7694631218910217,
        "z": 0.02158254198729992
    },
    {
        "x": 0.3894340693950653,
        "y": 0.6943899393081665,
        "z": 0.012470662593841553
    },
    {
        "x": 0.3289061188697815,
        "y": 0.6294293403625488,
        "z": 0.06857852637767792
    },
    {
        "x": 0.3683645725250244,
        "y": 0.6940975785255432,
        "z": 0.030053691938519478
    },
    {
        "x": 0.32112354040145874,
        "y": 0.6468456983566284,
        "z": 0.10856019705533981
    },
    {
        "x": 0.39467424154281616,
        "y": 0.6468712687492371,
        "z": -0.003014811547473073
    },
    {
        "x": 0.43910154700279236,
        "y": 0.48950326442718506,
        "z": -0.029918799176812172
    },
    {
        "x": 0.44052958488464355,
        "y": 0.5643073916435242,
        "z": -0.06976556777954102
    },
    {
        "x": 0.43296018242836,
        "y": 0.5710558891296387,
        "z": -0.05136645585298538
    },
    {
        "x": 0.444547176361084,
        "y": 0.5473841428756714,
        "z": -0.08168992400169373
    },
    {
        "x": 0.4238487482070923,
        "y": 0.3653389811515808,
        "z": 0.004808860365301371
    },
    {
        "x": 0.3931209444999695,
        "y": 0.3494443893432617,
        "z": 0.004441282711923122
    },
    {
        "x": 0.3679454028606415,
        "y": 0.3490877151489258,
        "z": 0.007682036142796278
    },
    {
        "x": 0.34853750467300415,
        "y": 0.35720109939575195,
        "z": 0.015633855015039444
    },
    {
        "x": 0.3366861939430237,
        "y": 0.37224704027175903,
        "z": 0.026721885427832603
    },
    {
        "x": 0.33171898126602173,
        "y": 0.4216228723526001,
        "z": 0.05106969177722931
    },
    {
        "x": 0.2902662754058838,
        "y": 0.4892585575580597,
        "z": 0.12550248205661774
    },
    {
        "x": 0.34529030323028564,
        "y": 0.4591885507106781,
        "z": 0.03326409310102463
    },
    {
        "x": 0.3626808226108551,
        "y": 0.4663054347038269,
        "z": 0.0215960331261158
    },
    {
        "x": 0.3854138255119324,
        "y": 0.4644911289215088,
        "z": 0.013246286660432816
    },
    {
        "x": 0.40700018405914307,
        "y": 0.45697906613349915,
        "z": 0.008950010873377323
    },
    {
        "x": 0.42352980375289917,
        "y": 0.4465744197368622,
        "z": 0.008754419162869453
    },
    {
        "x": 0.4349103569984436,
        "y": 0.4373142719268799,
        "z": 0.007553890347480774
    },
    {
        "x": 0.29585546255111694,
        "y": 0.48837810754776,
        "z": 0.19143715500831604
    },
    {
        "x": 0.4353368878364563,
        "y": 0.5781266093254089,
        "z": -0.043111130595207214
    },
    {
        "x": 0.4474899172782898,
        "y": 0.49538251757621765,
        "z": -0.05552109330892563
    },
    {
        "x": 0.4500620663166046,
        "y": 0.5652281641960144,
        "z": -0.08390213549137115
    },
    {
        "x": 0.460360586643219,
        "y": 0.5770515203475952,
        "z": -0.07818276435136795
    },
    {
        "x": 0.45169490575790405,
        "y": 0.5691713094711304,
        "z": -0.07580868154764175
    },
    {
        "x": 0.4407590627670288,
        "y": 0.5858954191207886,
        "z": -0.037661537528038025
    },
    {
        "x": 0.46302762627601624,
        "y": 0.5794982314109802,
        "z": -0.08298487961292267
    },
    {
        "x": 0.46598079800605774,
        "y": 0.5842335224151611,
        "z": -0.06296706944704056
    },
    {
        "x": 0.4346676766872406,
        "y": 0.41529494524002075,
        "z": 0.017697686329483986
    },
    {
        "x": 0.4435093402862549,
        "y": 0.4218694567680359,
        "z": 0.006275798659771681
    },
    {
        "x": 0.4479544162750244,
        "y": 0.4259474575519562,
        "z": -0.0056553008034825325
    },
    {
        "x": 0.3505523204803467,
        "y": 0.4053325653076172,
        "z": 0.03226590156555176
    },
    {
        "x": 0.34085455536842346,
        "y": 0.3954925537109375,
        "z": 0.033641789108514786
    },
    {
        "x": 0.48918840289115906,
        "y": 0.48159077763557434,
        "z": -0.06863248348236084
    },
    {
        "x": 0.6080731153488159,
        "y": 0.40671306848526,
        "z": 0.021110426634550095
    },
    {
        "x": 0.49279552698135376,
        "y": 0.5781647562980652,
        "z": -0.06415411084890366
    },
    {
        "x": 0.6730678677558899,
        "y": 0.31432241201400757,
        "z": 0.10904580354690552
    },
    {
        "x": 0.5566225647926331,
        "y": 0.43356433510780334,
        "z": 0.0030839431565254927
    },
    {
        "x": 0.5750316977500916,
        "y": 0.435153603553772,
        "z": 0.0036083313170820475
    },
    {
        "x": 0.5924637317657471,
        "y": 0.4330520033836365,
        "z": 0.0079720513895154
    },
    {
        "x": 0.6143887042999268,
        "y": 0.41544127464294434,
        "z": 0.02283702790737152
    },
    {
        "x": 0.540867030620575,
        "y": 0.4269343912601471,
        "z": 0.006785012315958738
    },
    {
        "x": 0.5796282887458801,
        "y": 0.35253316164016724,
        "z": 0.00019148184219375253
    },
    {
        "x": 0.5585655570030212,
        "y": 0.35598450899124146,
        "z": 0.0009880757424980402
    },
    {
        "x": 0.5987857580184937,
        "y": 0.357393741607666,
        "z": 0.005210160743445158
    },
    {
        "x": 0.6120989322662354,
        "y": 0.3689088225364685,
        "z": 0.011222923174500465
    },
    {
        "x": 0.6287714838981628,
        "y": 0.43366628885269165,
        "z": 0.030215561389923096
    },
    {
        "x": 0.5574470162391663,
        "y": 0.7918004393577576,
        "z": 0.0044244215823709965
    },
    {
        "x": 0.6147182583808899,
        "y": 0.3979988694190979,
        "z": 0.02726145088672638
    },
    {
        "x": 0.6844296455383301,
        "y": 0.4172420799732208,
        "z": 0.10694150626659393
    },
    {
        "x": 0.6488611698150635,
        "y": 0.41255542635917664,
        "z": 0.04869561269879341
    },
    {
        "x": 0.5672318339347839,
        "y": 0.5401251316070557,
        "z": -0.01876332238316536
    },
    {
        "x": 0.5035093426704407,
        "y": 0.6458388566970825,
        "z": -0.05541318282485008
    },
    {
        "x": 0.5001873970031738,
        "y": 0.671364426612854,
        "z": -0.0497477650642395
    },
    {
        "x": 0.5243128538131714,
        "y": 0.655073881149292,
        "z": -0.04748159646987915
    },
    {
        "x": 0.5357248187065125,
        "y": 0.6679885387420654,
        "z": -0.03690614923834801
    },
    {
        "x": 0.5139052271842957,
        "y": 0.6749373078346252,
        "z": -0.044702839106321335
    },
    {
        "x": 0.5233717560768127,
        "y": 0.6807577610015869,
        "z": -0.03455904871225357
    },
    {
        "x": 0.5624530911445618,
        "y": 0.7154938578605652,
        "z": -0.008349746465682983
    },
    {
        "x": 0.48942407965660095,
        "y": 0.5668281316757202,
        "z": -0.09426175057888031
    },
    {
        "x": 0.4910297095775604,
        "y": 0.5416840314865112,
        "z": -0.09847035259008408
    },
    {
        "x": 0.6363649368286133,
        "y": 0.34310638904571533,
        "z": 0.020220143720507622
    },
    {
        "x": 0.5318157076835632,
        "y": 0.47696471214294434,
        "z": -0.016308309510350227
    },
    {
        "x": 0.5293139219284058,
        "y": 0.5574550032615662,
        "z": -0.05349772796034813
    },
    {
        "x": 0.5308406352996826,
        "y": 0.5438355207443237,
        "z": -0.04810209199786186
    },
    {
        "x": 0.6202101707458496,
        "y": 0.5349351763725281,
        "z": -0.00039834968629293144
    },
    {
        "x": 0.4898184835910797,
        "y": 0.509205162525177,
        "z": -0.08659995347261429
    },
    {
        "x": 0.5952284336090088,
        "y": 0.31179434061050415,
        "z": -0.006178003270179033
    },
    {
        "x": 0.6193106770515442,
        "y": 0.3222908079624176,
        "z": 0.006316266022622585
    },
    {
        "x": 0.6540238261222839,
        "y": 0.2708626687526703,
        "z": 0.07839859277009964
    },
    {
        "x": 0.5151849389076233,
        "y": 0.33602702617645264,
        "z": -0.018749834969639778
    },
    {
        "x": 0.5410282015800476,
        "y": 0.36874815821647644,
        "z": 0.006137535907328129
    },
    {
        "x": 0.5699998736381531,
        "y": 0.686858057975769,
        "z": -0.006640003994107246
    },
    {
        "x": 0.6676994562149048,
        "y": 0.6466872096061707,
        "z": 0.13888366520404816
    },
    {
        "x": 0.517013669013977,
        "y": 0.5719493627548218,
        "z": -0.046969007700681686
    },
    {
        "x": 0.5041059851646423,
        "y": 0.5807166695594788,
        "z": -0.04769741743803024
    },
    {
        "x": 0.5493465662002563,
        "y": 0.6966232657432556,
        "z": -0.010824994184076786
    },
    {
        "x": 0.5391936302185059,
        "y": 0.6966003775596619,
        "z": -0.015620365738868713
    },
    {
        "x": 0.628794252872467,
        "y": 0.3075178563594818,
        "z": 0.015364072285592556
    },
    {
        "x": 0.5294594764709473,
        "y": 0.5692553520202637,
        "z": -0.044513996690511703
    },
    {
        "x": 0.5617858171463013,
        "y": 0.3130400478839874,
        "z": -0.01483799796551466
    },
    {
        "x": 0.5644434094429016,
        "y": 0.2940307855606079,
        "z": -0.017225567251443863
    },
    {
        "x": 0.5778706669807434,
        "y": 0.2176254689693451,
        "z": 0.017913511022925377
    },
    {
        "x": 0.6416444778442383,
        "y": 0.289825439453125,
        "z": 0.042139917612075806
    },
    {
        "x": 0.5693691968917847,
        "y": 0.25740155577659607,
        "z": -0.0013919053599238396
    },
    {
        "x": 0.646856427192688,
        "y": 0.333030641078949,
        "z": 0.036069825291633606
    },
    {
        "x": 0.6600326895713806,
        "y": 0.3259766697883606,
        "z": 0.0699813961982727
    },
    {
        "x": 0.5022158622741699,
        "y": 0.6600216627120972,
        "z": -0.05473872274160385
    },
    {
        "x": 0.5188428163528442,
        "y": 0.6668921113014221,
        "z": -0.047184836119413376
    },
    {
        "x": 0.5298805832862854,
        "y": 0.6746430993080139,
        "z": -0.03741873428225517
    },
    {
        "x": 0.5128417611122131,
        "y": 0.5767847299575806,
        "z": -0.042949263006448746
    },
    {
        "x": 0.5439818501472473,
        "y": 0.6977795362472534,
        "z": -0.013516067527234554
    },
    {
        "x": 0.5411876440048218,
        "y": 0.7123321294784546,
        "z": -0.01978849433362484
    },
    {
        "x": 0.5367422103881836,
        "y": 0.6941418647766113,
        "z": -0.01572827808558941
    },
    {
        "x": 0.5083479881286621,
        "y": 0.5640692114830017,
        "z": -0.0699813961982727
    },
    {
        "x": 0.5192480683326721,
        "y": 0.6801183819770813,
        "z": -0.03194216266274452
    },
    {
        "x": 0.5100852251052856,
        "y": 0.6771613955497742,
        "z": -0.03855181857943535
    },
    {
        "x": 0.4983963370323181,
        "y": 0.676358163356781,
        "z": -0.043138109147548676
    },
    {
        "x": 0.5155102610588074,
        "y": 0.78371661901474,
        "z": -0.008821864612400532
    },
    {
        "x": 0.5130366683006287,
        "y": 0.7734830975532532,
        "z": -0.027949394658207893
    },
    {
        "x": 0.5102416276931763,
        "y": 0.7598109841346741,
        "z": -0.03248172998428345
    },
    {
        "x": 0.5067644715309143,
        "y": 0.7450240850448608,
        "z": -0.030242538079619408
    },
    {
        "x": 0.504040002822876,
        "y": 0.7336521148681641,
        "z": -0.02784148044884205
    },
    {
        "x": 0.5257933139801025,
        "y": 0.7174907922744751,
        "z": -0.021353229880332947
    },
    {
        "x": 0.530013918876648,
        "y": 0.721293032169342,
        "z": -0.023497994989156723
    },
    {
        "x": 0.5362458825111389,
        "y": 0.7272896766662598,
        "z": -0.0258181169629097
    },
    {
        "x": 0.542262077331543,
        "y": 0.733298122882843,
        "z": -0.023282168433070183
    },
    {
        "x": 0.5499213933944702,
        "y": 0.6378384828567505,
        "z": -0.03067418932914734
    },
    {
        "x": 0.6859070062637329,
        "y": 0.5218522548675537,
        "z": 0.17007043957710266
    },
    {
        "x": 0.5309377908706665,
        "y": 0.7091463804244995,
        "z": -0.017670705914497375
    },
    {
        "x": 0.5357436537742615,
        "y": 0.7109006643295288,
        "z": -0.019302887842059135
    },
    {
        "x": 0.4994897246360779,
        "y": 0.5922003984451294,
        "z": -0.04845280945301056
    },
    {
        "x": 0.5249841809272766,
        "y": 0.5853395462036133,
        "z": -0.03175331652164459
    },
    {
        "x": 0.5017032623291016,
        "y": 0.5868957042694092,
        "z": -0.048587698489427567
    },
    {
        "x": 0.5508281588554382,
        "y": 0.49119341373443604,
        "z": -0.012538108974695206
    },
    {
        "x": 0.5800376534461975,
        "y": 0.5068827271461487,
        "z": -0.009273748844861984
    },
    {
        "x": 0.5337895750999451,
        "y": 0.5554831624031067,
        "z": -0.03903742507100105
    },
    {
        "x": 0.6244727373123169,
        "y": 0.23697546124458313,
        "z": 0.04559312015771866
    },
    {
        "x": 0.6141138076782227,
        "y": 0.2654764950275421,
        "z": 0.018722856417298317
    },
    {
        "x": 0.6015740633010864,
        "y": 0.2933042049407959,
        "z": -0.002434780588373542
    },
    {
        "x": 0.553022563457489,
        "y": 0.739048182964325,
        "z": -0.011789464391767979
    },
    {
        "x": 0.5200030207633972,
        "y": 0.3029317259788513,
        "z": -0.023578928783535957
    },
    {
        "x": 0.5234785676002502,
        "y": 0.26126936078071594,
        "z": -0.012079479172825813
    },
    {
        "x": 0.5282081365585327,
        "y": 0.2111864984035492,
        "z": 0.0028377671260386705
    },
    {
        "x": 0.6065201759338379,
        "y": 0.42652618885040283,
        "z": 0.01524267066270113
    },
    {
        "x": 0.6487610340118408,
        "y": 0.45158588886260986,
        "z": 0.03782340884208679
    },
    {
        "x": 0.5305026173591614,
        "y": 0.4200107753276825,
        "z": 0.010217985138297081
    },
    {
        "x": 0.62929368019104,
        "y": 0.3802124857902527,
        "z": 0.026209302246570587
    },
    {
        "x": 0.5187884569168091,
        "y": 0.4606819152832031,
        "z": -0.02082715556025505
    },
    {
        "x": 0.5193191170692444,
        "y": 0.5484952330589294,
        "z": -0.06944183260202408
    },
    {
        "x": 0.6682400703430176,
        "y": 0.4669412076473236,
        "z": 0.05465778708457947
    },
    {
        "x": 0.6359724998474121,
        "y": 0.4712909758090973,
        "z": 0.02061132900416851
    },
    {
        "x": 0.6125422716140747,
        "y": 0.48207151889801025,
        "z": 0.004613268654793501
    },
    {
        "x": 0.5780960321426392,
        "y": 0.47876378893852234,
        "z": -0.0007832102128304541
    },
    {
        "x": 0.5527375340461731,
        "y": 0.46891283988952637,
        "z": -0.0028478840831667185
    },
    {
        "x": 0.5335975289344788,
        "y": 0.4575711488723755,
        "z": -0.005729490425437689
    },
    {
        "x": 0.49206504225730896,
        "y": 0.42743271589279175,
        "z": -0.03377668187022209
    },
    {
        "x": 0.6638318300247192,
        "y": 0.5204626321792603,
        "z": 0.045970816165208817
    },
    {
        "x": 0.6438210010528564,
        "y": 0.37495702505111694,
        "z": 0.03480185195803642
    },
    {
        "x": 0.48507633805274963,
        "y": 0.5800252556800842,
        "z": -0.08643808215856552
    },
    {
        "x": 0.5287182331085205,
        "y": 0.5027660727500916,
        "z": -0.025467399507761
    },
    {
        "x": 0.6904104948043823,
        "y": 0.41504424810409546,
        "z": 0.1646748036146164
    },
    {
        "x": 0.5189244151115417,
        "y": 0.44397008419036865,
        "z": -0.006454529240727425
    },
    {
        "x": 0.535981297492981,
        "y": 0.5565158128738403,
        "z": -0.022162575274705887
    },
    {
        "x": 0.6207916140556335,
        "y": 0.39882004261016846,
        "z": 0.03051231987774372
    },
    {
        "x": 0.5203088521957397,
        "y": 0.5314489006996155,
        "z": -0.062319591641426086
    },
    {
        "x": 0.6816837787628174,
        "y": 0.5814117789268494,
        "z": 0.15917125344276428
    },
    {
        "x": 0.5299654006958008,
        "y": 0.4095277786254883,
        "z": 0.015094291418790817
    },
    {
        "x": 0.505626916885376,
        "y": 0.5175602436065674,
        "z": -0.07764320075511932
    },
    {
        "x": 0.6280051469802856,
        "y": 0.7188352346420288,
        "z": 0.05249953642487526
    },
    {
        "x": 0.6330757141113281,
        "y": 0.7433276176452637,
        "z": 0.08071871101856232
    },
    {
        "x": 0.684604287147522,
        "y": 0.5216352343559265,
        "z": 0.1075889840722084
    },
    {
        "x": 0.6462678909301758,
        "y": 0.680399477481842,
        "z": 0.07089865207672119
    },
    {
        "x": 0.6725677251815796,
        "y": 0.36849498748779297,
        "z": 0.09366823732852936
    },
    {
        "x": 0.564423143863678,
        "y": 0.8150370121002197,
        "z": 0.013280007988214493
    },
    {
        "x": 0.4841478765010834,
        "y": 0.5849719643592834,
        "z": -0.06366850435733795
    },
    {
        "x": 0.5450417995452881,
        "y": 0.5208853483200073,
        "z": -0.020746219903230667
    },
    {
        "x": 0.6654088497161865,
        "y": 0.4168381690979004,
        "z": 0.06517928093671799
    },
    {
        "x": 0.590720534324646,
        "y": 0.41845858097076416,
        "z": 0.01052149012684822
    },
    {
        "x": 0.5752689838409424,
        "y": 0.4217483401298523,
        "z": 0.006744544953107834
    },
    {
        "x": 0.5470629334449768,
        "y": 0.7137401103973389,
        "z": -0.01795397698879242
    },
    {
        "x": 0.6584377288818359,
        "y": 0.5700057744979858,
        "z": 0.04839885234832764
    },
    {
        "x": 0.535932719707489,
        "y": 0.8580620288848877,
        "z": 0.018749834969639778
    },
    {
        "x": 0.5901596546173096,
        "y": 0.8090269565582275,
        "z": 0.0452154278755188
    },
    {
        "x": 0.6108960509300232,
        "y": 0.7808247804641724,
        "z": 0.06016133725643158
    },
    {
        "x": 0.5594607591629028,
        "y": 0.4204494059085846,
        "z": 0.0068962969817221165
    },
    {
        "x": 0.5448539853096008,
        "y": 0.4160609841346741,
        "z": 0.01038659829646349
    },
    {
        "x": 0.5348285436630249,
        "y": 0.41315096616744995,
        "z": 0.014635661616921425
    },
    {
        "x": 0.6570633053779602,
        "y": 0.3700595498085022,
        "z": 0.052823275327682495
    },
    {
        "x": 0.5459093451499939,
        "y": 0.38705873489379883,
        "z": 0.008268811739981174
    },
    {
        "x": 0.5618008375167847,
        "y": 0.3769768476486206,
        "z": 0.0055136652663350105
    },
    {
        "x": 0.578352689743042,
        "y": 0.37434715032577515,
        "z": 0.005813797935843468
    },
    {
        "x": 0.5946890711784363,
        "y": 0.3787854313850403,
        "z": 0.00919955875724554
    },
    {
        "x": 0.6044329404830933,
        "y": 0.3866068422794342,
        "z": 0.014392858371138573
    },
    {
        "x": 0.685250997543335,
        "y": 0.35945188999176025,
        "z": 0.14125774800777435
    },
    {
        "x": 0.6013486981391907,
        "y": 0.41283950209617615,
        "z": 0.016078995540738106
    },
    {
        "x": 0.5356267094612122,
        "y": 0.622488796710968,
        "z": -0.03671729937195778
    },
    {
        "x": 0.5173216462135315,
        "y": 0.567900538444519,
        "z": -0.05263442546129227
    },
    {
        "x": 0.5040233135223389,
        "y": 0.6132660508155823,
        "z": -0.04826395958662033
    },
    {
        "x": 0.609222948551178,
        "y": 0.754419207572937,
        "z": 0.04014353081583977
    },
    {
        "x": 0.5883061289787292,
        "y": 0.7837833166122437,
        "z": 0.027760546654462814
    },
    {
        "x": 0.5334457159042358,
        "y": 0.8403410911560059,
        "z": 0.0006196550675667822
    },
    {
        "x": 0.649956464767456,
        "y": 0.7020870447158813,
        "z": 0.10953141003847122
    },
    {
        "x": 0.534889817237854,
        "y": 0.4010513424873352,
        "z": 0.01233577262610197
    },
    {
        "x": 0.5047849416732788,
        "y": 0.4689328968524933,
        "z": -0.043488822877407074
    },
    {
        "x": 0.5659552812576294,
        "y": 0.8368421792984009,
        "z": 0.02886665053665638
    },
    {
        "x": 0.6780837178230286,
        "y": 0.5767117738723755,
        "z": 0.10208543390035629
    },
    {
        "x": 0.5167672634124756,
        "y": 0.7260466814041138,
        "z": -0.025103194639086723
    },
    {
        "x": 0.5208956003189087,
        "y": 0.7338860034942627,
        "z": -0.027140049263834953
    },
    {
        "x": 0.5261901617050171,
        "y": 0.7445418834686279,
        "z": -0.029568085446953773
    },
    {
        "x": 0.5308555364608765,
        "y": 0.7558080554008484,
        "z": -0.026546528562903404
    },
    {
        "x": 0.5380204916000366,
        "y": 0.764057993888855,
        "z": -0.013246286660432816
    },
    {
        "x": 0.5315709114074707,
        "y": 0.6875113844871521,
        "z": -0.02502226084470749
    },
    {
        "x": 0.5381854772567749,
        "y": 0.6848469972610474,
        "z": -0.025197619572281837
    },
    {
        "x": 0.5438757538795471,
        "y": 0.680216908454895,
        "z": -0.02486039139330387
    },
    {
        "x": 0.5609771609306335,
        "y": 0.6602768301963806,
        "z": -0.019923385232686996
    },
    {
        "x": 0.6308706998825073,
        "y": 0.5867717862129211,
        "z": 0.014743574894964695
    },
    {
        "x": 0.5052682757377625,
        "y": 0.4424099028110504,
        "z": -0.025993473827838898
    },
    {
        "x": 0.5150940418243408,
        "y": 0.3894573450088501,
        "z": 0.004576173610985279
    },
    {
        "x": 0.5261976718902588,
        "y": 0.3923085629940033,
        "z": 0.010447299107909203
    },
    {
        "x": 0.5271434783935547,
        "y": 0.6840084195137024,
        "z": -0.023484503850340843
    },
    {
        "x": 0.6344372034072876,
        "y": 0.6467710137367249,
        "z": 0.03960396721959114
    },
    {
        "x": 0.4986213147640228,
        "y": 0.3876186013221741,
        "z": -0.015094291418790817
    },
    {
        "x": 0.5478260517120361,
        "y": 0.7738921046257019,
        "z": -0.002476933877915144
    },
    {
        "x": 0.49100086092948914,
        "y": 0.4561474323272705,
        "z": -0.05244557932019234
    },
    {
        "x": 0.5168094635009766,
        "y": 0.5088869333267212,
        "z": -0.04607872664928436
    },
    {
        "x": 0.5206596851348877,
        "y": 0.7966844439506531,
        "z": -0.0043536038137972355
    },
    {
        "x": 0.5823541283607483,
        "y": 0.7164258360862732,
        "z": 0.003682521404698491
    },
    {
        "x": 0.5519264340400696,
        "y": 0.5763837099075317,
        "z": -0.019316377118229866
    },
    {
        "x": 0.5685800909996033,
        "y": 0.7462648749351501,
        "z": 0.0003606223617680371
    },
    {
        "x": 0.5925425291061401,
        "y": 0.5695631504058838,
        "z": -0.014069119468331337
    },
    {
        "x": 0.5675988793373108,
        "y": 0.6014506816864014,
        "z": -0.019248930737376213
    },
    {
        "x": 0.6052139401435852,
        "y": 0.609481930732727,
        "z": -0.0026691537350416183
    },
    {
        "x": 0.5275653600692749,
        "y": 0.8176208138465881,
        "z": -0.005001080222427845
    },
    {
        "x": 0.5271872282028198,
        "y": 0.5232979655265808,
        "z": -0.03550328314304352
    },
    {
        "x": 0.6002707481384277,
        "y": 0.7301381826400757,
        "z": 0.02019316703081131
    },
    {
        "x": 0.5802693963050842,
        "y": 0.7611805200576782,
        "z": 0.01454123854637146
    },
    {
        "x": 0.5908117294311523,
        "y": 0.6822682619094849,
        "z": 0.0024330944288522005
    },
    {
        "x": 0.6528321504592896,
        "y": 0.6126481890678406,
        "z": 0.053416792303323746
    },
    {
        "x": 0.6143171191215515,
        "y": 0.6809878349304199,
        "z": 0.01860145479440689
    },
    {
        "x": 0.6662994623184204,
        "y": 0.6291950345039368,
        "z": 0.0928049311041832
    },
    {
        "x": 0.5790159106254578,
        "y": 0.6356776356697083,
        "z": -0.012875335291028023
    },
    {
        "x": 0.5165182948112488,
        "y": 0.4852861762046814,
        "z": -0.03366876766085625
    },
    {
        "x": 0.5136246681213379,
        "y": 0.5600376725196838,
        "z": -0.07316482067108154
    },
    {
        "x": 0.5241694450378418,
        "y": 0.5657994747161865,
        "z": -0.05535922199487686
    },
    {
        "x": 0.5060061812400818,
        "y": 0.5440362691879272,
        "z": -0.08460357040166855
    },
    {
        "x": 0.529550313949585,
        "y": 0.36073315143585205,
        "z": -0.0004615797661244869
    },
    {
        "x": 0.5592208504676819,
        "y": 0.34212449193000793,
        "z": -0.003009753068909049
    },
    {
        "x": 0.5856924057006836,
        "y": 0.33895447850227356,
        "z": -0.0020402248483151197
    },
    {
        "x": 0.6070327162742615,
        "y": 0.3445601761341095,
        "z": 0.0038781133480370045
    },
    {
        "x": 0.6217014193534851,
        "y": 0.3580175042152405,
        "z": 0.01354979071766138
    },
    {
        "x": 0.6326831579208374,
        "y": 0.40623652935028076,
        "z": 0.037041038274765015
    },
    {
        "x": 0.6868648529052734,
        "y": 0.4685187339782715,
        "z": 0.10769688338041306
    },
    {
        "x": 0.6196091175079346,
        "y": 0.44482165575027466,
        "z": 0.02040899358689785
    },
    {
        "x": 0.6008789539337158,
        "y": 0.4539061188697815,
        "z": 0.010352876037359238
    },
    {
        "x": 0.5773559808731079,
        "y": 0.45461148023605347,
        "z": 0.0038949744775891304
    },
    {
        "x": 0.5542949438095093,
        "y": 0.44924354553222656,
        "z": 0.001448391005396843
    },
    {
        "x": 0.5363388657569885,
        "y": 0.4412934184074402,
        "z": 0.003014811547473073
    },
    {
        "x": 0.5237739086151123,
        "y": 0.43304961919784546,
        "z": 0.002790555590763688
    },
    {
        "x": 0.6885812282562256,
        "y": 0.4681372046470642,
        "z": 0.17309200763702393
    },
    {
        "x": 0.5233026742935181,
        "y": 0.5727588534355164,
        "z": -0.04691505432128906
    },
    {
        "x": 0.5037822127342224,
        "y": 0.49260413646698,
        "z": -0.058272864669561386
    },
    {
        "x": 0.5016013383865356,
        "y": 0.562420666217804,
        "z": -0.08633016794919968
    },
    {
        "x": 0.4935612082481384,
        "y": 0.5749549269676208,
        "z": -0.07953166961669922
    },
    {
        "x": 0.5019314885139465,
        "y": 0.5661467909812927,
        "z": -0.0780748501420021
    },
    {
        "x": 0.5192364454269409,
        "y": 0.5810445547103882,
        "z": -0.04100682958960533
    },
    {
        "x": 0.4904146194458008,
        "y": 0.578006386756897,
        "z": -0.084010049700737
    },
    {
        "x": 0.48947736620903015,
        "y": 0.5826656222343445,
        "z": -0.06388432532548904
    },
    {
        "x": 0.5231043696403503,
        "y": 0.41119757294654846,
        "z": 0.012807890772819519
    },
    {
        "x": 0.5131849050521851,
        "y": 0.41879406571388245,
        "z": 0.0026168832555413246
    },
    {
        "x": 0.5070589184761047,
        "y": 0.42330390214920044,
        "z": -0.008727440610527992
    },
    {
        "x": 0.6102336049079895,
        "y": 0.3926270306110382,
        "z": 0.020152699202299118
    },
    {
        "x": 0.6198272705078125,
        "y": 0.3814481496810913,
        "z": 0.020678773522377014
    }
]