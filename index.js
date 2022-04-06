class BinaryTreeNode {

  constructor(value) {
    this.value = value;
    this.next = null;
  }
  add(node) {               //add will add a new node
    if (!this.next) {       //if currently node, will move to next node
      this.next = node;  
    } else {
      this.next.add(node);  //if no node, will add node
    }
  }

  getList() {                               //added the getList to bottom of code to see console log results
    if(!this.next) return this.value;           //will continue through list to original node
    return `${this.value} ${this.next.getList()}`;
    
  }
}
    
const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');
  
// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);
  
console.log(B);

const root = new BinaryTreeNode('A');
const nodeB = new BinaryTreeNode('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new BinaryTreeNode('C');
const nodeD = new BinaryTreeNode('D');
const nodeE = new BinaryTreeNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); 
