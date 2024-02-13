import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

// Create the context
export const ShopContext = createContext(null);

// Function to initialize cart with default values
const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const getDefaultWishlist = () => {
    let wishlist = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        wishlist[i] = 0;
    }
    return wishlist;
}

// Create the context provider component
const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [wishlistItems, setWishlistItems] = useState(getDefaultWishlist()); 

    // Function to add item to cart
    const addToCart = (itemId) => {
        setCartItems((prev) => {
            return { ...prev, [itemId]: prev[itemId] + 1 };
        });
    }

    // Function to remove item from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: Math.max(0, prev[itemId] - 1) };
            return updatedCart;
        });
    }

    const addToWishlist = (itemId) => {
        
        setWishlistItems((prev) => {
            return { ...prev, [itemId]: prev[itemId] + 1 };
        });
    }

    // Function to remove item from wishlist
    const removeFromWishlist = (itemId) => {
        setWishlistItems((prev) => {
            const updatedWishlist = { ...prev, [itemId]: Math.max(0, prev[itemId] - 1) };
            // delete updatedWishlist[itemId];
            return updatedWishlist;
        });
    }

    // Function to get total cart amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }

        return totalAmount;
    }

    // Function to get total cart items
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }

        return totalItem;
    }

  // Function to get total wishlist items
const getTotalWishlistItems = () => {
    let totalItem = 0;
    for (const item in wishlistItems) {
        if (wishlistItems[item] > 0) {
            totalItem += wishlistItems[item];
        }
    }

    return totalItem;
}

    // Context value containing all the required functions and state
    const contextValue = {
        all_product,
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        getTotalCartAmount,
        getTotalCartItems,
        getTotalWishlistItems
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
