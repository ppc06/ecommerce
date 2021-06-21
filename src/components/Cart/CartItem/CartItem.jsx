import React from 'react';
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
    const classes = useStyles();

    const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

    return (
        <>
            <td className="cart-info">
                <img src={item.media.source} alt={item.name} />
                <div>
                    <p>{item.name}</p>
                    <small>Price: {item.line_total.formatted_with_symbol}</small><br/>
                    <Button variant="contained" type="button" color="secondary"
                            onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                </div>
            </td>
            <td>
                <div className={classes.buttons}>
                    <Button type="button" size="small"
                            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                    <Button type="button" size="small"
                            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
            </td>
            <td>{item.price.formatted_with_symbol}</td>
        </>
    );
};

export default CartItem;
