import React,{ useState,useEffect} from "react";

function FoodItem(props) {
    const [changeButton,setChangeButton] = useState(false);
    const [quantity,setQuantity] = useState(0);
    useEffect(()=>{
        const find = props.shoppingCart.findIndex(element=>element.id===props.id)
        if (find!==-1) {
            setQuantity(props.shoppingCart[find].quantity);
            setChangeButton(true);
        }

    },[props.shoppingCart])
    return (
        <div className="order-food">
            <div className="order-food-item">
                <img className="order-food-item-image" src={`/images/dishes/${Math.floor(Math.random() * 5) + 1}.jpg`} alt="" />
                <img src="/images/veg.png" alt="" className="order-food-item-veg" style={{ filter: `${props.veg ? "none" : "hue-rotate(247deg)"}` }} />
                <div className="order-food-item-detail">
                    <p className="order-food-item-name">
                        {props.name}
                    </p>
                    <p className="order-food-item-price">
                        <span>&#8377;</span> {props.price}
                    </p>
                </div>

            </div>
            <div className="cart-buttons">
            <button className="add-to-cart" onClick={() => {
                props.addToCart({
                    id: props.id,
                    name: props.name,
                    price: props.price,
                    veg: props.veg,
                    quantity:1
                })
                
            }}>
                {changeButton?`quantity = ${quantity}`:'Add'}
            </button>
            <button className="remove-from-cart" onClick={()=>{
                props.removeFromCart(props.id)
                
            }}>Remove</button>
            </div>
        </div>
    )
}

export default FoodItem;