import React, { Component,useCallback } from "react";
import './App.css';
import Form from './form';
import './css/bootstrap.min.css';

class Dashboard extends Component{
        constructor(props) {
            super(props);
            this.state={
                content: '',
                message1: '',
                message2: '',
                message3: '',
                message4: '',
                message5: '',
                message6: ''
            }
            // this.handleCallback=this.handleCallback.bind(this);
        }

        // mySubmitHandler1=()=>{
        //     // event.preventDefault();
        //     prompt( this.state.content);
        // }

        // handleCallback=(childData)=>{
            
        //     this.setState({message1: childData});
        //     // this.setState({message2: childData});
        // }
        
    render () {

        // var side_bar=(
        //  <div className="side-bar">
         {/* <ul className="side">
                 <li className="Li">Menu</li>
                 <li className="Li"><a href="#">Home</a></li>
                 <li className="Li" onClick={()=>this.setState({content: AddTime})}><a href="#" >Add Time</a></li>
                 <li className="dropDown"><a>Venue</a>
                    <ul className="subUl">
                        <li className="subLi" onClick={()=>{<Form triaCallback={this.handleCallback}/>}}><a href="#" >Add Venue</a></li>
                        <li className="subLi" onClick={<Form triaCallback2={this.handleCallback2}/>}><a href="#" >Add Program</a></li>
                        <li className="subLi" onClick={<Form triaCallback3={this.handleCallback3}/>}><a href="#" >Add Course</a></li>
                    </ul>
                 </li>
                 <li className="Li" onClick={()=>this.setState({content: AddLecturers})}><a href="#" >Add Lecturers</a></li>
                 <li className="Li" onClick={()=>this.setState({content: AddDepartment})}><a href="#" >Add Department</a></li>
                
        </ul> */}
    //  </div>
    //     );

        const box_info=[
            {class: "data-box fa fa-users f-s-40 color-success", name:"First box"},
            {class: "data-box fa fa-address-card f-s-40 color-primary", name:"Second box"},
            {class: "data-box fa fa-th-large", name:"Third box"},
            {class: "data-box", name:"Fourth box"}
        ];

            var dashBox=box_info.map((value)=>{
                return(
                <div className={value.class}>
                <span>{value.name}</span>
            </div>);
            });
        return (
        <div className="data-Container">
            <div className="data-superContainer ">
                {dashBox}
                <div className="graph_box"/>
            </div> 
        </div>  
        );   
    }
}
export default Dashboard;