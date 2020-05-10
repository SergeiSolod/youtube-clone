import axios from "axios";

export const Api = {
    getYouTube(name) {
        return axios({
            url: `https://www.googleapis.com/youtube/v3/${name}`,
            method: "get",
            withCredentials: true,
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDbQuOOlJFokJKe5tFDaI4ncuG1bgCm1cE'
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