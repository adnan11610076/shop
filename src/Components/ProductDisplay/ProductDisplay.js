import React, { useState, useContext } from "react";
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";


const ProductDisplay = (props) => {

    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    const [selectedSize, setSelectedSize] = useState(null);
    // Function to handle adding to cart
    const handleAddToCart = () => {
        // Check if size is selected
        if (selectedSize) {
            addToCart(product.id);
        } else {
            // Display popup message if size is not selected
            alert("Please select the size");
        }
    };

    const [selectedSizeBackground, setSelectedSizeBackground] = useState('');

    // Function to handle size selection
    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        setSelectedSizeBackground('pink');
    };

    return (
        <>
            <div className="productdisplay">

                <div className="productdisplay-left">

                    <div className="productdisplay-img-list">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                    <div className="productdisplay-img">
                        <img className="productdisplay-main-img" src={product.image} alt="" />
                    </div>
                </div>

                <div className="productdisplay-right">
                    <h1>{product.name}</h1>
                    <div className="productdisplay-right-stars">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                        <div className="productdisplay-right-price-new">₹{product.new_price}</div>
                    </div>

                    <div className="productdisplay-right-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,.
                    </div>

                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">
                            {/* Size options */}
                            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                <div key={size} onClick={() => handleSizeSelect(size)} className={selectedSize === size ? 'selected' : ''}
                                    style={{ backgroundColor: selectedSize === size ? selectedSizeBackground : '' }}>
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={handleAddToCart}>ADD TO CART</button>
                    <p className="productdisplay-right-category"><span>Category :</span> Women, T-shirt, Crop Top </p>
                    <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest </p>

                </div>

            </div>
        </>
    )
}

export default ProductDisplay;