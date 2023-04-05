import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    const { loading, error, request, clearError } = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=4df5a79f3e7d26c68fa7625a98ad38d7';
    const _baseOffset = 210;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?&${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async (offsetComics = 0) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offsetComics}&${_apiKey}`);
        return res.data.results.map(_transforComics);
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transforComics(res.data.results[0]);
    }

    const getCharacterByName = async (name) => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const _transforComics = (comic) => {
        return {
            id: comic.id,
            title: comic.title,
            price: comic.prices[0].price ? `${comic.prices[0].price}$` : 'NOT AVAILABLE',
            thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
            pageCount: comic.pageCount
                ? `${comic.pageCount} pages`
                : 'No information about the number of pages',
            description: comic.description || 'There is no description',
            language: comic.textObjects[0]?.language || 'en-us'
        }
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items.length > 10 ? char.comics.items.slice(0, 10) : char.comics.items,
        }
    }

    return { loading, error, clearError, getAllCharacters, getCharacter, getCharacterByName, getAllComics, getComic };
}

export default useMarvelService;