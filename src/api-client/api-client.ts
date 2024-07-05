import axios, { AxiosError, AxiosResponse } from "axios";

export const apiClient = async <T extends any>({urlEndpoint}:{
    urlEndpoint:string
}
): Promise<T> => {
    let config = {
        url:urlEndpoint
    }
    return axios
    .request<T, AxiosResponse<T>>(config)
    .then((response: AxiosResponse<T>) => {
        return response.data;
    })
    .catch((err: AxiosError<T>) => {
        if (err.response?.status === 401) {
            // clear cache
        }
        return Promise.reject(err);
    });
}