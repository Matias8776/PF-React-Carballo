import axios from "axios";

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            axios.get("/src/json/stock.json")
                .then((response) =>{
                    const products = response.data
                    resolve(products);
                })
                .catch((error) => {
                    console.log(error);
                    resolve([]);
                });
        }, 200)
    });
};

export const getProductsById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            getProducts().then((products) => {
                const foundProduct = products.find((prod) => prod.id === parseInt(itemId));
                resolve(foundProduct);
            });
        }, 200);
    });
};

export const getProductsByCategory = (categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            getProducts().then((products) => {
                const filteredProducts = products.filter((prod) => prod.categoria === categoria);
                resolve(filteredProducts);
            });
        }, 200);
    });
};
