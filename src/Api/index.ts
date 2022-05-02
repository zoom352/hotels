import axios, { AxiosResponse } from "axios";
import config from "../config";

// var checkIn = '2022-12-10'
// var checkOut = '2022-12-12'

class PostService {
    axios: any;
    static axios: any;
    constructor() {
      this.axios = axios.create({ baseURL: `${config.host}/api/v2`})
    }
    async getAll(search: any, checkIn: any, checkOut: any): Promise<AxiosResponse<any>> {
        return this.axios.get(`cache.json?location=${search}&currency=rub&checkIn=${checkIn || '2022-12-10'}&checkOut=${checkOut}&limit=20`)
    }
}

export default new PostService()
