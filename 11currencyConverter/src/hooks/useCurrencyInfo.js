import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {

    const [data , setData] = useState({});

    useEffect(() => {

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then(res => res.json())
        .then(res => setData(res[currency]))
        
        console.log(data);
    }, [currency]);
    
    
    console.log(data);

    {/** we are only returning data, cuz we mean to use it that way say const data = useCurrencyInfo("usd") 
    If we mena to do const [data, setData] then return [data, setData]
    for more info refer to CWR11    
    */}

    return data;
}


export default useCurrencyInfo;