import youtube from "./baseurl";

export const Api = {
    getYouTube(search) {
        return youtube.get("search", {
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