export const homeTableHeader = {
    "image": "Image", 
    "name": "Name",
    "symbol": "Symbol",
    "currentPrice": "Current Price",
    "highDayPrice": "High 24 hour Price",
    "lowDayPrice": "Low 24 hour Price"
}

export const perPageNo = 10;

//market_data.market_cap.eur

/*
const obj = {
    market_data: {
        market_cap: {
            eur: 12345
        }
    }
}
*/
export const objDeepParse = (keysAsString, obj) => {
    const keys = keysAsString.split(".");
    let temp = obj;
    keys.forEach(k => {
        temp = temp[k]
    })
    return temp;
}