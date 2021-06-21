import React from 'react';
import {Button, Link} from "@material-ui/core";


const Home = ({history}) => {
    const onLinkClick = (link) => history.replace(link);

    const onLogout = () => {
        localStorage.removeItem('authUser');
        history.replace('/auth');
    }

    return (
        <div className="header">
        <div className="container">
            <div className="row">
                <div className="col-2">
                <div className="col-2-left">
                    <p>One-Stop Malaysian<br/>Skincare Products</p>
                    <Link onClick={()=>onLinkClick('/products')} className="btn color-white">SHOP NOW</Link>
                </div>
                </div>
                <div className="col-2">
                    <img src={require("../../assets/alluskin-banner.png")} width="100%"/>
                </div>
            </div>
            </div>

            <div className="featured">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img src={require("../../assets/chucks.jpg")} alt="featured chuck-s"/>
                        </div>
                        <div className="col-3">
                            <img src={require("../../assets/combo.png")} alt="featured alluskin"/>
                        </div>
                        <div className="col-3">
                            <img src={require("../../assets/pinkduo.jpg")} alt="featured rootremedies"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <img src={require("../../assets/rootremedies.jpg")} alt="rootremedies banner"/>
                    </div>
                </div>
            </div>

        </div>
);
}

export default Home;