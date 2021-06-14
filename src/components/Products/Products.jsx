import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button } from '@material-ui/core';

import { commerce } from '../../lib/commerce';
import Product from './Product/Product';
import useStyles from './styles';
import { fetchCart, fetchProducts } from '../../store/actions';

const Products = ({history}) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  
  const products = useSelector(state => state.products);

  const onAddToCart = async (productId, quantity) => {
    await commerce.cart.add(productId, quantity);
    dispatch(fetchCart());
  };
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <p className="title">ALL PRODUCTS</p>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} history={history} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

