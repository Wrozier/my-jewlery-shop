import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { backend_url, currency } from '../../App';

interface ItemProps {
  id: number;
  image: string;
  name: string;
  new_price: number;
  old_price: number;
}

const Item: React.FC<ItemProps> = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img 
          onClick={() => window.scrollTo(0, 0)} 
          src={backend_url + props.image} 
          alt="products" 
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          {currency}{props.new_price}
        </div>
        <div className="item-price-old">
          {currency}{props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Item;
