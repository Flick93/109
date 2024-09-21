import { useState } from "react";
import "./QuantityPicker.css"

function QuantityPicker(){
    const [quantity, setQuantity] = useState(1);

    function handleIncrease(){
        let value = quantity + 1;
        setQuantity(value);
    }
    function handleDecrease(){
        let value = quantity - 1;
        if(value <1) return;

        setQuantity(value);
    }

    return(
        
        <div className="qt-picker">

        <button className="btn btn-sm btn-outline-secondary" disabled={quantity == 1} onClick={handleDecrease}>
            <i class="fa-solid fa-circle-minus"></i>
        </button>

        <label>{quantity}</label>

        <button className="btn btn-sm btn-outline-secondary" onClick={handleIncrease}>
            <i class="fa-solid fa-circle-plus"></i>
        </button>

        </div>
    )
}

export default QuantityPicker;