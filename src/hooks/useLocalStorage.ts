import { useState, useEffect } from "react";

/**
 * A React hook for persisting state in localStorage.
 *
 * It works just like `useState`, but it also syncs the state with localStorage,
 * ensuring the value is preserved across page reloads.
 *
 * @template T The type of the value to be stored.
 * @param key The key used to store the value in localStorage.
 * @param initialValue The initial value to use if no value is found in localStorage.
 * @returns A tuple containing the current state value and a function to update it.
 */
function useLocalStorage<T>(
	key: string,
	initialValue: T
): [T, (value: T) => void] {
	// Conserve the state of the value
	const [value, setValue] = useState<T>(() => {
		try {
			const storedValue = localStorage.getItem(key);
			if (!storedValue) {
				console.warn(
					`Value '${key}' not found in localStorage, setting initial value.`
				);
				return initialValue;
			}

			return storedValue ? JSON.parse(storedValue) : initialValue;
		} catch (error) {
			console.error(
				"Failed to parse item from localStorage. Setting initial value.",
				error
			);
			return initialValue;
		}
	});

	// On key or value update, sync the state with localStorage
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}

export default useLocalStorage;
