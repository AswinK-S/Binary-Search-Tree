class Node{
    constructor(value){
        this.value=value;
        this.left = null;
        this.right = null;
    }
}

class binaryST{
    constructor(){
        this.root= null;
    }

    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return;
        } 
        let curr = this.root;
        while(true){
            if(curr.value === value){
                console.log("value alredy exists")
                return;
            }
            if( value< curr.value){
                if(curr.left === null){
                    curr.left = newNode;
                    return;
                }
                curr=curr.left;
            }
            else if(value > curr.value){
                if(curr.right ===null){
                    curr.right = newNode;
                }
                curr= curr.right;
            }
        }
    }

    search(value){
        if(this.root===null){
            return "empty";
        }
        let curr = this.root;
        if(curr.value === value){
            return "found";
        }
        while(curr.left !==null || curr.right!==null){
            if(value < curr.value ){
                if(curr.left.value===value){
                    return "found"
                }
                curr=curr.left
            }
            else if(value > curr.value){
                if(curr.right.value ===value){
                    return "found";
                }
                curr= curr.right;
            }
        }
        return "not found"
    }
}


let bst1 = new binaryST();
bst1.insert(10);
bst1.insert(90);
bst1.insert(6);
console.log(bst1)
console.log(bst1.search(6))
console.log(bst1.search(5))