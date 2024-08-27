"use client"
import { useState } from "react";
import productdata from "../data/api";

function productlist() {
    const products = productdata["أذكار المساء"].map((product) => {
        let [counter, setcounter] = useState(3);
        function increment() {
            if (counter >0) {
                setcounter(counter - 1)
            }
        }
        return (
            <>
                <title>أذكار المساء</title>
                <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0px' }}>
                    <div style={{ border: '2px solid black', marginBottom: '20px', width: '50%', backgroundColor: 'white', borderRadius: '50px', padding: '20px' }}>
                        <li>{product.content}</li>
                    </div>

                </ul>
                <div id="buttoncontainer"><button style={{ border: 'none', fontSize: '16px', color: 'red', width: '20px' }} id={product} onClick={increment}>{counter}</button> / 3</div>
            </>
        )
    })
    return (
        <>
            <div style={{ backgroundImage: `url(${'image2.jpg'})`  }}>
                <div class="ragab">
                    {products}
                </div>
                <div id="buttons" >
                    <button id="previous" ><a id="nextlink" href="/Alsba7">Previous Page...</a></button>
                    <button id="next" ><a id="nextlink" href="/sebha">Next Page...</a></button>
                </div>

            </div>
        </>
    )

}
export default productlist;






