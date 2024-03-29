import React from "react";
import Card from "./components/Card";
class Portfolio extends React.Component{
    constructor(){
        super();
    }

    render() {
        return (
            <div className="row d-flex justify-center">
                <h2>Portfolio</h2>
                <Card title="Card One" color="black" />
                <Card title="Card Two" color="gray" />
                <Card title="Card Three" color="black" />
                <Card title="Card Four" color="gray" />
                <Card title="Card five" color="black" />
                <Card title="Card Six" color="gray" />

            </div>
        );
    }

}

export default Portfolio