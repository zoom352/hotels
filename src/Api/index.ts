import axios, { AxiosResponse } from "axios";
import config from "../config";

class PostService {
    axios: any;
    static axios: any;
    constructor() {
      this.axios = axios.create({ baseURL: `${config.host}/api/v2`})
    }
    async getAll(search: any): Promise<AxiosResponse<any>> {
        return this.axios.get(`cache.json?location=${search}&currency=rub&checkIn=2022-12-10&checkOut=2022-12-12&limit=10`)
        // query=moscow&lang=ru&lookFor=both&limit=1')
    }
}

export default new PostService()

// https://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2022-12-10&checkOut=2022-12-12&limit=10
