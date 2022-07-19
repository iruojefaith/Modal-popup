//FETCHING DATA FROM JSON FILE
async function loadProduct() {
	const response = await fetch("./product.json");
	return response.json();
}

// RENDERING DATA IN DOM
document.addEventListener("DOMContentLoaded", async () => {
	try {
		const products = await loadProduct();
		const divContainer = document.getElementById("content");
		products.forEach((product) => {
			const productHeader = document.createElement("div");
			productHeader.classList.add("card");
			productHeader.innerHTML = ` <div class="imgBx"><img src="${product.productImg}"/></div> \n
            <h3>name: ${product.productName}</h3> <br>
             <h3><span>price:${product.productPrice}</span></h3>
             <form action="">
                <button id="btn"> read more...</button>
            </form>`;
			divContainer.appendChild(productHeader);
		});
	} catch (e) {
		console.log("ERROR");
		console.log(e);
	}
});
