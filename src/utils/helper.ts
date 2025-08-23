/**
 * Convert camelCase to kebab-case.
 */
export function toKebabCase(camelCaseString: string) {
	return camelCaseString.replace(
		/[A-Z]/g,
		(letter) => `-${letter.toLowerCase()}`
	);
}
