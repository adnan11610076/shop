import React, { useContext, useState } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Items from "../Components/Items/Items";

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    const [showSortList, setShowSortList] = useState(false); // State to control visibility of sort list

    const toggleSortList = () => {
        setShowSortList(!showSortList);
    };

    return (
        <>
            <div className="shop-category">
                <img className="shopcategory-banner" src={props.banner} alt="" />

                <div className="shopcategory-indexsort">
                    <p><span>Showing 1-12</span> out of 36 products</p>
                    <div className="shopcategory-sort" onClick={toggleSortList}>
                        Sort by <img src={dropdown_icon} alt="" />
                        <ul className={`sort-list ${showSortList ? 'show' : ''}`}>
                            <li className="sort-list-item">S</li>
                            <li className="sort-list-item">M</li>
                            <li className="sort-list-item">L</li>
                            <li className="sort-list-item">XL</li>
                            <li className="sort-list-item">XXL</li>
                        </ul>
                    </div>

                </div>


                <div className="shopcategory-products">
                    {
                        all_product.map((item, i) => {
                            if (props.category === item.category) {
                                return <Items key={i} id={item.id} name={item.name} image={item.image} image1={item.image1} new_price={item.new_price} old_price={item.old_price} />
                            }
                            else {
                                return null;
                            }
                        })
                    }
                </div>

                <div className="shopcategory-loadmore"> Explore More </div>

            </div>
        </>
    )
}
export default ShopCategory;
