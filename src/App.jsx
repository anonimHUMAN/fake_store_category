import { useState } from 'react'
import Card from "./Card"
import "./app.css"

function App() {
    let [data, setdata] = useState([])
    const getAll = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setdata(json))
    }
    const get$1 = () => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res => res.json())
            .then(json => setdata([json]))
    }
    const get$2 = () => {
        fetch('https://fakestoreapi.com/products/2')
            .then(res => res.json())
            .then(json => setdata([json]))
    }
    const get$3 = () => {
        fetch('https://fakestoreapi.com/products/3')
            .then(res => res.json())
            .then(json => setdata([json]))
    }
    const get$4 = () => {
        fetch('https://fakestoreapi.com/products/4')
            .then(res => res.json())
            .then(json => setdata([json]))
    }
    const get$5 = () => {
        fetch('https://fakestoreapi.com/products/5')
            .then(res => res.json())
            .then(json => setdata([json]))
    }
    const get$6 = () => {
        fetch('https://fakestoreapi.com/products/6')
            .then(res => res.json())
            .then(json => setdata([json]))
    }
    const get$7 = () => {
        fetch('https://fakestoreapi.com/products/7')
            .then(res => res.json())
            .then(json => setdata([json]))
    }
    const get$8 = () => {
        fetch('https://fakestoreapi.com/products/8')
            .then(res => res.json())
            .then(json => setdata([json]))
    }
    const get$9 = () => {
        fetch('https://fakestoreapi.com/products/9')
            .then(res => res.json())
            .then(json => setdata([json]))
    }
    const get$10 = () => {
        fetch('https://fakestoreapi.com/products/10')
            .then(res => res.json())
            .then(json => setdata([json]))
    }
    const get$A5 = () => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(json => setdata(json))
    }
    const get$A10 = () => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then(json => setdata(json))
    }
    const get$A15 = () => {
        fetch('https://fakestoreapi.com/products?limit=15')
            .then(res => res.json())
            .then(json => setdata(json))
    }
    const getC1 = () => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res => res.json())
            .then(json => setdata(json))
    }
    const getC2 = () => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res => res.json())
            .then(json => setdata(json))
    }
    const getC3 = () => {
        fetch('https://fakestoreapi.com/products/category/men\'s clothing')
            .then(res=>res.json())
            .then(json=>setdata(json))
    }
    const getC4 = () => {
        fetch('https://fakestoreapi.com/products/category/women\'s clothing')
            .then(res=>res.json())
            .then(json=>setdata(json))
    }


    return (
        <>
            <div className="btns">
                <button onClick={getAll} className="btn">All</button>
                <button onClick={get$1} className="btn">Card_1</button>
                <button onClick={get$A5} className="btn">Card_5</button>
                <button onClick={get$A10} className="btn">Card_10</button>
                <button onClick={get$A15} className="btn">Card_15</button>
                <button onClick={getC1} className="btn">Electronics</button>
                <button onClick={getC2} className="btn">Jewelery</button>
                <button onClick={getC3} className="btn">Men's clothing</button>
                <button onClick={getC4} className="btn">Women's clothing</button>
            </div>
            <div className="btns">
                <button onClick={getAll} className="btn">All</button>
                <button onClick={get$1} className="btn">Card_1</button>
                <button onClick={get$2} className="btn">Card_2</button>
                <button onClick={get$3} className="btn">Card_3</button>
                <button onClick={get$4} className="btn">Card_4</button>
                <button onClick={get$5} className="btn">Card_5</button>
                <button onClick={get$6} className="btn">Card_6</button>
                <button onClick={get$7} className="btn">Card_7</button>
                <button onClick={get$8} className="btn">Card_8</button>
                <button onClick={get$9} className="btn">Card_9</button>
                <button onClick={get$10} className="btn">Card_10</button>
            </div>
            <div className='container'>
                <div className="cards">
                    {data.map((item, i) => {
                        return (
                            <Card data={item} key={i} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default App