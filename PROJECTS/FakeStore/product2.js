async function getProducts2(){

    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    data.forEach(element => {
        const d = document.createElement("div");
        d.classList.add
    });


}