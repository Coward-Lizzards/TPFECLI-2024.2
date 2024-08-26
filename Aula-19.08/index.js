function calcCirc(radius){
    let circ = 2 * Math.PI * radius;
    let area = Math.PI * radius ** 2;
    
    return ['Circumference:', circ , 'Area:',area];

}

console.log(Math.PI)
console.log(calcCirc(20))