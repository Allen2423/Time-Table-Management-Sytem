import React, { Component,useState } from "react";
import './App.css';
import Form from './form';

const Trial=()=>{
        const [mess,setMess]=useState({
                content: '',
                message1: '',
                message2: '',
                message3: '',
                message4: '',
                message5: '',
                message6: ''
        });
           

        const handleCallback=(childData)=>{
            
            setMess({message1: childData});
            // this.setState({message2: childData});
        }

        const handleCallback2=(childData)=>{
            
            setMess({message2: childData});
        }

        const handleCallback3=(childData)=>{
            
            setMess({message3: childData});
        }

        // handleCallback4=(childData)=>{
            
        //     this.setState({message4: childData});
        //     // this.setState({message2: childData});
        // }

        // handleCallback5=(childData)=>{
            
        //     this.setState({message5: childData});
        // }

        // handleCallback6=(childData)=>{
            
        //     this.setState({message6: childData});
        // }

        // const [content,setState]=useState("");

        // changeContentHandler=(event)=>{
        //     this.setState({content: this.event.target.value});
        // }
        

   
        
        // const{message1}=this.state;
        // const{message2}=this.state;
        // const{message3}=this.state;
        // const{message4}=this.state;
        // const{message5}=this.state;
        // const{message6}=this.state;

        const nav_bar=(
            <div className="nav-bar">
                <span className="BrandName">TMS</span>
                <ul className="nav">
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Logout</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        );

        // const passFunc =(
           
        // );

        const AddTime =(
            <>
            {/* {passFunc} */}
            <Form 
            triaCallback={handleCallback}
            //  triaCallback2={handleCallback2}
            //  triaCallback3={handleCallback3}
             // triaCallback4={this.handleCallback4}
             // triaCallback5={this.handleCallback5}
             // triaCallback6={this.handleCallback6}
             />
            <p>{mess.message1}</p>
            <h1>This is a place for adding time</h1>
            </>
        );

        const AddVenue =(
            <>
             {/* <Form 
           // triaCallback={handleCallback}
            //   triaCallback2={handleCallback2}
            //  triaCallback3={handleCallback3}
             // triaCallback4={this.handleCallback4}
             // triaCallback5={this.handleCallback5}
             // triaCallback6={this.handleCallback6}
             /> */}
             {/* {passFunc} */}
            <p>{mess.message2}</p>
            <h1>This is a place for adding venue</h1>
            </>
        );

        const AddCourse =(
            <>
             <Form 
            //triaCallback={handleCallback}
            //  triaCallback2={handleCallback2}
            //  triaCallback3={handleCallback3}
             // triaCallback4={this.handleCallback4}
             // triaCallback5={this.handleCallback5}
             // triaCallback6={this.handleCallback6}
             />
             {/* {passFunc} */}
            <p>{mess.message3}</p>
            <h1>This is a place for adding course</h1>
            </>
        );

        const AddLecturers =(
            <>
             {/* {passFunc} */}
            <p>{mess.message4}</p>
            <h1>This is a place for adding lecturers</h1>
            </>
        );

        const AddSubjects =(
            <>
             {/* {passFunc} */}
            <p>{mess.message5}</p>

            {/* <Form triaCallback={this.handleCallback} /> */}
            <h1>This is a place for adding subject</h1>
            </>
        );

        const AddDepartment =(
            <>
           <p>{mess.message6}</p>
           
          
            <h1>This is a place for adding Department</h1>
            </>
        );
         

        const side_bar=(
         <div className="side-bar">
         <ul className="side">
                 <li>Menu</li>
                 <li><a href="#">Home</a></li>
                 <li onClick={()=>setMess({content: AddTime})}><a href="#" >Add Time</a></li>
                 <li onClick={()=>setMess({content: AddVenue})}><a href="#" >Add Venue</a></li>
                 <li onClick={()=>setMess({content: AddCourse})}><a href="#" >Add Course</a></li>
                 <li onClick={()=>setMess({content: AddSubjects})}><a href="#" >Add Subject</a></li>
                 <li onClick={()=>setMess({content: AddLecturers})}><a href="#" >Add Lecturers</a></li>
                 <li onClick={()=>setMess({content: AddDepartment})}><a href="#" >Add Department</a></li>
             </ul>
     </div>
        );

        const content_center=(
            <div className="v-content">
                {mess.content}
                
           
            <div className="table">
            </div>
        </div>
        ); 
     
        return (
        <div className="green">
             {nav_bar}
            {side_bar}
            {content_center} 
            <h1>Am trying to pass value in default react app</h1>
           
           
            </div>
            
         /* //   this.setState({message2: childData}) */
         
          
        );
            
    }

export default Trial;