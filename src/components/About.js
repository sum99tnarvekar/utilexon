import { useState } from "react";
import React from "react";

export default function About() {
    const [myStyle, setStyle] = useState({
        accBtnStyle: {
            backgroundColor: 'white',
            color: 'black'
        },
        accBodyStyle: {
            border: '1px solid #dee2e6'
        }
    }
    )

    const [btnText, setBtnText] = useState('Dark Mode')

    const toggleMode = () => {
        if (myStyle.accBtnStyle.backgroundColor === 'white') {
            setStyle({
                ...myStyle,
                accBtnStyle: {
                    ...myStyle.accBtnStyle,
                    backgroundColor: 'black',
                    color: 'white'
                },
                accBodyStyle: {
                    ...myStyle.accBodyStyle,
                    border: '1px solid black'
                }
            })
            setBtnText("Light Mode")
        } else {
            setStyle({
                ...myStyle,
                accBtnStyle: {
                    ...myStyle.accBtnStyle,
                    backgroundColor: 'white',
                    color: 'black'
                },
                accBodyStyle: {
                    ...myStyle.accBodyStyle,
                    border: '1px solid #dee2e6'
                }
            })
            setBtnText("Dark Mode")
            // border: var(--bs - accordion - border - width) solid var(--bs - accordion - border - color);
        }
    }

    return (
        <div className="container mt-5">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle.accBtnStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ ...myStyle.accBodyStyle, ...myStyle.accBtnStyle }}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle.accBtnStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ ...myStyle.accBodyStyle, ...myStyle.accBtnStyle }}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle.accBtnStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ ...myStyle.accBodyStyle, ...myStyle.accBtnStyle }}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button type="button" onClick={toggleMode} className="btn btn-outline-primary mt-3">{btnText}</button>
            </div>
        </div>
    )
}