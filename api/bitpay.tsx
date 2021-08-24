import { useState } from 'react';
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "https://bitpay.com",
    headers: {
      'Content-Type': 'application/json',
      'X-Accept-Version': '2.0.0'
    }
});

// Can only use custom hooks within React components

// const useBitPay = () => {
//     const [rate, setRate] = useState(100);
//     const [isLoading, setIsLoading] = useState(true);

//     const getRate = async () => {
//         try {
//             const response = await axiosClient.get('/rates/BTC/USD');
//             setIsLoading(false);
//             setRate(response.data.rate)
//         } catch (error) {
//             window.alert('Error, try again later')
//         }
//     }

//     return [getRate, rate, isLoading]
// }

export default axiosClient