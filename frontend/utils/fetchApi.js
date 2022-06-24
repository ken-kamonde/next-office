import axios from "axios";

export const baseUrl =  'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '785ea97df0msh2c58ade5cff8731p1fe99ejsn29a2178f877a',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}