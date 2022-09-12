import React from "react";
import '../App.css';

const Department=()=>{
    return (
    <div className="form-superContainer">
    <div className="venue-form form-group">
        <p className="venueTitle">Add Department details</p>
        <form className="form-flex">
        <div className="labox">
            <label className="label" >Department Name</label><br />
             <input type="text" className="venueInput form-control" name="Dname"   placeholder="Department Name" required/><br />
        </div>
             <input type="submit" className="venueBtn btn btn-dark" value="Add"/><br/><br/>
         </form> 
         </div>
         </div>
         );
    }
export default Department;