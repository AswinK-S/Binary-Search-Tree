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
        let node=new Node(value);
        if(this.root==null){
            this.root=node;
        }
        else{
            this.insertNode(this.root,node);
        }
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left == null){
                root.left = node;
            }
            else{
                this.insertNode(root.left,node)
            }
        }
        else{
            if(root.right==null){
                root.right= node;
            }
            else{
            this.insertNode(root.right,node);
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

    dfsPreOrder(root){
        if(root){
            console.log(root.value);
            this.dfsPreOrder(root.left) ;
            this.dfsPreOrder(root.right );
        }
    }
}


let bst1 = new binaryST();
bst1.insert(10);
bst1.insert(90);
bst1.insert(6);
console.log(bst1)
console.log(bst1.search(6))
console.log(bst1.search(5))
bst1.dfsPreOrder(bst1.root);
