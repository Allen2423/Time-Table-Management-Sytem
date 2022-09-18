import React, { useState } from "react";
import './App.css';
import Form from './form';

const Trial=(props)=>{
        // constructor(props) {
        //     super(props);
         const [content,
                message1,
                message2,
                message3,
                message4,
                message5,
                message6,
            ]=useState("");
            //this.changeContentHandler=this.changeContentHandler.bind(this);
        

       const handleCallback=(childData)=>{
            
            this.setState({message1: childData});
            // this.setState({message2: childData});
        }

      const  handleCallback2=(childData)=>{
            
            this.setState({message2: childData});
        }

      const  handleCallback3=(childData)=>{
            
            this.setState({message3: childData});
        }

      const  handleCallback4=(childData)=>{
            
            this.setState({message4: childData});
            // this.setState({message2: childData});
        }

      const  handleCallback5=(childData)=>{
            
            this.setState({message5: childData});
        }

       const handleCallback6=(childData)=>{
            
            this.setState({message6: childData});
        }

        // const [content,setState]=useState("");

       const changeContentHandler=(event)=>{
            this.setState({content: this.event.target.value});
        }
        

    
        
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

        const AddTime =(
            <>
            <p>{message1}</p>
            <h1>This is a place for adding time</h1>
            </>
        );

        const AddVenue =(
            <>
            <p>{message2}</p>
            <h1>This is a place for adding venue</h1>
            </>
        );

        const AddCourse =(
            <>
            <p>{message3}</p>
            <h1>This is a place for adding course</h1>
            </>
        );

        const AddLecturers =(
            <>
            <p>{message4}</p>
            <h1>This is a place for adding lecturers</h1>
            </>
        );

        const AddSubjects =(
            <>
            <p>{message5}</p>

            {/* <Form triaCallback={this.handleCallback} /> */}
            <h1>This is a place for adding subject</h1>
            </>
        );

        const AddDepartment =(
            <>
           <p>{message6}</p>
            <h1>This is a place for adding Department</h1>
            </>
        );

        const onload=(
            <>
                <Form 
           {...this.setState({handleCallback})}
           {...this.setState({handleCallback2})}
            triaCallback3={this.handleCallback3}
            triaCallback4={this.handleCallback4}
            triaCallback5={this.handleCallback5}
            triaCallback6={this.handleCallback6}/>
            </>
        )
         

        const side_bar=(
         <div className="side-bar">
         <ul className="side">
                 <li>Menu</li>
                 <li><a href="#">Home</a></li>
                 <li onClick={()=>this.setState({content: AddTime})}><a href="#" >Add Time</a></li>
                 <li onClick={()=>this.setState({content: AddVenue})}><a href="#" >Add Venue</a></li>
                 <li onClick={()=>this.setState({content: AddCourse})}><a href="#" >Add Course</a></li>
                 <li onClick={()=>this.setState({content: AddSubjects})}><a href="#" >Add Subject</a></li>
                 <li onClick={()=>this.setState({content: AddLecturers})}><a href="#" >Add Lecturers</a></li>
                 <li onClick={()=>this.setState({content: AddDepartment})}><a href="#" >Add Department</a></li>
             </ul>
     </div>
        );

        const content_center=(
            <div className="v-content">
                {this.state.content}
                
           
            <div className="table">
            </div>
        </div>
        );

        

        
     
        return (
        <div className="green">
             {nav_bar}
            {side_bar}
            {content_center} 
           
            
            </div>
            
         /* //   this.setState({message2: childData}) */
         
          
        );
            
    
}
export default Trial;