export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=efR352IdvmrQkzWyNQIbYNPbrbmeiLnH`;

    try {
        const response = await fetch(url);
        const {data} = await response.json();
        
        const gifs = data.map(img => {

            const {id, title, images} = img;

            return {id, title, url: images.downsized_medium.url}
        });

        return gifs;

    } catch (error) {
        console.log(error);
    }
}