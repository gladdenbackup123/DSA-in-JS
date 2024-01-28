function check(str,s,e){
    if(s>e) //checking complete all pass
        return true;
    if( str.charAt(s) != str.charAt(e) )
        return false;

    return check(str,s+1,e-1);
}

let str = "madim";
let n = str.length;
console.log(check(str,0,n-1));