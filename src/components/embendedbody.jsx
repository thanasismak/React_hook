import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//components
import Form from "../components/form";

const Embendedbody = () => {
    const [data, setData] = useState({});
    const [tab, setTab] = useState(0);
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

    const Color = (color) => {
        if (color === 0) {
            return "range blue";
        }
        else if (color === 1) {
            return "range purple";
        }
        else if (color === 2) {
            return 'range pink';
        }
        else {
            return 'range ltpurple';
        }
    }

    return (
        <div style={{ backgroundColor: "#cfdef3", padding: 1 }}>
            <h4 style={{ textAlign: "center" }}>{data.description}</h4>
            <nav id="botnav">
                <Link onClick={() => setTab(0)} to={"/Section1"}>
                    Section 1
                </Link>
                <Link onClick={() => setTab(1)} to={"/Section2"}>
                    Section 2
                </Link>
            </nav>

            {tab === 0 && (
                <div
                    style={{
                        display: "flex",
                        padding: "50px"
                    }}
                >
                    {data.section1 &&
                        data.section1.map(o =>
                            o.images.map((image, i) => (
                                <div key={image.title} id={i !== 0 ? "tilefeature" : "tiles"}>
                                    <img alt="kati" style={{ width: "50%" }} src={image.img} />
                                </div>
                            ))
                        )}
                </div>
            )}
            {tab === 1 && (
                <div
                    style={{
                        margin: 60,
                        justifySelf: "center",
                        flexWrap: "wrap",
                        display: "flex"
                    }}
                >
                    {data.section2 &&
                        data.section2.map(o => (
                            <>
                                <div style={{ marginLeft: "10vw" }}>
                                    <h4 style={{ color: "blue" }}>{o.title}</h4>
                                    <h3>{o.graphText}</h3>
                                    {o.stats.map((j, index) => (
                                        <>
                                            <h3>{j.title}</h3>
                                            <input
                                                key={index}
                                                type="range"
                                                min="0"
                                                max="100"
                                                defaultValue={j.amount / 10}
                                                className={Color(index)}
                                            />
                                            {j.amount / 10}%
                                        </>
                                    ))}
                                </div>
                                <div
                                    style={{
                                        paddingLeft: "3vw",
                                        marginLeft: "15vw",
                                        marginTop: 35
                                    }}
                                >
                                    <div style={{ textAlign: 'center' }}>
                                        <h2>{o.formText}</h2>
                                        <h5>We work with ecosystem leaders, corporations and starups worldwide.<br />How can we help you?</h5>
                                        <Form key={'work'} form={(o.formLabels)} btn={o.buttonText} />
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default Embendedbody;
