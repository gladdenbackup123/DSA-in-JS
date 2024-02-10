function check(s){
    let n = s.length;
    let stack = [];

    for(let i=0 ; i<n ; i++){
        let ch = s.charAt(i);
        if(ch=='(')
            stack.push(ch);
        else{ // ')'
            if(stack.length > 0) //there exist opening bracket
                stack.pop();
            else // stack is empty
                return false;
        }
    }

    // if stack is empty - all pairs are checked - valid parenthesis
    if(stack.length==0)
        return true;
    else
        return false;
}

let s = "(()())";
console.log(check(s))