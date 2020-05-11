import axios from 'axios';

export const Api = {
    getYouTube(search) {
        return axios({
            url: `https://www.googleapis.com/youtube/v3/search`,
            method: "get",
            withCredentials: true,
            params: {
                part: "snippet",
                maxResults: 5,
                key: 'AIzaSyDbQuOOlJFokJKe5tFDaI4ncuG1bgCm1cE',
                q: search,
            }
        })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                return "error";
            });
    },
}