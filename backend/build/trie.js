"use strict";
class TrieNode {
    // cache ?: TrieNode[] Wait for now
    constructor() {
        this.children = new Map();
        this.isCompleteNode = false;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let node = this.root;
        // Clean the word //
        for (let i = 1; i <= word.length; i++) {
            const key = word.slice(0, i);
            if (!(node === null || node === void 0 ? void 0 : node.children.has(key))) {
                // Time to insert
                node === null || node === void 0 ? void 0 : node.children.set(key, new TrieNode());
            }
            node = node === null || node === void 0 ? void 0 : node.children.get(key);
        }
        if (node) { // Using Optional chaining in assignment is invalid
            node.isCompleteNode = true;
        }
    }
    search(word) {
        let node = this.root;
        for (let i = 1; i <= word.length; i++) {
            const key = word.slice(0, i);
            if (!(node === null || node === void 0 ? void 0 : node.children.has(key))) {
                return false;
            }
            node = node === null || node === void 0 ? void 0 : node.children.get(key);
        }
        return true;
    }
}
let T = new Trie();
T.insert("apple");
T.insert("mango");
T.insert("appy");
console.log(T.root.children);
console.log(T.search("appy"));
console.log(T.search("e"));
