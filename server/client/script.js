import { DOMAIN_BACKEND } from "./config.js";


const checkout = document.getElementById("checkout");

async function pay_test() {
    try {
        let res = await fetch(`${DOMAIN_BACKEND}/create-order`, {
            method: "POST"
        }),
            json = await res.json();
        window.location.href = json.body.init_point;
    } catch (err) {
        console.log(err);
    }
};

checkout.addEventListener("click", pay_test);