
class TrieNode {
    children : Map<string , TrieNode>
    isCompleteNode : boolean
    // Only for Leaf Node -> complete words
    frequency ?: number
    // cache ?: TrieNode[] Wait for now

    constructor() {
        this.children = new Map();
        this.isCompleteNode = false;
    }
}

class Trie {
    root : TrieNode

    constructor() {
        this.root = new TrieNode();
    }
    insert(word : string) :void {
        let node : TrieNode | undefined = this.root;

        // Clean the word //

        for(let i = 1; i <= word.length ; i++) {
            const key : string = word.slice(0,i);            
            if (!node?.children.has(key)) {
                // Time to insert
                node?.children.set(key , new TrieNode());
            }
            node = node?.children.get(key);
        }
        if (node) { // Using Optional chaining in assignment is invalid
            node.isCompleteNode = true;
        }

    }
    
    search(word : string) : boolean {
        let node : TrieNode | undefined = this.root;
        for (let i = 1;i<= word.length;i++) {
            const key : string = word.slice(0,i);    
            if (!node?.children.has(key)) {
                return false;
            }
            node = node?.children.get(key);

        }
        return true;
    }
}

let T:Trie = new Trie();

T.insert("apple");
T.insert("mango");
T.insert("appy")

console.log(T.root.children);

console.log(T.search("appy"))
console.log(T.search("e"))

