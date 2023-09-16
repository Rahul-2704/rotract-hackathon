import React from 'react';
import {Button} from "@mui/material";

const btn = {
    fontSize : '1.5rem',
    color : '#C5C6C7'
}

export default function Header() {
    return (
        <nav>
            <div id="nav-left">
                <img src={Logo} alt="logo" id="nav-logo"/>
                <a id='wallet-id'} target='_blank'></a>
                <Button className="nav-btn" sx={btn}>Voting</Button>
                <Button className="nav-btn" sx={btn}>Result</Button>
            </div>
            <Button className="nav-btn" id='logout-btn' sx={btn}>Logout</Button>
        </nav>
    )
}

