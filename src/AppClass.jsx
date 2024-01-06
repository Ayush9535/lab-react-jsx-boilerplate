import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){

    let galleryStyle = {
      textAlign:"center",
      color:"red",
      // fontFamily:"sans-serif",
      // fontStyle:"italic" 
    }
  
    let styleMyDiv = {
      display:"grid",
      gridTemplateColumns:"49.5% 49.5%",
      gridGap:"1%"
    }
    this.data = this.imageData()
    return (
      <>
        <h1 style={galleryStyle}>Kalvium Gallery Using Class Component</h1>
        <div style={styleMyDiv}>
          <img src={this.data[0].img} width={"100%"}/>
          <img src={this.data[1].img} width={"100%"}/>
          <img src={this.data[2].img} width={"100%"}/>
          <img src={this.data[3].img} width={"100%"}/>
        </div>
      </>
    )
  }
}
