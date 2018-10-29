export const updateLocalStorage = (key, list) => {
    localStorage.setItem(key, JSON.stringify(list))
}