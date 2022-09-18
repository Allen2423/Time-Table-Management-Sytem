import React from "react";
import '../App.css';

const Venue=()=>{

    const input_List=[
        {input_Box: "labox", label: "Venue Name", name: "Vname", placeholder: "Venue Name" },
        {input_Box: "labox", label: "Venue Capacity", name: "Vcapacity", placeholder: "Venue Capacity" },
        {input_Box: "labox", label: "Select Department", name: "Vdepartment", placeholder: "Select Department" },
        {input_Box: "labox", label: "Venue Capacity", name: "Vcapacity", placeholder: "Venue Capacity" }
    ];

    return(
    <div className="form-superContainer container">
        <div className="venue-form container-*">
            <p className="venueTitle">Add Venue details</p>
                <form className="form-flex">
                    {input_List.map((value)=>{
                        return (
                            <div className={value.input_Box}>
                                <label className="label" >{value.label}</label><br />
                                <input type="text" className="venueInput form-control" name={value.name}   placeholder={value.placeholder} required/><br />
                            </div>
                        );
                    })}
                    <input type="submit" className="venueBtn btn btn-dark" value="Submit"/><br/> <br/> 
                </form> 
            </div>
        </div>
    );
    }
export default Venue;