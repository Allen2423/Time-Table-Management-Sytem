import React from 'react';
//import ReactDom from react-Dom;
import './App.css';

const Form=({triaCallback,triaCallback2,triaCallback3})=>{

    // sendData=()=>{
    //     this.props.callbackFunction("Am just trying to pass value to Trial compoent");
    // }
    // constructor(props){
    //     super(props);
    //     this.state={ 
    //         Vname: '',
    //         VnameS: '',
    //         Vcapacity: '',
    //         Vdepartment: '',
    //         Pyr: '',
    //         Pname: '',
    //         Pcapacity:'',
    //         Psemister: '',
    //         Pdepartment: '',
    //         Lyr: '',
    //         Lname: '',
    //         Lsemister: '',
    //         Ldepartment: '',
    //         Cyr: '',
    //         Ccode:'',
    //         Cname: '',
    //         Cprogram: '',
    //         Ccapacity: '',
    //         Clecturer: '',
    //         Csemister: '',
    //         Cdepartment: '',
    //         Dyr: '',
    //         Dname: '',
    //         Ptry: ''
    //     };
    //   // this.props.triaCallback=this.props.triaCallback.bind(this);
    // }

    // const mychangeHandler=(event)=>{
    //     let nam = event.target.name;
    //        let val = event.target.value;
    //         this.setState({[nam]: val});
    //     alert(nam);
    //     console.log(this.Ptry);
        // this.setState({Vname: "Allen"});

    //     let namee='';
    // namee=this.state.userName;
    

        // name="userName";
//    }
//    onTriger=()=>{
//     let namee;
//     this.props.triaCallback(this.state.frm);
//    }

    // const mySubmitHandler=()=>{
    //     <h1>dd</h1>
    // }

   

    
        
        var pass=(
            <div className="venue-form">
            <p className="venueTitle">Add Time details</p>
            <form >
                <label className="label" >Venue Name </label>
                 <input type="text" className="venueInput"  placeholder="Tme Name" required/><br /><br />
                 {/* <label className="label">Venue Capacity</label><br />
                 <input type="text" className="venueInput" onChange={this.props.callbackFunction} placeholder="Venue Capacity" required/><br /><br />
                 <input type="text" className="venueInput"  onChange={this.mychangeHandler} placeholder="Year of study" required/><br /><br />
                 <label className="label">Venue Department</label><br />
                 <input type="text" className="venueInput"  onChange={this.mychangeHandler} placeholder="venue Department" required/>
                 <input type="submit" className="venueBtn" value="Submit"/><br/><br/> */}
             </form> 
             </div>
           
            
        );

        var pass2=(
            <>
            {/* <h1>This is a place for adding venue</h1> */}
            
            <div className="venue-form">
            
            <p className="venueTitle">Add venue  details</p>
            <form >
                <h2 className="displ"></h2>
                 <label className="label" >vvvvvvvv</label><br />
                 <input type="text" className="venueInput" name="Vname"   placeholder="Venue Name" required/><br /><br />
                 {/* <label className="label">Venue code</label><br />
                 <input type="text" className="venueInput" name="VnameS" onChange={this.mychangeHandler} placeholder="Venue code" required/><br /><br />
                 {/* <label className="label" >{this.state.Vname}</label><br />
                 <input type="text" className="venueInput" name="name"  onChange={this.handleVName}  placeholder="Department" required/><br /><br /> */}
                {/* <label className="label">Venue Capacity </label><br />
                 <input type="text" className="venueInput" name="Vcapacity" onChange={this.mychangeHandler} placeholder="Venue Capacity" required/><br /><br />
                 <label className="label">Select Department</label><br />
                 <input type="text" className="venueInput" name="Vdepartment" onChange={this.mychangeHandler} placeholder="Select Department" required/> */} 
                 <input type="submit" className="venueBtn" value="Submit"/><br/><br/>
             </form> 
             </div>
             </>
            
        );

        var pass3=(
            <>
               
               <div className="venue-form">
            <p className="venueTitle">Add Program details</p>
            <form >
                <label className="label" >Program Name</label><br />
                 <input type="text" className="venueInput" name="Pname"   placeholder="Program Name" required/><br /><br />
                 {/* <label className="label">Program Capacity</label><br />
                 <input type="text" className="venueInput" name="Pcapacity" onChange={this.mychangeHandler} placeholder="Program Capacity" required/><br /><br />
                 <label className="label">Select Semister</label><br />
                 <input type="text" className="venueInput" name="Psemister" onChange={this.mychangeHandler} placeholder="Select Semister" required/><br /><br />
                 <label className="label">Year of Study</label><br />
                 <input type="text" className="venueInput" name="Pyr" onChange={this.mychangeHandler} placeholder="Year of study" required/><br /><br />
                 <label className="label">Select Department</label><br />
                 <input type="text" className="venueInput" name="Pdepartment" onChange={this.mychangeHandler} placeholder="Select Department"  required/>*/}
                 <input type="submit" className="venueBtn" value="Submit"/><br/> <br/> 
                 
             </form> 
             </div>
            </>
        );

//         var pass4=(
//             <>
           
//             <div className="venue-form">
//             <p className="venueTitle">Add lecturers details</p>
//             <form onSubmit={this.mySubmitHandler}>
//                 <label className="label" >lecturer Name</label><br />
//                  <input type="text" className="venueInput" name="Lname" onChange={this.mychangeHandler}   placeholder="lecturer Name" required/><br /><br />
//                  {/* <label className="label">Venue Capacity</label><br />
//                  <input type="text" className="venueInput" onChange={this.mychangeHandler} placeholder="Venue Capacity"/><br /><br required/> */}
//                  <label className="label">Select Semister</label><br />
//                  <input type="text" className="venueInput" name="Lsemister" onChange={this.mychangeHandler} placeholder="Select Semister" required/><br /><br />
//                  <label className="label">Year of Study</label><br />
//                  <input type="text" className="venueInput" name="Lyr" onChange={this.mychangeHandler} placeholder="Year of study" required/><br /><br />
//                  <label className="label">Select Department</label><br />
//                  <input type="text" className="venueInput" name="Ldepartment" onChange={this.mychangeHandler} placeholder="Select Department" required />
//                  <input type="submit" className="venueBtn" value="Submit"/><br/><br/>
//              </form> 
//              </div>
//              </>
//         );

//         var pass5=(
//         <>
            
//             <div className="venue-form">
//             <p className="venueTitle">Add Course details</p>
//             <form onSubmit={this.mySubmitHandler}>
//                 <label className="label" >Course Name</label><br />
//                  <input type="text" className="venueInput" name="Cname"  onChange={this.mychangeHandler}  placeholder="Course Name" required/><br /><br />
//                  <label className="label">Course Capacity</label><br />
//                  <input type="text" className="venueInput" name="Ccapacity" onChange={this.mychangeHandler} placeholder="Course Capacity" required/><br /><br />
//                  <label className="label">Course Code</label><br />
//                  <input type="text" className="venueInput" name="Ccode" onChange={this.mychangeHandler} placeholder="Course Code" required/><br /><br />
//                  <label className="label">Select Semister</label><br />
//                  <input type="text" className="venueInput" name="Csemister" onChange={this.mychangeHandler} placeholder="Select Semister" required/><br /><br />
//                  <label className="label">Select Lecturer</label><br />
//                  <input type="text" className="venueInput" name="Clecturer" onChange={this.mychangeHandler} placeholder="Select Lecturer" required/><br /><br />
//                  <label className="label">Select Program</label><br />
//                  <input type="text" className="venueInput" name="Cprogram" onChange={this.mychangeHandler} placeholder="Select Program" required/><br /><br />
//                  <label className="label">Year of Study</label><br />
//                  <input type="text" className="venueInput" name="Cyr" onChange={this.mychangeHandler} placeholder="Year of study" required/><br /><br />
//                  <label className="label">Select Department</label><br />
//                  <input type="text" className="venueInput" name="Cdepartment" onChange={this.mychangeHandler} placeholder="Select Department" required/>
//                  <input type="submit" className="venueBtn" value="Submit"/><br/><br/>
//              </form> 
//              </div>
//         </>
//     );

//     var pass6=(
//        <> 
        
//         <div className="venue-form">
//             <p className="venueTitle">Add Department details</p>
//             <form onSubmit={this.mySubmitHandler}>
//                 <label className="label" >Department Name</label><br />
//                  <input type="text" className="venueInput" name="Dname" onChange={this.mychangeHandler}  placeholder="Department Name" required/><br /><br />
//                  <label className="label">Year of Study</label><br />
//                  <input type="text" className="venueInput" name="Dyr" onChange={this.mychangeHandler} placeholder="Year of study" required/><br /><br />
//                  {/* <label className="label">Venue Capacity</label><br />
//                  <input type="text" className="venueInput" onChange={this.mychangeHandler} placeholder="Venue Capacity" required/><br /><br />
//                  <label className="label">Choose Semister</label><br />
//                  <input type="text" className="venueInput" onChange={this.mychangeHandler} placeholder="Semister" required/><br /><br />
//                  <label className="label">Year of Study</label><br />
//                  <input type="text" className="venueInput" onChange={this.mychangeHandler} placeholder="Year of study" required/><br /><br />
//                  <label className="label">Venue Department</label><br />
                
//                  <input type="text" className="venueInput" onChange={this.mychangeHandler} placeholder="venue Department" required/> */}
//                  {/* <input type="text" placeholder="try" name="Ptry" name="Vname" onChange={this.mychangeHandler}/><br/> */}
//                  <input type="submit" className="venueBtn" value="Add"/><br/><br/>
//              </form> 
//              </div>
//         </>
// );
        
            const trr=(<>
                    {triaCallback=pass}
                    {triaCallback2=pass2}
                    {triaCallback3=pass3}
            </>);

        return(
        <>      
           {trr}

           {/*{ triaCallback3=pass3}

           { this.props.triaCallback4(pass4)}

            {this.props.triaCallback5(pass5)}

           { this.props.triaCallback6(pass6) } */}
                
        </>
        );
    }


export default Form;