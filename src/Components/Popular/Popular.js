import React from "react";
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Items/Items';

const Popular = () => {
    return (
        <div className="popular">
            <h1>Popular In Women</h1>
            <hr />

            <div className="popular-item">
                {data_product.map((item, i) => (
                    <Item
                        key={i}  // Move the key prop to the outermost element returned from map
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        image1={item.image1}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Popular;
