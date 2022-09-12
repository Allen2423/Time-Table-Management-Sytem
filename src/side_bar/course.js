import React from "react";
import '../App.css';

const Course=()=>{

    const input_List=[
        {input_Box: "labox", label: "Course Name", name: "Cname", placeholder: "Course Name" },
        {input_Box: "labox", label: "Course Capacity", name: "Ccapacity", placeholder: "Course Capacity" },
        {input_Box: "labox", label: "Course Code", name: "Ccode", placeholder: "Course Code" },
        {input_Box: "labox", label: "Select Semister", name: "Csemister", placeholder: "Select Semister" },
        {input_Box: "labox", label: "Select Lecturer", name: "Clecturer", placeholder: "Select Lecturer" },
        {input_Box: "labox", label: "Select Program", name: "Cprogram", placeholder: "Select Program" },
        {input_Box: "labox", label: "Year of Study", name: "Cyr", placeholder: "Year of study" },
        {input_Box: "labox", label: "Select Department", name: "Cdepartment", placeholder: "Select Department" }
    ];

    return (
    <div className="form-superContainer">
        <div className="venue-form container-*">
            <p className="venueTitle">Add Course details</p>
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
export default Course;