export function init(config) {
	return true;
}

// @ts-check
/**
 * exit 
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
	return code + 1;
}
