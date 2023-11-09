import axios from "axios";
import axiosClient from "./axiosClient";

class WebConfigApi{
    getAll = () =>{
        const url = '/wp-json/acf/v3/options/options';
        return axiosClient.get(url)
    }
}
const webConfigApi = new WebConfigApi();
export default webConfigApi;