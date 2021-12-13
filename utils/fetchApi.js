import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async(url) => {
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'eb1f05163emsh474b0e779055ff7p1196fcjsna61256f89b17'
        }
     
    });
    return data;
}

