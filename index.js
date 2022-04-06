class BinaryTreeNode {

  constructor(value) {
    this.value = value;
    this.next = null;
    this.left = null;
    this.right = null;
  }
  add(node) {
    if (node.value === this.value) {
      return;
    }
    if(node.value < this.value) {
      if(!this.left) this.left = node;
      else this.left.add(node);  
    } else {
      if(!this.right) this.right = node;
      else this.right.add(node); 
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

class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }
    
  add(node) {
    if (node.value === this.value) {
      return;
    }
    if(node.value < this.value) {
      if(!this.left) this.left = node;
      else this.left.add(node);  
    } else {
      if(!this.right) this.right = node;
      else this.right.add(node); 
    }
  }
    
  //If the name is not equal to person name return that name
  // Not sure if this is correct. Modeled after the getlist function
  findPerson(name) {
    if(this.value === name) return this.person;
    return this.person.name.findPerson();
  }
}

  
const p1 = new BinaryTreeNode('Nelson');
const p2 = new BinaryTreeNode('Smith');
const p3 = new BinaryTreeNode('Brook');
const p4 = new BinaryTreeNode('Dude');
  
// B will be the root of the tree:
p1.add(p2);
p1.add(p3);
p1.add(p4);
  
console.log(p1);
  
const Nelson = { 
  name: 'Nelson', 
  phone: '555-1212', 
  address: '123 Main St' 
};
  
const person = findPerson('Nelson');
  
  
const person2 = root.findPerson('Foo');
// person2 is null
