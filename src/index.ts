import crypto from "crypto";

interface BlockShape {
	hash: string
	prevHash: string
	height: number
	data: string
}

class Block implements BlockShape {
	public readonly hash: string;
	constructor(
		public prevHash: string,
		public height: number,
		public data: string
	) {
		this.hash = Block.calculateHash(prevHash, height, data);
	}

	static calculateHash(prevHash: string, height: number, data: string): string {
		const toHash = `${prevHash}${height}${data}`;
		return crypto.createHash("sha256").update(toHash).digest("hex"); 
	}
}

class BlockChain {
	private blocks: Block[]
	constructor() {
		this.blocks = [];
	}

	private getPreviousHash() {
		if (this.blocks.length === 0) {
			return "";
		} else {
			return this.blocks[this.blocks.length-1].hash;
		}
	}

	public addBlock(data: string) {
		const block = new Block(this.getPreviousHash(), this.blocks.length + 1, data);
		this.blocks.push(block);
	}

	public getBlocks() {
		return [...this.blocks];
	}
}

const blockChain = new BlockChain();
blockChain.addBlock("First");
blockChain.addBlock("Second");
blockChain.addBlock("Third");

blockChain.getBlocks().push(new Block("XXXXX", 5151, "HACKED"));

console.log(blockChain.getBlocks());
