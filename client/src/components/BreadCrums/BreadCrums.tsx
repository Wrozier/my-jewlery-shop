import React from 'react';
import { Breadcrumbs as BreadCrums, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import arrow_icon from '../Assets/breadcrum_arrow.png';

// Define the types for the props
interface BreadCrumsProps {
  product: {
    id: number;
    name: string;
    category: string;
  };
}

const BreadCrumsComponent: React.FC<BreadCrumsProps> = ({ product }) => {
  return (
    <BreadCrums aria-label="breadcrumb">
      <MuiLink component={Link} to="/">
        HOME
      </MuiLink>
      <MuiLink component={Link} to="/shop">
        SHOP
      </MuiLink>
      <MuiLink component={Link} to={`/category/${product.category}`}>
        {product.category}
      </MuiLink>
      <Typography color="textPrimary">{product.name}</Typography>
    </BreadCrums>
  );
};

export default BreadCrumsComponent;
