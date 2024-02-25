let stack = [];

//push
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack);

//pop
stack.pop(); //30 removed
stack.pop(); //20 removed
stack.pop(); //10 removed
console.log(stack);

if(stack.length==0)
    console.log("Stack is Empty");