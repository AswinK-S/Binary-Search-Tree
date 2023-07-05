class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binaryST{
    constructor(){
        this.root = null;
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


    min(root){
      if(!root.left){
        return root.value;
      }else{
        return this.min(root.left)
      }
    }

    max(root){
      if (!root.right){
        return root.value;
    }else{
      return  this.max(root.right)
    }
  }

  height(node) {
    if (!node) {
      return 0;
    } else {
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }


  

}  

let bst =new binaryST();
bst.insert(8);
bst.insert(20);
bst.insert(15)
bst.insert(34);
bst.insert(7);
console.log(bst)
console.log(bst.min(bst.root))
console.log(bst.max(bst.root))
console.log(bst.height(bst.root));