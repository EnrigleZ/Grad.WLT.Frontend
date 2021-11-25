export const getItems = (n = 100) => {
    const ret = [];
    for (let i = 0; i < n; ++ i) {
        ret.push((Math.random() * 100000).toFixed(0))
    }
    return ret;
}