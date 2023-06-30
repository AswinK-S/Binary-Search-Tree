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

    insertion(value){
        let newNode = new Node(value);
        if(this.root===null){
            this.root = newNode;
            return;
        }
        let curr = this.root;
        while(true){
            if(value === curr.value){
                console.log("Value already exists");
                return;
            }
          if(value < curr.value){
              if(curr.left === null){
                     curr.left = newNode;
                     return;
               }
             curr=curr.left;
           }
           else if (value > curr.value){
               if(curr.right === null){
                    curr.right = newNode;
                    return;
                }
             curr=curr.right;
           }
        }
    }
}  

let bst =new binaryST();
bst.insertion(8);
bst.insertion(20);
bst.insertion(15)
bst.insertion(34);
bst.insertion(7);
bst.insertion(7)
console.log(bst)