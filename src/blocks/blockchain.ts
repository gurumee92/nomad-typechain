import { Block } from './block';

export class BlockChain {
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
