import React from "react";
class MyButton extends React.Component{
    constructor(props){
        super();
    }
    render() {
        return (
            <a type="button" class="btn btn-primary" href={this.props.pdf}  download={true}>{this.props.name}</a>
        );
    }
}

export default MyButton;