import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import menuData from '../data/menu';

const Navbars = () => {
    const [result, setResult] = useState();

    useEffect(() => {
        setResult(menuData);
        // setUser(userInfo.display);
    }, []);

    return (
        <div className="topnav">
            {result && result.map(o => <a href={o.title}>{o.title}</a>)}
            <input type="text" placeholder="Search.." />
        </div>
    );
}
export default Navbars;