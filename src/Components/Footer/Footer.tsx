import React from "react";
import './Footer.css';


const Footer=()=>{
    return (
      <div className="justify-content-center">
        <div className="footer-clean">
        <footer>
            
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item" style={{ textAlign: 'center' }}>
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item" style={{ textAlign: 'center' }}>
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Legacy</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item" style={{ textAlign: 'center' }}>
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="#">Job openings</a></li>
                            <li><a href="#">Employee success</a></li>
                            <li><a href="#">Benefits</a></li>
                        </ul>
                    </div>
                </div>
           
        </footer>
    </div>
    </div>
    )
}

export default Footer;