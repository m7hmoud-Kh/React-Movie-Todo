import React from "react";
class Card extends React.Component {
    constructor(props){
        super();
    }

    render() {
        return (
            <div className="card col-lg-3 offset-lg-1 mb-2 text-center " style={{backgroundColor:this.props.color,color:"white"}}>
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <hr />
            </div>
            </div>
        );
    }
}

export default Card;