import React, { Component } from "react";
import "./user.css";

class User extends Component {
    render() { 
        return ( 
            <div className="user-container">
                <div className="row">
                    <div className="col-md-1">
                        <img src="https://loremflickr.com/320/240?random=1" alt="userimage" className="user-img" />
                    </div>
                    <div className="col-md-11">
                        <p className="user-name">User Name</p>
                        <p className="user-Location"> Location </p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default User;