import React, { Component } from 'react';
import {Link} from "react-router-dom"

class AddBook extends Component {
    render() {
        return (
            <div className="addbook-container">
                <Link to="/search" >add book</Link>
            </div>
        );
    }
}

export default AddBook;