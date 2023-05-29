'use strict';

// Implement your own Graph. The graph should
// Per instructor disregard this bit:  "be represented as an adjacency list, and should" 
// include the following methods:

class Graph {

  constructor(directed)
  {
    console.log(numberOfNodes); // this log is temporary to make linter happy
    this.numberOfNodes=numberOfNodes;
    this.adjacencyList=new Map ();
  }

  addNode = (value) => {
   return new Node(value);
  // Add a node to the graph
  }

  addEdge = () => {
  // Arguments: 2 nodes to be connected by the edge, weight (optional)
  // Returns: nothing
  // Adds a new edge between two nodes in the graph
  // If specified, assign a weight to the edge
  // Both nodes should already be in the Graph
  }

  getNodes = () => {
  // Arguments: none
  // Returns all of the nodes in the graph as a collection (set, list, or similar)
  // Empty collection returned if there are no nodes
  }  

  getNeighbors = (node) =>{
    const edges = this.get_edges(node);
    return edges.map(edge => edge.to);
  // Returns a collection of edges connected to the given node
  // Include the weight of the connection in the returned collection
  // Empty collection returned if there are no nodes
  }

  size = () => {
    if (this.numberOfNodes !=0) {
      return this.numberOfNodes;
    }

    else {
      return 0;
    }
  }

}

console.log(Graph); // This log is temporary to make linter happy


