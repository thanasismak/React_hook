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
                    tile1: res.map(o => o.tiles[0]),
                    tile2: res.map(o => o.tiles[1]),
                    tile3: res.map(o => o.tiles[2])
                });
            });
    }, []);

    return (
        <div style={{ backgroundColor: "#cfdef3", padding: 1 }}>
            <h4 style={{ textAlign: 'center' }}>{data.description}</h4>
            {data && data.map(o =>
                <>

                    <div style={{ justifyContent: "center" }} className="page2Body">
                        <div className="card-container">
                            <h4>{o.tile1.title}</h4>
                            <h6>{o.tile1.description}</h6>
                            <h5>{o.tile1.link}</h5>
                        </div>

                    </div>
                    <div style={{ justifyContent: "center" }} className="page2Body">
                        <div className="card-container">
                            <h4>{o.tile2.title}</h4>
                            <h6>{o.tile2.description}</h6>
                            <h5>{o.tile2.link}</h5>
                        </div>

                    </div>
                    <div style={{ justifyContent: "center" }} className="page2Body">
                        <div className="card-container">
                            <h4>{o.tile3.title}</h4>
                            <h6>{o.tile3.description}</h6>
                            <h5>{o.tile3.link}</h5>
                        </div>

                    </div>
                </>
            )
            }
        </div >
    );
}
export default Page2;