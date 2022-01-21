import React from "react";
import '../index.css'

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {message : props.greeting};
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default Header;