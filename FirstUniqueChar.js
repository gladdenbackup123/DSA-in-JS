let s = "abcdbfha";
let n = s.length;

for(let i=0 ; i<n ; i++){
    let ch = s.charAt(i); //ch =a // ch =b // ch=c
    if(s.indexOf(ch) === s.lastIndexOf(ch)){
        console.log(ch);
        return;
    }
}