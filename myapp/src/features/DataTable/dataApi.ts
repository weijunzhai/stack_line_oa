export const fetchData = async () => {
    const data = await fetch('http://3.141.47.166/server/');
    return await data.json();
}