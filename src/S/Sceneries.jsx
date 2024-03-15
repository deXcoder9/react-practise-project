import { useEffect } from "react";
import './Scenery.css'
import { useState } from "react";
import Scenery from "./Scenery";
import { ChecknReturn, addToLS, removeCartFromLS } from "./localStorage";
import DisplayScenery from "./DisplayScenery";

const Sceneries = () => {
    const [scenery, setSceney] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('array.json')
            .then(res => res.json())
            .then(data => setSceney(data))
    }, [])

    useEffect(() => {
        if (scenery.length > 0) {
            const storedCard = ChecknReturn();
            setCart(storedCard)
            const savedCard = [];
            for (const id of storedCard) {
                const s = scenery.find(scene => scene.id === id)
                savedCard.push(s)
            }
            // console.log(savedCard)
            setCart(savedCard)
        }
    }, [scenery])
    const addToCartHandler = scenery => {
        const NewCart = [...cart, scenery]
        setCart(NewCart)
        addToLS(scenery.id)
    }
    const removeCard = id => {
        removeCartFromLS(id)
    }
    return (
        <div>
            <h1>The total Sceney: {scenery.length}</h1>
            <h2>Scenery Added: {cart.length}</h2>
            <DisplayScenery cart={cart}></DisplayScenery>
            <div className="container">
                {
                    scenery.map(scenery => <Scenery key={scenery.id} removeCardBtn={removeCard} btnEvenHandler={addToCartHandler} scny={scenery}></Scenery>)
                }
            </div>
        </div>
    )
}

export default Sceneries;