import React, { useContext } from "react";
import './Wishlist.css'; // Create the CSS file for wishlist styling
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png'; // Assuming you want to reuse the same remove icon as in CartItems
// import { Link } from "react-router-dom";

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist, all_product, addToCart } = useContext(ShopContext);
    // console.log(wishlistItems);

    // Handle the case when wishlistItems is undefined or null
    if (!wishlistItems) {
        return <p>Loading...</p>; // Or any other loading indicator
    }

    const handleAddToCart = (itemId) => {
        addToCart(itemId);
    }

    return (
        <div className="wishlist-items">
            <h2>Wishlist</h2>
            <hr />
            {all_product.map((e) => {
                if (wishlistItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>₹{e.new_price}</p>
                                <button className="cartitems-quantity">{wishlistItems[e.id]}</button>
                                <p>₹{e.new_price * wishlistItems[e.id]}</p>
                                <img
                                    src={remove_icon} className="cartitems-remove-item"
                                    onClick={() => removeFromWishlist(e.id)}
                                    alt=""
                                />
                                <button onClick={() => handleAddToCart(e.id)}>Add To Cart</button>
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null; // Return null for products with quantity <= 0
            })}
        </div>
    );
};

export default Wishlist;
