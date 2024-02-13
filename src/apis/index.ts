import API from '../adapter';
import { Data } from '../models/data';

export function getData() {
    const url = '/url';
    return API.get(url).then((response: any) => {
        return response.data;
    });
}
export function updateData(data: Data) {
    const url = `/users`;
    return API.put(url, data).then((response: any) => {
        return response.data;
    });
}