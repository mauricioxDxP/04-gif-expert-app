const getGifs = async (anime) => {
    const apiKey = '9sCnX2p0U9C0VYRZfwtHG8YfkoJ1Q4Fi';
    const petition = fetch(`https://api.giphy.com/v1/gifs/search?q=${anime}&api_key=${apiKey}&limit=10`);
    const response = await petition;
    const {data} = await response.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    }); 
    return gifs;
}
export default getGifs;