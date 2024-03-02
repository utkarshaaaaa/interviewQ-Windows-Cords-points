
import './App.css';
import React,{useState} from 'react'

function App() {

  const[cords,setCords]=useState([])
  const[height,setHeight]=useState(10)
  const[width,setWidth]=useState(10)

  const handleClick=(e)=>{
    const{clientX,clientY}= e
    setCords([...cords,{
      x:clientX,
      y:clientY,
    }])

    console.log(cords)


  }

  
  const undo=()=>{
    const updatedCords=[...cords]
    updatedCords.pop()
    setCords(updatedCords)

  }


  return (
    <>
     <button onClick={undo}>Undo</button>

     Height<button onClick={()=>{setHeight(height+1)}}>+</button><button onClick={()=>{setHeight(height-1)}}>-</button>
     Width<button onClick={()=>{setWidth(width+1)}}>+</button><button onClick={()=>{setWidth(width-1)}}>-</button>

    
 
    <div className="App" onClick={(e)=>{handleClick(e)}}>
   
      {
        cords.map((cords,indx)=>{
          return <div className='cords' style={{
            left : cords.x -5 +"px",
            top:cords.y -10 + "px",
            width: width +"px",
           height: height+"px"
          }}>
            
            
          </div>
        })
      }

      
      
    </div>
    
    </>
  );
}

export default App;
