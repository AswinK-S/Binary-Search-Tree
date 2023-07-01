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
        else{
        this.insertNode(this.root,newNode)
        }
    }    
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node;
            }
            else{
                this.insertNode(root.left, node);
            }
        }
        else{
            if(root.right===null){
                root.right=node;
            }
            else{
                this.insertNode(root.right, node);
            }
        }
    }


//    dfsPreOrder(root){
//     if(root){
//         console.log(root.value);
//         this.dfsPreOrder(root.left) ;
//         this.dfsPreOrder(root.right );
//     }
//    }
   

    DFSpreOrder(){
        let data =[];
        function traversal(node){
            data.push(node.value);
            if(node.left){
                traversal(node.left);
            }
            if(node.right){
                traversal(node.right);
            }
        }
        traversal(this.root);
        return data;
    }
}


let bst1 = new binaryST();
bst1.insert(10);
bst1.insert(90);
bst1.insert(6);
bst1.insert(-3);
// bst1.dfsPreOrder(bst1.root);
console.log(bst1.DFSpreOrder());