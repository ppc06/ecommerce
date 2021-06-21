import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button } from '@material-ui/core';

import { commerce } from '../../lib/commerce';
import useStyles from './styles';
import { fetchCart, fetchProducts } from '../../store/actions';

const Brands = ({history}) => {
  

  return (
    <main>
      <h2 className="title">Shop All Products</h2>
      
    </main>
  );
};

export default Brands;

