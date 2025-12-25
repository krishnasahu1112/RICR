async function getProducts() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");

        const data = await res.json();

        const productList = document.getElementById("productRow");

        data.forEach(element => {
            const d = document.createElement("div");
            d.classList.add("col-4", "p-2");
            d.innerHTML = `
                <div class="card border border-dark rounded shadow p-3">
                    <div class="h-50 ">
                        <img src=${element.image} alt=${element.title} class="object-fit-contain">
                    </div>
                    <div class="h-50 border border-dark p-2">
                        <div class="fw-bold fs-5">${element.title.length > 50 ? element.slice(0,50) + "...":element.title}</div>
                        <div class="fw-semibold">${element.rating.rate}/5 (${element.rate.count}) </div>
                        <div class="fw-semibold fs-5">₹ ${element.price*100}</div>
                        <div>${element.description.slice(0,80)}</div>
                        <div class="d-flex flex-column mb-2">
                            <button class="btn btn-outline-primary">Add to Cart</button>
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            `

            productList.appendChild(d);
        });
    } catch (error) {
        console.log(error.message);
    }
}
getProducts();