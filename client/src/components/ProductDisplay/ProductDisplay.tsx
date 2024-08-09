import React, { useContext } from "react";
import { Box, Button, Grid, Typography } from '@mui/material';
import { ShopContext, ShopContextType } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

interface Product {
  id: number;
  image: string;
  name: string;
  old_price: number;
  new_price: number;
  description: string;
}

interface ProductDisplayProps {
  product: Product;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  const shopContext = useContext(ShopContext) as ShopContextType;

  const { addToCart } = shopContext;

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <img src={backend_url + product.image} alt="img" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={3}>
            <img src={backend_url + product.image} alt="img" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={3}>
            <img src={backend_url + product.image} alt="img" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={3}>
            <img src={backend_url + product.image} alt="img" style={{ width: '100%' }} />
          </Grid>
        </Grid>
        <Box marginTop="20px">
          <img src={backend_url + product.image} alt="img" style={{ width: '100%' }} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4">{product.name}</Typography>
        <Box display="flex" alignItems="center" marginY="10px">
          <img src={star_icon} alt="star" style={{ marginRight: 4 }} />
          <img src={star_icon} alt="star" style={{ marginRight: 4 }} />
          <img src={star_icon} alt="star" style={{ marginRight: 4 }} />
          <img src={star_icon} alt="star" style={{ marginRight: 4 }} />
          <img src={star_dull_icon} alt="star dull" style={{ marginRight: 4 }} />
          <Typography variant="body2" marginLeft="10px">(122)</Typography>
        </Box>
        <Box display="flex" alignItems="center" marginY="10px">
          <Typography variant="body2" style={{ textDecoration: 'line-through' }}>{currency}{product.old_price}</Typography>
          <Typography variant="h5" marginLeft="20px">{currency}{product.new_price}</Typography>
        </Box>
        <Typography variant="body1" marginY="20px">{product.description}</Typography>
        <Box marginBottom="20px">
          <Typography variant="h6">Select Size</Typography>
          <Box display="flex" gap="10px" marginTop="10px">
            <Button variant="outlined">S</Button>
            <Button variant="outlined">M</Button>
            <Button variant="outlined">L</Button>
            <Button variant="outlined">XL</Button>
            <Button variant="outlined">XXL</Button>
          </Box>
        </Box>
        <Button variant="contained" color="primary" onClick={() => addToCart(product.id)}>ADD TO CART</Button>
        <Typography marginTop="20px"><strong>Category:</strong> Women, T-shirt, Crop Top</Typography>
        <Typography><strong>Tags:</strong> Modern, Latest</Typography>
      </Grid>
    </Grid>
  );
};

export default ProductDisplay;
