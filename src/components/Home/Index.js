import React from 'react';
import {Button, Link} from "@material-ui/core";

const Home = ({history}) => {
    const onLinkClick = (link) => history.replace(link);

    const onLogout = () => {
        localStorage.removeItem('authUser');
        history.replace('/auth');
    }

    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <p id="tagline">Your One-Stop<br/>Malaysian Skincare Products</p>
                    <Link onClick={()=>onLinkClick('/products')} className="btn color-white">SHOP ALL</Link>
                </div>
                <div className="col-2">
                    <img src={require("../../assets/zarzou.jpg")} width="100%"/>
                </div>
            </div>

            <div className="featured">
                <div className="bottom-container">
                    <div className="row">
                        <div className="col-3">
                            <img src={require("../../assets/coalface_f.jpg")} alt="featured kayman"/>
                        </div>
                        <div className="col-3">
                            <img src={require("../../assets/zarzou_f.jpg")} alt="featured zarzou"/>
                        </div>
                        <div className="col-3">
                            <img src={require("../../assets/jelitakl_f.jpg")} alt="featured jelitakl"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col-1">
                            <Button size="large" type="button" variant="contained" color="secondary" onClick={onLogout}>logout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default Home;