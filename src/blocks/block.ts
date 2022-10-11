import crypto from "crypto";

interface BlockShape {
	hash: string
	prevHash: string
	height: number
	data: string
}

export function calculateHash(prevHash: string, height: number, data: string): string {
	const toHash = `${prevHash}${height}${data}`;
	return crypto.createHash("sha256").update(toHash).digest("hex"); 
}

export class Block implements BlockShape {
	public readonly hash: string;
	constructor(
		public prevHash: string,
		public height: number,
		public data: string
	) {
		this.hash = calculateHash(prevHash, height, data);
	}
}

