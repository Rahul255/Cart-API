import React, { useState } from 'react'
import styled from "@emotion/styled";
import './ListData.css'

const ListData = ({ product }) => {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter(counter + 1);
        let x = window.localStorage.getItem("items");
        let x1 = Number(x) + Number(1);
        window.localStorage.setItem("items", x1);

    }

    let decrementCounter = () => {
        setCounter(counter - 1);
        let x = window.localStorage.getItem("items");
        let x1 = Number(x) - Number(1);
        window.localStorage.setItem("items", x1);
    }
    if (counter <= 0) {
        decrementCounter = () => setCounter(0);
    }
    // if (window.localStorage.getItem("cartItems")) {
    //     let x = window.localStorage.getItem("cartItems");
    //     console.log(x, counter);
    //     let x1 = Number(x) + Number(1);
    //     console.log(x1);
    //     window.localStorage.setItem("cartItems", x1);
    // }
    // else {
    //     window.localStorage.setItem("cartItems", 0);
    // }
    return (

        <div className="container" style={{ border: "1px solid black", paddingTop: "10px", paddingBottom: "10px", marginTop: "10px", borderRadius: "10px" }}>

            <div className="row">
                <div className="col-sm-1 col-1 pt-5">
                    {product.dish_Availability ? (<span className="dot"></span>) : (<span className="dot1"></span>)}
                </div>

                <div className="col-lg-7 col-6 " style={{ textAlign: "left" }}>
                    <h5 >{product.dish_name}</h5>
                    <p >{product.dish_currency}: {(product.dish_price)} </p>
                    <p >{product.dish_description}</p>
                    <div>
                        <button onClick={incrementCounter} >+</button>
                        {' '}{counter}{' '}
                        <button onClick={decrementCounter} >-</button>
                    </div>
                    {product.addonCat.length > 0 ? (<p style={{ color: "red", paddingTop: '10px' }}>customization available</p>) : ''}
                </div>
                <div className="col-sm-2 text-center col-2 ">
                    <p className="mb-0">{product.dish_calories} calories</p>
                </div>
                <div className="col-sm-2 col-2">
                    <img
                        alt={product.dish_name}
                        style={{ margin: "0 auto", maxHeight: "100px", maxWidth: "100px", borderRadius: "5px" }}
                        src={product.dish_image} className="img-fluid d-block" />
                </div>

            </div>
        </div>

    )
}

export default ListData