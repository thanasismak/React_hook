import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import menuData from '../data/menu';

const Navbars = (props) => {
    const [result, setResult] = useState();
    const [url, setUrl] = useState();

    useEffect(() => {
        setResult(menuData);
        setUrl(props.props);
        // setUser(userInfo.display);
    }, []);

    return (
        <div className="topnav">
            {/* {result && result.map((o, index) => { return <Link to={o.title} > {o.title}</Link> })} */}
            <Link to={"/"}>Home</Link>
            <Link to={"/Page2"}>Page2</Link>
            <input type="text" placeholder="Search.." />
        </div >
    );
}
export default Navbars;