import axios from 'axios'

const CODER_BASE_REST_API_URL = 'http://localhost:9020/api/';

export const listcoders = () => {

    return axios.get('http://localhost:9020/api/getcoders')

};

export const createcoder = (coder) => {
    return axios.post('http://localhost:9020/api/addcoder', coder)
}

export const getcoderById = (cid) => {
    return axios.get('http://localhost:9020/api/getcoder/' + cid);
}

export const updatecoder = (coder) => {
    return axios.put('http://localhost:9020/api/updatecoder' ,coder);
}

export const deletecoder = (cid) => {
    return axios.delete('http://localhost:9020/api/deletecoderbyId/' + cid);
}
export const getCoderByName = (cname) => {
    return axios.get('http://localhost:9020/api/getcoderbyname/' + cname);
}
export const getCoderByTech = (tech) => {
    return axios.get('http://localhost:9020/api/getcodersbytech/' + tech);
}

