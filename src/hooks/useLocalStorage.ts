import { useState, useEffect } from "react";

function useLocalStorage<T>(
	key: string,
	initialValue: T
): [T, (value: T) => void] {
	// Conserve a state of the value
	const [value, setValue] = useState<T>(() => {
		try {
			const storedValue = localStorage.getItem(key);
			return storedValue ? JSON.parse(storedValue) : initialValue;
		} catch (error) {
			console.error(error);
			return initialValue;
		}
	});

	// On key or value update, store the key and value
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}

export default useLocalStorage;
