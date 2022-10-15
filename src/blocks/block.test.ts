import { Block, calculateHash }  from "./block";

test("Block Create test", () => {
    const prevHash = "TEST";
    const height = 1;
    const data = "XXXX";
    const hash = calculateHash(prevHash, height, data);
    const block = new Block(prevHash, height, data);
    expect(block.hash).toEqual(hash);
});