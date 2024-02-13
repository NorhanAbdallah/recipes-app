export interface AxiosResponse<data> {
    offset: number;
    number: number;
    results: data;
    totalResults: number;
}
