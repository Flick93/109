import { useState } from "react";
import DataContext from "./DataContext";

function GlobalProvider(props){
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ userId: 123, name: "Paul"});

    function addProductToCart(){

    }

    function removeProductFromCart(){

    }

    function clearCart(){

    }

    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart,
            clearCart: clearCart,

        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;