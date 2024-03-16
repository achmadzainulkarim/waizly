const n = 6;
const arr = [-4, 3, -9, 0, 4, 1];

function arrayProportion(n, arr){
  console.log((arr.filter(i => i>0).length / n).toFixed(6));
  console.log((arr.filter(i => i==0).length / n).toFixed(6));
  console.log((arr.filter(i => i<0).length / n).toFixed(6));
}

arrayProportion(n, arr)
