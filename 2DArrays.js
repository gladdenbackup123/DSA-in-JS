let arr = [[1,2],[4,5],[7,8]]; //3 x 2

let rows = arr.length; 
let cols = arr[0].length; 

for(let i=0 ; i<rows ; i++){ 
    for(let j=0 ; j<cols ; j++){
        console.log(arr[i][j]);
    }
}