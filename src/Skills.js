import React from "react";
import Progress from "./components/Progress";
class Skills extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (

            <div className="row  mt-5 mb-5 text-center" style={{backgroundColor:"rgb(96, 96, 96)",color:"white"}}>
                <h2 className="mb-2">Skills</h2>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea alias dolorem expedita dolor, molestias accusamus sed aliquid impedit asperiores labore sapiente repellat, optio ratione, nulla sequi rem a odit praesentium?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea alias dolorem expedita dolor, molestias accusamus sed aliquid impedit asperiores labore sapiente repellat, optio ratione, nulla sequi rem a odit praesentium?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea alias dolorem expedita dolor, molestias accusamus sed aliquid impedit asperiores </p>

                <div className="col-lg-6">
                    MyFoucs
                    <hr/>
                    <h3>Ui/Ux</h3>
                    <h3>Front End</h3>
                    <h3>BackEnd</h3>

                </div>
                <div className="col-lg-6 mt-5">
                    <Progress size="10%" />
                    <Progress size="20%" />
                    <Progress size="30%" />
                    <Progress size="50%" />
                    <Progress size="70%" />

                </div>
            </div>

        );
    }
}

export default Skills