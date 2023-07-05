// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class Btree{
//     constructor(){
//         this.root= null
//     }
//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         const node = new Node(value)

//         if(this.isEmpty()){
//             this.root = node
//         }
//         else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//          if(node.value < root.value){
//             if(root.left === null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//          }
//          else{
//             if(root.right === null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//          }
//     }
//     search(root,value){
//         if(!root){
//             return false
//         }
//        if(value === root.value){
//           return true
//          }else if(value < root.value){
//                  return this.search(root.left, value)
//          }else{
//                 return this.search(root.right , value)
//          }
//     }
//     preOrder(root){
//          if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//          }
//     }
//     inOrder(root){
//         if(root){
//             this.preOrder(root.left)
//             console.log(root.value)
//             this.preOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }
// }

// const obj = new Btree()

// obj.insert(10)
// obj.insert(5)
// obj.insert(12)
// obj.insert(4)
// obj.insert(6)
// obj.insert(11)
// obj.insert(18)

// // console.log(obj.search(8))
// console.log("pre-order --------------")
// obj.preOrder(obj.root)
// console.log("in-order ---------------")
// obj.inOrder(obj.root)
// console.log("post order -------------")
// obj.postOrder(obj.root)
// console.log(obj.search(obj.root, 5))



//--------------------------------------


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

    insert(value) {
        const nod=new Node(value)
        if (this.root===null) {
            this.root=nod
        } else {
            this.insertvalue(this.root,nod)
        }
    }
    insertvalue(root, nod) {
        if (nod.value < root.value) {
            if (root.left == null) {
                root.left=nod
            } else {
                this.insertvalue(root.left,nod)
            }
        } else {
            if (root.right == null) {
                root.right=nod
            } else {
                this.insertvalue(root.right,nod)
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
