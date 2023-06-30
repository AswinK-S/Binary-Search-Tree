class Node{
    constructor(value){
        this.value= value;
        this.left = null;
        this.right = null;
    }
}

class bst{
    constructor(){
    this.root = null;
    }
}

let root= new Node(15);
root.left = new Node(10);
root.right = new Node(17);
root.left.left = new Node(5)
root.left.right = new Node(7)
root.right.left= new Node(11)
root.right.right= new Node(13)


function displayBst(node){
    if(node === null){
        return;
    }
    console.log(node.value);
    displayBst(node.left);
    displayBst(node.right);
}

displayBst(root)