import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = value => {
    // Save state
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

//LONG HAND VERSION
// const useLocalStorage = (key, initialValues) => {
//   //set and update local storage- retrieve that value if the user refreshed or closes window
//   const [storedValue, setStoredValue] = useState(() => {
//     if (localStorage.getItem(key)) {
//       return JSON.parse(localStorage.getItem(key));
//     } else {
//       localStorage.setItem(key, JSON.stringify(initialValues));
//       return initialValues;
//     }
//     return [storedValue];
//   });
// };
