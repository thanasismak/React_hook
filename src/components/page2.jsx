import React, { useState, useEffect } from 'react';

const Page2 = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://voda-react-assessment.herokuapp.com/page `, {
            headers: new Headers({ accept: "application/json; odata=verbose" })
        })
            .then(res => res.json())
            .then(res => {
                setData({
                    description: res.map(o => o.description),
                    tiles: res.map(o => o.tiles),
                });
            });
    }, []);

    return (
        <div style={{ backgroundColor: "#cfdef3", padding: 1 }}>
            <h4 style={{ textAlign: 'center' }}>{data.description}</h4>
            <div style={{ justifyContent: "center" }} className="page2Body">
                {data.tiles && data.tiles.map((o, index) => (
                    <div key={index}>
                        {o && o.map((j, index) =>
                            <div key={index} className="card-container">
                                <a className="App-link">{j.icon}</a>
                                <h4>{j.title}</h4>
                                <h6>{j.description}</h6>
                                <a href="#" className="App-link"><h5>{j.link}></h5></a>
                            </div>

                        )
                        }
                    </div>
                )
                )
                }
            </div>
        </div >
    );
}
export default Page2;