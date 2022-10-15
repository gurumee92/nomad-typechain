import { Block }  from "./block";
import { BlockChain } from "./blockchain";

test("Blockchain Create test", () => {
    const blockchain = new BlockChain();
    const blocks = blockchain.getBlocks();
    expect(blocks.length).toBe(0);
});


test("Blockchain addBlock test #1 - one block", () => {
    const blockchain = new BlockChain();
    const data = "XXXX";
    blockchain.addBlock(data);
    
    const blocks = blockchain.getBlocks();
    expect(blocks.length).toBe(1);

    const newBlock = blocks[0];
    expect(newBlock.data).toEqual(data);
    expect(newBlock.prevHash).toEqual("");
    expect(newBlock.height).toEqual(1);
});

test("Blockchain addBlock test #2 - two block", () => {
    const blockchain = new BlockChain();

    const datas = ["XXXX", "YYYY"]
    datas.forEach(d => blockchain.addBlock(d))

    const blocks = blockchain.getBlocks();
    expect(blocks.length).toBe(2);

    const block1 = blocks[0];
    expect(block1.data).toEqual(datas[0]);
    expect(block1.prevHash).toEqual("");
    expect(block1.height).toEqual(1);


    const block2 = blocks[1];
    expect(block2.data).toEqual(datas[1]);
    expect(block2.prevHash).toEqual(block1.hash);
    expect(block2.height).toEqual(2);
});

test("Blockchain fake add test", () => {
    const blockchain = new BlockChain();
    const blocks = blockchain.getBlocks();
    const prevHash = "FAKE"
    const height = 1;
    const data = "XXXX";
    const fakeBlock = new Block(prevHash, height, data);
    blocks.push(fakeBlock);
    
    const newBlocks = blockchain.getBlocks();
    
    expect(newBlocks.length).toBe(0);
    expect(newBlocks).not.toEqual(blocks);
});