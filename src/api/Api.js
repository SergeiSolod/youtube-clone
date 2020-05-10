import axios from "axios";

export const headerApi = {
    getYouTube(name) {
        return axios({
            url: `https://www.googleapis.com/youtube/v3/${name}`,
            method: "get",
            withCredentials: true,
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyBZhe3_b1PFUXnWbYx3TpLrl5jMIpt1lpc'
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