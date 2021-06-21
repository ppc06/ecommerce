import React from 'react';
import {Typography, List, ListItem, ListItemText, Button, Divider} from '@material-ui/core';

const Review = ({item, checkoutToken, shippingData}) => (
    <>
        <Typography variant="h6" gutterBottom>Order Summary</Typography>
        <List disablePadding>
            {checkoutToken.live.line_items.map((product) => (
                <ListItem style={{padding: '10px 0'}} key={product.name}>
                    <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`}/>
                    <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                </ListItem>
            ))}
            <Divider/>
            <ListItem style={{padding: '10px 0'}}>
                <ListItemText primary="Items Total"/>
                <Typography variant="subtitle1" style={{fontWeight: 700}}>
                    {checkoutToken.live.subtotal.formatted_with_symbol}
                </Typography>
            </ListItem>
            <ListItem style={{padding: '10px 0'}}>
                <ListItemText primary="Shipping Cost"/>
                <Typography variant="subtitle1" style={{fontWeight: 700}}>
                    {shippingData.shipping_method?.price.formatted_with_symbol ?? '$0.00'}
                </Typography>
            </ListItem>
            <ListItem style={{padding: '10px 0'}}>
                <ListItemText primary="Total"/>
                <Typography variant="subtitle1" style={{fontWeight: 700}}>
                    ${(checkoutToken.live.subtotal.raw + shippingData.shipping_method?.price.raw ?? 0).toFixed(2)}
                </Typography>
            </ListItem>
        </List>
    </>
);

export default Review;
