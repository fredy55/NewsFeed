import axios from "axios";

export async function getReq(url, param){
    let respData = null;
    try {
        respData= await axios.get(url, { params: param });
    } catch (error) {
        console.log(error)
    }

    return respData;
}


