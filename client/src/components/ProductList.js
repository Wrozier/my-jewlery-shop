import React from 'react';
import styled from 'styled-components';

const ProductList = ({ products }) => (
    <List>
        {products.map((item, index) => (
            <ListItem key={index}>
                {item.product.name} - Quantity: {item.quantity}
            </ListItem>
        ))}
    </List>
);

export default ProductList;

const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
`;

const ListItem = styled.li`
    color: #333;
    margin: 5px 0;
`;
