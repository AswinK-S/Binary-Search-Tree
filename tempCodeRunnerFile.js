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

    

    dfsPreOrder(root){
        if(root){
            console.log(root.value);
            this.dfsPreOrder(root.left) ;
            this.dfsPreOrder(root.right );
        }
    }

    dfsPostOrder(){
        let data=[];
        function traversal(node){
            if(node.left){
                traversal(node.left);
            }
            if(node.right){
                traversal(node.right);
            }
            data.push(node.value);
        }
        traversal(this.root)
        console.log("post order",data)

    }

    inOrder(root){
        if(root.left){
            this.inOrder(root.left);
        }
        console.log(root.value);
        if(root.right){
            this.inOrder(root.right);
        }
    }
}


let bst1 = new binaryST();
bst1.insert(10);
bst1.insert(8);
bst1.insert(6);
bst1.insert(3);
bst1.insert(15);
bst1.insert(20);

console.log(bst1)
bst1.dfsPreOrder(bst1.root);
bst1.dfsPostOrder()
bst1.inOrder(bst1.root)