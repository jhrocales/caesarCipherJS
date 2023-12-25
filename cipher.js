function rot13(str) {
let solved = "";
  for (let i = 0; i < str.length; i++){
    let asciiNumerical = str[i].charCodeAt();
    if (asciiNumerical >= 65 && asciiNumerical <= 77){
      solved += String.fromCharCode(asciiNumerical + 13);
    }else if (asciiNumerical >= 78 && asciiNumerical <= 90){
      solved += String.fromCharCode(asciiNumerical - 13);
    } else {
      solved += str[i];
    }
  } 
return solved;
}

console.log(rot13("SERR PBQR PNZC"));
