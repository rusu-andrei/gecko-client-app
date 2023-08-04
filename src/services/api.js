
const baseUrl = 'https://api.coingecko.com/api/v3';

const getMarkets = async (page, perPage) => {
    const res = await fetch(`${baseUrl}/coins/markets?vs_currency=eur&per_page=${perPage || 100}&page=${page || 1}`);
    const data = await res.json();
    return data;
}

const getCoinDetails = async (id) => {
    const res = await fetch(`${baseUrl}/coins/${id}`);
    if(res.status === 200){
        const data = await res.json();
        return data;
    }
    throw Error("Something went wrong, please try again later.")

}

export { getMarkets, getCoinDetails };