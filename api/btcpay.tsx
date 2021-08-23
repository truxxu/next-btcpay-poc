import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "BTCPAY_URL",
    timeout: 5000,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':" BTCPAY_AUTH"
    }
});

const invoiceData = {
    "price": 10000,
    "currency": "COP",
    "orderId": "something",
    "itemDesc": "item description",
    "notificationUrl": "https://webhook.after.checkout.com/goeshere",
    "redirectURL": "https://go.here.after.checkout.com"
};

const createInvoice = async () => {
    try {
        const response = await axiosClient.post("/invoices", invoiceData);
        const invoiceId = response.data.data.id;
    } catch (error) {
        window.alert('Something happened, try again later')
    }
}

export default createInvoice;