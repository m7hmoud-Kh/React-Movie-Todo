import React from "react";
import MyButton from "./components/MyButton";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Footer extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <footer className="bg-dark text-white mt-5">
            <div className="container py-4">
              <div className="row py-5">
                <div className="col-md-4 mb-3 mb-md-0">
                    <h6 className="text-uppercase mb-3">Get In touch</h6>
                    <ul className="list-unstyled mb-0">
                        <li><a className="footer-link" href="#">Help &amp; Contact Us</a></li>
                        <li><a className="footer-link" href="#">Returns &amp; Refunds</a></li>
                        <li><a className="footer-link" href="#">Online Stores</a></li>
                        <li><a className="footer-link" href="#">Terms &amp; Conditions</a></li>
                    </ul>
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                    <MyButton name="Contact Us"/>

                </div>
                <div className="col-md-4">
                  <h6 className="text-uppercase mb-3">Social media</h6>
                <div>
                    <i className="fab fa-facebook m-2"></i>
                    <i className="fab fa-instagram m-2"></i>
                    <i className="fab fa-twitter m-2"></i>
                </div>
                </div>
              </div>

            </div>
          </footer>
        );
    }
}

export default Footer;