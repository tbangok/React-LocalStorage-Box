import { useState, useEffect } from 'react';


export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const items = window.localStorage.getItem(key)
        return items ? JSON.parse(items) : initialValue
    })

    function setValue(value) {
        setStoredValue(value)
        window.localStorage.setItem(key,JSON.stringify(value))
        
    }

    return [storedValue,setValue]
}

























