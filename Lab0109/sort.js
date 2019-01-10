var txt;

function preload(){
  // p5 has a function named "loadStrings"
  txt = loadStrings("words.txt");
}
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200, 200, 200);
  fill(200, 30, 150);
  console.log(txt);
// bubbleSort();
mySort();
console.log(txt);

}


// function bubbleSort (){
//   for (var i = 0; i<txt.length; i++){
//     for (var j = 0; j <txt.length-i-1; j++){
//       if (txt[j] >txt[j+1]){
//           var temp = txt[j];
//            txt[j] =txt[j+1];
//              txt[j+1] = temp; //swap
//            }
//
//
//
//     }
//   }
//
//
//     }
function mySort(){
  var min, temp,
      len = txt.length;
  for(var i = 0; i < len; i++){
    min = i;
    for(var  j = i+1; j<len; j++){
       if(txt[j]<txt[min]){
          min = j;
       }
    }
    temp = txt[i];
    txt[i] = txt[min];
    txt[min] = temp;
  }
  return txt;
}
