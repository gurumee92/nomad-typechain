import { Block, BlockChain }  from "./blocks";

const blockChain = new BlockChain();
blockChain.addBlock("First");
blockChain.addBlock("Second");
blockChain.addBlock("Third");
blockChain.getBlocks().push(new Block("XXXXX", 5151, "HACKED"));

console.log(blockChain.getBlocks());
