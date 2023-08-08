import React from 'react'
import ResoluteAILogo from "../assets/images/resoluteai-logo.png";

const Navbar = () => {
    return (
        <>
            <div>
                <div style={{
                    width: "100%", marginTop: "0", height: "40px",
                    display: "flex",
                    justifyContent: "space-between",
                    listStyleType: "none",
                    padding: "10px",
                    boxShadow: " 0px 4px 6px rgba(0, 0, 0, 0.1)",



                }}>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "20%" }}>

                        <img src={ResoluteAILogo} alt='logo' style={{ width: '40%' }} />
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "100" }}><h1>

                        RAI PGP Bottle Counting Dashboard
                    </h1>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "20%" }}>

                        <img src={ResoluteAILogo} alt='logo' style={{ width: '40%' }} />
                    </div>
                    {/* <li><img src={ResoluteAILogo} alt='logo' style={{width:'20%'}} /></li> */}

                </div>
            </div>

        </>
    )
}

export default Navbar