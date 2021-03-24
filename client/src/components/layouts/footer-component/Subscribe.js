import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Subscribe extends Component {
    render() {
        return (
            <div className="subscribe">
                <h1>Thank you for your submission!</h1>
                <p>You will get email with further instructions.</p>
                <Link to="/"><button type="button" className="btn btn-outline-secondary pr-5 pl-5 rounded-pill">Go Back</button></Link>
            </div>
        )
    }
}
