function check(s){
    let stack = [];
    let n = s.length;

    for(let i=0 ; i<n ; i++){
        let ch = s.charAt(i);
        if(ch=='(' || ch=='[' || ch=='{' ) // if opening bracket -> push
            stack.push(ch);
        else{ //closing bracket
            if(stack.length==0)
                return false;
            let peek = stack[stack.length-1];
            if( ch==')' && peek=='(' || ch==']' && peek=='[' || ch=='}' && peek=='{'  )
                stack.pop();
        }
    }
    //after iteration , stack should be empty
    if(stack.length==0)
        return true;
    else 
        return false;
}
let s = "[{{))]";
console.log(check(s));
