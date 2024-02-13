import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import './item.css'
import { Link } from "react-router-dom";

const Items = (props) => {

    // const { product } = props;
    const { addToWishlist } = useContext(ShopContext);



    const handleAddToWishlist = () => {
      
        addToWishlist(props.id);
      
    };

    return (
        <>

            <div className="item">

               <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
                <p>{props.name}</p>
                <div className="whislist"><button onClick={handleAddToWishlist}><img src={props.image1} alt=""/></button></div>
                <div className="item-prices">
                    <div className="item-price-new">
                    ₹{props.new_price}
                    </div>

                    <div className="item-price-old">
                    ₹{props.old_price}
                    </div>
                </div>

            </div>

        </>
    )
}

export default Items;