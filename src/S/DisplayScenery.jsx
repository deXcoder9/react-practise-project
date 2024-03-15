

const DisplayScenery = ({ cart, removeCardBtn }) => {
    return (
        <div className="displying-cart-container">
            {
                cart.map(c =>
                    <div key={c.id}>
                        <img height={'100px'} src={c.img}></img>

                        <button onClick={() => removeCardBtn(cart.id)}>remove</button>
                    </div>)

            }
        </div >
    );
};
export default DisplayScenery;