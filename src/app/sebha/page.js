"use client"
import { useState } from "react";
import productdata from "../data/api";
export default function seb7a() {
    const products = productdata.تسابيح.map((prd) => {
        let [counter, setcounter] = useState(0);
        function increment() {
            setcounter(counter + 1)
        }
        function reset() {
            setcounter(0)
        }
        return (
            <>
                <title> السبحه</title>
                <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
                    <div style={{ border: '2px solid black', marginBottom: '20px', width: '50%', backgroundColor: 'white', borderRadius: '50px', padding: '20px' }}>
                        <li>{prd.content}</li>
                    </div>
                </ul>
                <div id="buttoncontainer"><button style={{ border: 'none', width: '30px' }} id={prd} onClick={increment}>{counter}</button></div>
                <div id="resetbutton">
                    <button style={{ border: 'none', marginLeft: '30%' }} id={prd} onClick={reset}>Reset</button>
                </div>


            </>
        )
    })

    return (
        <>
            <div style={{ backgroundImage: `url(${'sebha.jpg'})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h2 style={{ paddingTop: '50px', paddingBottom: '40px', justifyContent: 'center', alignItems: 'center', display: 'flex', color: 'white', fontSize: '40px' }}>قَالَ اللَّهُ تَعَالَى:وَاذْكُرْ رَبَّكَ كَثِيرًا وَسَبِّحْ بِالْعَشِيِّ وَالإبْكَارِ</h2>
                <div className="ragab">
                    {products}
                </div>
                <div id="buttons" >
                    <button id="previous" ><a id="nextlink" href="/Almsaa">Previous Page...</a></button>

                </div>
            </div>
        </>
    )

}