import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Typography} from '@material-ui/core';

import useStyles from './styles';
import {commerce} from "../../lib/commerce";
import {fetchCart} from "../../store/actions";

const Product = ({match, history}) => {
    const [quality, setQuality] = useState(1);
    const products = useSelector((state) => state.products);
    const classes = useStyles();
    const qualityRef = useRef();
    const dispatch = useDispatch();

    const product = products.find(p => p.id == match.params.id);
    if (!product) return 'Loading';

    // Relative Products
    const other_products = product.related_products.slice(0, 4);

    const handleAddToCart = async () => {
        await commerce.cart.add(product.id, qualityRef.current.value);
        dispatch(fetchCart());
    };

    return (
        <main className={classes.content}>
            <div className="bottom-container product-details">
                <div className="row">
                    <div className="col-2 left-detail">
                        <img src={product.media.source} width="75%" alt=""/>
                    </div>
                    <div className="col-2 right-detail">
                        <h2>{product.categories[0]?.name ?? ''}</h2>
                        <h1>{product.name}</h1>
                        <h4>${product.price.formatted}</h4>

                        <input type="number" defaultValue={quality} onChange={(e) => setQuality(e.target.value)}
                               min="1"/>

                        <Link onClick={handleAddToCart} className="btn short color-white">ADD TO CART</Link>

                        <p className="sub-title">Product Details</p>
                        <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2"
                                    color="textPrimary" component="p"/>
                    </div>
                </div>
            </div>
            <div className="bottom-container">
                <p className="title">OTHER PRODUCTS</p>


                <div className="row">
                    {other_products.map((o, index)=> (
                        <div className="col-4" key={index}>
                            <img src={o.media.source} width="75%" alt=""/>
                            <h4>{o.name}</h4>
                            <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2"
                                        color="textPrimary" component="p"/>
                            <p>${product.price.formatted}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Product;

