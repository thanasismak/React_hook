import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Select from 'react-select'

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
        <>
            <div className="topnav">
                <Link to={"/"}>Home</Link>
                <Link to={"/Page2"}>Page2</Link>
            </div >
            {/* mixBlendMode: 'multiply', */}
            <div style={{  marginLeft: 'auto', width: '100vh' }}> 
                <Select className='react-select-container' onChange={value => handleCategories(value)} options={options} />
            </div>
        </>
    );
}
export default Navbars;