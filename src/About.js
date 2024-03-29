import React from "react";
import MyButton from "./components/MyButton";
import pdf from './assets/lab1-wp.pdf'

class About extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="row mt-5">
                <h1 className="col-lg-6">About Us</h1>
                <div className="col-lg-6 lh-lg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolores aspernatur deserunt quos nisi dicta ex hic. Provident dolores delectus sint ad recusandae totam, quis, saepe voluptatem quidem, molestias tempore.</p>

                    <MyButton name="Download CV" pdf={pdf}/>
                </div>
            </div>
        );
    }
}

export default About