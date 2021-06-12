import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardMedia, CardContent, Typography, IconButton, Button } from '@material-ui/core';

import useStyles from './styles';

const Product = ({match}) => {
  const products = useSelector((state) => state.products);
  const classes = useStyles();

  
  const product = products.find(p => p.id == match.params.id);
  
  if (!product) return 'Loading';
  console.log('product', product);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Card className={classes.root}>
        <CardMedia className={classes.previewMedia} image={product.media.source} title={product.name}/>
        <CardContent>
          <div className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ${product.price.formatted}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
        </CardContent>
      </Card>
    </main>
  );
};

export default Product;

