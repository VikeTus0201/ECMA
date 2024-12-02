import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";

const DetailProduct = () => {
    const [product, setProducts] = useState({});

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }, []);
    return (
        <div>
            <h1>Chi tiết sản phẩm</h1>
            <div>
                <img src={product.image} alt="" style={{width:200}}/>
                <h2>Tên sản phẩm : {product.name}</h2>
                <p>Giá sản phẩm : {product.price}</p>
                <p>Mô tả: {product.description}</p>
            </div>


        </div>
    );
};
export default DetailProduct;