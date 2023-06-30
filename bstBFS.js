class Node{
    constructor(value){
        this.value=value;
        this.left = null;
        this.right = null;
    }
}

class binaryST{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        if(this.root===null){
            this.root = newNode;
            return;
        }

        let curr = this.root;
        while(true){
            if(value < curr.value){
                if(curr.left===null){
                    curr.left=newNode;
                    return;
                }
                curr=curr.left;
            }
            else if(value > curr.value){
                if(curr.right===null){
                    curr.right=newNode;
                    return;
                }
                curr = curr.right;
            }
        }
    }

    search(data){
        if(this.root === null){
            return "empty";
        }
        let curr = this.root;
        if(curr.value === data){
            return "found";
        }
        while(curr.left !== null || curr.right !== null){
            if(data < curr.value){
                if(data === curr.left.value){
                    return "found";
                }
                curr=curr.left;
            }
            else if(data > curr.value){
                if(data === curr.right.value){
                    return "found";
                }
                curr = curr.right;
            }
        }
        return "element not found"
    }

    breadthFS(){
        let node = this.root;
        let queue = [];
        let checked =[]
        queue.push(node);
        while(queue.length){
            node=queue.shift();
            checked.push(node.value)
            if(node.left ){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        return checked;
    }
    
}

let bs=new binaryST();
bs.insert(10);
bs.insert(20);
bs.insert(80);
bs.insert(1);
bs.insert(8);
console.log(bs)
console.log(bs.search(10))
console.log(bs.breadthFS())