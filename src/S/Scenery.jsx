
import './Scenery.css'
const Scenery = ({ scny, btnEvenHandler }) => {

    return (
        <div className="card-Container">
            <img style={{ borderRadius: '15px' }} src={scny.img} width={'300px'} alt="" />
            <h4> {scny.name} </h4>
            <button onClick={() => btnEvenHandler(scny)}>Add</button>
        </div>

    );
};

export default Scenery;