import axios from "axios";

axios.defaults.baseURL = 'https://dog.ceo/api';

export async function getBreeds()
{
    const response = await axios('/breeds/list/all');
    return Object.keys(response.data.message);
}

export async function getSubBreeds(breed: string)
{
    const response = await axios(`/breed/${breed}/list`);
    return response.data.message;
}

export async function getImages(breed : string, subBreed: string | null, numberOfImages: number)
{
    let url = `/breed/${breed}`;

    if (subBreed !== null) {
        url += `/${subBreed}`;
    }

    url += `/images/random/${numberOfImages}`;

    const response = await axios(url);
    return response.data.message;
}
