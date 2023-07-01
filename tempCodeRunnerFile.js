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
        } 
        this.insertNode(this.root,newNode);
    }
        insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode;
            }
            else{
                this.insertNode(root.left, newNode);
            }
        }
        else{
            if(root.right===null){
                root.right=newNode;
            }
            else{
                this.insertNode(root.right, newNode);
            }
        }
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
bst1.insert(-3);
console.log(bst1)
bst1.dfsPreOrder(bst1.root);