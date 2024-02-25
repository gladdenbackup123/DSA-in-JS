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

    //Method to delete the last node
    delete(){
        if(this.head==null){
            console.log("List is empty , cannot delete node.");
        }
        else if(this.head.next==null){
            this.head = null;
            console.log("Last node is deleted , list is empty now");
        }
        else{
            let curr = this.head;
            while(curr.next.next != null){
                curr = curr.next;
            }
            // now curr is at second last node : secondLast -> null
            curr.next = null;
        }
    }

    printList(){
        let curr = this.head;
        while(curr != null){
            console.log(curr.data);
            curr = curr.next;
        }
    }
    printKthNodefromEnd(k){
        //find length
        let curr = this.head;
        let n = 0;
        while(curr != null){
            n++;
            curr = curr.next;
        }

        //jump n-k times
        curr = this.head;
        for(let i=1 ; i<=n-k ; i++){
            curr = curr.next;
        }

        //we have reached the n-k+1 th node
        //we have reached the kth node from the end
        console.log(curr.data);
    }

    deleteKthNodefromEnd2(k){
        let slow = this.head;
        let fast = this.head;

        for(let i=1 ; i<=k ; i++){
            fast = fast.next;
        }
        // now my slow is at start and fast is at the kth node
        // we can start moving now

        while( fast.next!=null ){
            slow = slow.next;
            fast = fast.next;
        }
        
        slow.next = slow.next.next; 
    }
}

let LL = new LinkedList();
LL.append(1);
LL.append(2);
LL.append(3);
LL.append(4);
LL.append(5);

LL.deleteKthNodefromEnd2(2);
LL.printList();