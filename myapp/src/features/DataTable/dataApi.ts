export const fetchData = async () => {
    const data = await fetch('http://localhost:3001');
    return await data.json();
}