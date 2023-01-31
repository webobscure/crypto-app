import create  from "zustand";

const coinStore = create((set)=> {
    fetchCoins: () => {
        axios.get('https://api.coingecko.com/api/v3/coins/list')
    }
})