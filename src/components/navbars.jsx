import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import menuData from '../data/menu';
import Select from 'react-select'
// import 'bootstrap/dist/css/bootstrap.css';

const Navbars = () => {
    const history = useHistory();

    const handleCategories = (target) => {
        history.push(`${target.to}`)
    }
    const options = [
        { value: 'Home', label: 'Home', to: '/' },
        { value: 'Page2', label: 'Page2', to: '/Page2' },
        { value: 'Section1', label: 'Section1', to: '/Section1' },
        { value: 'Section2', label: 'Section2', to: '/Section2' }
    ];

    return (
        <div style={{width: '100vh'}}>
            <div className="topnav">
                <Link to={"/"}>Home</Link>
                <Link to={"/Page2"}>Page2</Link>

            </div >
           
                <Select classNamePrefix="react-select" className='react-select-container' onChange={value => handleCategories(value)} options={options} />
        </div>
    );
}
export default Navbars;