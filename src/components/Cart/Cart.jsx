import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';

import {commerce} from '../../lib/commerce';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import {setCart, fetchCart} from '../../store/actions';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleEmptyCart = () => onEmptyCart();

    const onUpdateCartQty = async (lineItemId, quantity) => {
        const response = await commerce.cart.update(lineItemId, {quantity});

        dispatch(setCart(response.cart));
    };

    const onRemoveFromCart = async (lineItemId) => {
        const response = await commerce.cart.remove(lineItemId);

        dispatch(setCart(response.cart));
    };

    const onEmptyCart = async () => {
        const response = await commerce.cart.empty();

        dispatch(setCart(response.cart));
    };

    const renderEmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart,
            <Link className={classes.link} to="/">start adding some</Link>!
        </Typography>
    );


    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    if (!cart.line_items) return 'Loading';

    const renderCart = () => (
        <div className="bottom-container cart-page">
            <table>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                </thead>
                <tbody>
                {cart.line_items.map((lineItem, index) => (
                    <tr key={index}>
                        <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty}
                                  onRemoveFromCart={onRemoveFromCart}/>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={classes.cardDetails}>
                <div className="total">
                    <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                </div>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained"
                            color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                    <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large"
                            type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </div>
    );

    return (
        <Container>
            <p className="title">CART</p>
            {!cart.line_items.length ? renderEmptyCart() : renderCart()}
        </Container>
    );
};

export default Cart;
