import React, { Component } from 'react';

class BookOptions extends Component {
    render() {
        return (
            <div>
                <select>
                    <option>Move to...</option>
                    <option>Currently reading</option>
                    <option>Want to read</option>
                    <option>Read</option>
                    <option>None</option>
                </select>
            </div>
        );
    }
}

export default BookOptions;