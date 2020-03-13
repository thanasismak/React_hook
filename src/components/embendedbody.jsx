import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";
import Form from "../components/form";

const Embendedbody = () => {
    const [data, setData] = useState({});
    const [tab, setTab] = useState(0);
    const [index, setIndex] = useState(-1);
    useEffect(() => {
        fetch(`https://voda-react-assessment.herokuapp.com/home`, {
            headers: new Headers({ accept: "application/json; odata=verbose" })
        })
            .then(res => res.json())
            .then(res => {
                setData({
                    description: res.map(o => o.description),
                    section1: res.map(o => o.sections[0]),
                    section2: res.map(o => o.sections[1]),
                });
            });
    }, [tab]);

    return (
        <div style={{ backgroundColor: "#cfdef3", padding: 1 }}>
            <h4 style={{ textAlign: "center" }}>{data.description}</h4>
            <nav id="topnav2">
                <Link onClick={() => setTab(0)} to={"/Section1"}>
                    Section 1
        </Link>
                <Link onClick={() => setTab(1)} to={"/Section2"}>
                    Section 2
        </Link>
            </nav>


            {tab === 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", padding: '50px' }}>
                    {data.section1 &&
                        data.section1.map(o =>
                            o.images.map((image, i) => (
                                <div key={image.title} id={i != 0 ? 'tilefeature' : 'tiles'}>
                                    <img alt="kati" style={{ width: "50%" }} src={image.img} />
                                </div>
                            ))
                        )}
                </div>
            )}
            {tab === 1 && (
                <div style={{ margin: 40 }}>
                    {data.section2 &&
                        data.section2.map((o, i) =>
                            <div style={{ textAlign: '-webkit-center', justifySelf: 'center', flexWrap: 'wrap' }}>
                                <h4 style={{ color: 'blue' }}>{o.title}</h4>
                                <h3>{o.graphText}</h3>
                                <div className="range" >
                                    <h3>{o.stats.map(o => o.title)}</h3>
                                    <input type="range" min="-100" max="0" value="0" className="range blue" />
                                </div>
                                <Form />
                            </div>
                        )
                        // o.images.map(image => (
                        //     <div key={image.title} style={{ display: "flex" }}>
                        //         <img alt="kati" style={{ width: "50%" }} src={image.img} />
                        //     </div>
                        // ))
                    }
                </div>
            )}
        </div >
    );
};

export default Embendedbody;
