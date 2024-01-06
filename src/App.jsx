import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
  // code here
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

  let data = imageData()

  return (
    <>
      <h1 style={galleryStyle}>Kalvium Gallery Using Function Component</h1>
      <div style={styleMyDiv}>
        <img src={data[0].img} width={"100%"}/>
        <img src={data[1].img} width={"100%"}/>
        <img src={data[2].img} width={"100%"}/>
        <img src={data[3].img} width={"100%"}/>
      </div>


      {/* <div style={styleMyDiv}>
        {data.map((ele)=>(
          <div>
            <img src={ele.img} width={"100%"}/>
          </div>
        ))}
      </div> */}
    </>
  )
}

export default App;
