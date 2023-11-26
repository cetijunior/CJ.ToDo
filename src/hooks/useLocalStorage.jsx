import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
    const [storedValue, setstoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
    }, [storedValue, key]);

    return [storedValue, setstoredValue]
}