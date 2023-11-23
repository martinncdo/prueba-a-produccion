import mercadopago from "mercadopago";
import 'dotenv/config';

export const createOrder = async (req, res) => {
    mercadopago.configure({
        access_token: process.env.ACCESS_TOKEN
    }); 

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: "Laptop Lenovo",
                unit_price: 1,
                currency_id: "ARS",
                quantity: 1
            }
        ],
        back_urls: {
            success: process.env.DOMAIN_SUCCESS,
            failure: process.env.DOMAIN_FAILURE,
            pending: process.env.DOMAIN_PENDING
        },
        notification_url: process.env.DOMAIN_WEBHOOK
    });

    console.log(result);
    res.json(result)
};

export const receiveWebhook = async (req, res) => {
    const payment = req.query;

    try {
        if (payment.type == "payment"){
            const data = await mercadopago.payment.findById(payment['data.id']);
            console.log(data);
        }
    
        res.sendStatus(204);
    } catch(error) {
        console.log(error);
        return res.sendStatus(500).json({ error: error.message });
    }
};