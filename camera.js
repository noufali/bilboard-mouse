var img;
var textArray = ("Always Designing for People. Always Designing for People Always Designing for People Always Designing for People Always Designing for People Always Designing for People").split('');
var ww;
let div = $("#myCanvas");
for (var i = 0; i < textArray.length; i++) {
  ww = document.createElement('span');
  ww.textContent = textArray[i];
  let id = 'txt' + i;
  ww.setAttribute('id', id);
  ww.setAttribute('class', 'font1');
  $("#textDiv").append(ww);
}

var xspacing = 16;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;
var theta2 = 0.0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var attractorX, attractorY;
var theta = 10;
count = 1;

function setup(){
  let cv = createCanvas(2173, 1200);
  cv.parent('p5');
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));

}
var x,y,x2,y2;
function draw(){
  clear();
  x = radians(60000 * sin(theta))+800;
  y = radians(10000 * tan(theta))+500;
  // if (x < 2000){
  //   y = 500;
  // } else {
  //   y = radians(100 * sin(theta))+500;
  // }
  ellipse(x,y, 15, 15);

  // rotate(PI / 3.0);
  fill('#A67DFC');
  stroke('#A67DFC');

  var ptList = {};
  var distances = {};
  var xCorner, yCorner, w, h;
  var letterDiv;
  var shuffle, c;

  // finding center of each letter
  for(let i=0;i<textArray.length;i++) {
    letterDiv = $("#txt" + i);
    let boardDiv = $("#myCanvas");
    let c = document.getElementById("output2");
    let ctx2 = c.getContext("2d");
    xCorner = letterDiv.offset().left - boardDiv.offset().left;
    yCorner = letterDiv.offset().top - boardDiv.offset().top;
    w = letterDiv.width() / 2;
    h = letterDiv.height() / 2;
    ptList[i] = {'x':xCorner+w,'y':yCorner+h, 'index': i, 'letter': letterDiv.text()};
  }

  for (let l=0;l<textArray.length;l++)
  {
    let text = ptList[l].letter;
    let letter = ptList[l];
    let distance = dist(letter.x,letter.y,x,y);
    // console.log(distance);
    distances[l] = {'index':letter.index,'dist':distance, 'letter': text};
  }
  // attractor point
  for (let n=0;n<textArray.length;n++){
    let letterDiv = document.getElementById("txt" + n);
    let text = distances[n].letter;
    var impact = 781.0249;
    let hi = map(distances[n].dist,0,impact/2,500,-100);
    if (hi > 150){
      hi = 150;
    }

    if (hi < 0){
      hi = 0;
    }
    letterDiv.style.fontVariationSettings = " 'wght' " + hi;
  }
  theta += 0.03;
}


// // distance formula
// function diff (num1, num2) {
//   if (num1 > num2) {
//     return (num1 - num2);
//   } else {
//     return (num2 - num1);
//   }
// };
// function distt (x1, y1, x2, y2) {
//   var deltaX = diff(x1, x2);
//   var deltaY = diff(y1, y2);
//   var dist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
//   return (dist);
// };
// // map formula
// function map (num, in_min, in_max, out_min, out_max) {
//   return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
// }

// var boop = true;
// var font = 1;
//
// function animate(){
//   var ptList = {};
//   var distances = {};
//   var xCorner, yCorner, w, h;
//   var letterDiv;
//   var shuffle, c;
//
//   // finding center of each letter
//   for(let i=0;i<textArray.length;i++) {
//     letterDiv = $("#txt" + i);
//     let boardDiv = $("#myCanvas");
//     let c = document.getElementById("output2");
//     let ctx2 = c.getContext("2d");
//     xCorner = letterDiv.offset().left - boardDiv.offset().left;
//     yCorner = letterDiv.offset().top - boardDiv.offset().top;
//     w = letterDiv.width() / 2;
//     h = letterDiv.height() / 2;
//     ptList[i] = {'x':xCorner+w,'y':yCorner+h, 'index': i, 'letter': letterDiv.text()};
//   }
//
//   for (let l=0;l<textArray.length;l++)
//   {
//     let text = ptList[l].letter;
//     let letter = ptList[l];
//     let distance = distt(letter.x,letter.y,mouseX,mouseY);
//     console.log(distance);
//     distances[l] = {'index':letter.index,'dist':distance, 'letter': text};
//
//     let c = document.getElementById("output2");
//     let ctx2 = c.getContext("2d");
//     ctx2.beginPath();
//     ctx2.arc(mouseX,mouseY, 5, 0, 2 * Math.PI);
//     ctx2.fillStyle = '#A67DFC';
//     ctx2.fill();
//     ctx2.lineWidth = 1;
//   }
//   // attractor point
//   for (let n=0;n<textArray.length;n++){
//     let letterDiv = document.getElementById("txt" + n);
//     let text = distances[n].letter;
//     var impact = 781.0249;
//     let hi = map(distances[n].dist,0,impact/2,500,-100);
//     if (hi > 150){
//       hi = 150;
//     }
//
//     if (hi < 0){
//       hi = 0;
//     }
//     letterDiv.style.fontVariationSettings = " 'wght' " + hi;
//   }
//   requestAnimationFrame(animate);
// }

//animate();
