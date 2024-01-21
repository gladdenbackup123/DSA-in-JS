let M = [   [1,0,0],
            [0,1,0],
            [0,0,1] ]
let r = M.length;
let c = M[0].length; //columns = length of first row

for(let i=0 ; i<r ; i++){
    for( j=0 ; j<c ; j++){
        if(i==j && M[i][j]!=1){ //if main diagonal element and value is not 1 , then it is not an identity matrix
            console.log("Not an Identity Matrix");
            return;
        }
        else if(i!=j &&  M[i][j]!=0 ){ //non-diagonal element and value is not 0 , then it is not an identity matrix
            console.log("Not an Identity Matrix");
            return;
        }
    }
}
console.log("Identity Matrix");

let M = [ [1,0,3],
            [7,1,4],
            [5,8,1] ]
let X = 8;
let r = M.length;
let c = M[0].length; //columns = length of first row

for(let i=0 ; i<r ; i++){
    for( j=0 ; j<c ; j++){
        if(M[i][j] === X){
            console.log("Found");
            return;
        }        
    }
}
console.log("Not Found");