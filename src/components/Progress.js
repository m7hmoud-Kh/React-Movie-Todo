import React from "react";
class Progress extends React.Component{
    constructor(props){
        super();
    }

    render() {
        return (
            <div className="progress mb-2" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-danger" style={{width:this.props.size}}>
                {this.props.size}
            </div>
            </div>

        );
    }
}


export default Progress;