import axios from 'axios';

export const GetTopItems = async () => {
    const ret = axios.get('/top');
    return ret;
}

export const GetRecommendItems = async (uid) => {
    const ret = axios.get('/recommendation?uid='+uid);
    return ret;
}
