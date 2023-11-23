const checkout = document.getElementById("checkout");

async function pay_test() {
    try {
        let res = await fetch('https://simple-prueba-a-produccion.onrender.com/create-order', {
            method: "POST"
        }),
            json = await res.json();
        window.location.href = json.body.init_point;
    } catch (err) {
        console.log(err);
    }
};

checkout.addEventListener("click", pay_test);