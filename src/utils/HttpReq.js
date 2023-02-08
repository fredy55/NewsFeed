import axios from "axios";

export const getReq = (url, param) => {
    let respData = null;

    axios.get(url, { params: param })
    .then((response) => respData = response )
    .catch((error) => console.log(error) );

    return respData;
}


