const nota = []

nota[0] = 10
nota[1] = 8
nota[2] = 6.5
nota[3] = 9
nota[4] = 7

console.log(nota)

console.log("primeira e ultima:", + nota[0],"e",+ nota[4])
console.log(nota.push(5))
console.log(nota.shift())
console.log(nota)

let result = ''
for (const index in nota) { 
    result += nota[index] + ' ';
} 
console.log(result);

const media = nota.reduce((soma,nota)=>soma+nota,0)/nota.length;
console.log("media: ", media)

const acima = nota.filter(nota =>nota > 7);
console.log("notas acima de 7: ", acima)

nots.sort((a,b)=> a-b);
console.log("notas crescente:", nota)

const notaseis = nota.includes(6.5);
console.log("notas seis: ", notaseis)

const indexoito = nota.indexOf(8);
console.log("index nota 8: ", indexoito)
