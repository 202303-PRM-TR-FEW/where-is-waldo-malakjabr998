const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]];

const whereIsWaldo = (matrix) => {
  for ( let i=1; i<example.length+1; i++){
    for (let j=1; j<example[i].length+1; j++){
      if (example[i][j]==="B"){
        return [i+1 , j+1 ]
      }
    }
  }
  return null 
}
console.log(whereIsWaldo(example))

