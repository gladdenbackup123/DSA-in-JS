class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    // Method to add a node to the end of the list 
    append(data){
        let newnode = new Node(data);

        if(this.head==null){ //if linked list is empty
            this.head = newnode;
        }
        else{
            let curr = this.head;
            while(curr.next != null){
                curr = curr.next;
            }
            //now curr is last node
            curr.next = newnode;
        }
    }

    printList(){
        let curr = this.head;
        while(curr != null){
            console.log(curr.data);
            curr = curr.next;
        }
    }
}

let LL = new LinkedList();
LL.append(1);
LL.append(2);
LL.append(3);
LL.printList();