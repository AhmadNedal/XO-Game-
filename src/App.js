import './App.css';
import { useState } from 'react';
import Start from './Start';

function App() {
  
  const [box,setBox] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1]) ; 
  const [reserved,setReserved] = useState([0,0,0,0,0,0,0,0,0]) ; 
  const [turn, setTurn]= useState(1) ; 
  const [show,setShow] = useState(false); 
  const [start,setStart] = useState(true); 
  const [name1 , setName1 ] = useState("Player1"); 
  const [name2 , setName2 ] = useState("Player2"); 
  const [Same , setSame ] = useState(0); 

  const HandelClick=(idx)=> {

     if (!reserved[idx]){
        let newBox = [...box];
        let newReserved = [...reserved];
        newReserved[idx]= 1 ;
        newBox[idx]=turn; 
        setReserved(newReserved) ; 
        setTurn(!turn);
        setBox(newBox); 
        setSame(Same+1) ;
      }

      if ( Same>=8 ){
        setShow(true) ; 
      }

  }


  const Game = ()=>{ 

    return ( 
      <>
      <table>
          <tr onClick={()=>{
            if ( (turn==box[4]&&turn==box[8]) || (turn==box[1]&&turn==box[2]) ||(turn==box[3]&&turn==box[6]) )  {
                setShow(true)
            }
            HandelClick(0); 
          }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[0])?"block":"none"}} src={require((!box[0])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
          </tr>

            <tr onClick={()=>{
              if ( (turn==box[0]&&turn==box[2]) || (turn==box[4]&&turn==box[7])  )  {
                setShow(true)
              }
              HandelClick(1) ; 
            }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[1])?"block":"none"}} src={require((!box[1])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
          </tr>


            <tr onClick={()=>{
              if ( (turn==box[0]&&turn==box[1]) || (turn==box[5]&&turn==box[8]) || (turn==box[4]&&turn==box[6])  )  {
                setShow(true)
              }
              HandelClick(2) ;
              }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[2])?"block":"none"}} src={require((!box[2])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
            </tr>

            <br />
  
            <tr onClick={()=>{
              if ( ((turn==box[4]&&turn==box[5]) || (turn==box[0]&&turn==box[6]))   )  {
                setShow(true)
              } 
              HandelClick(3); 
              }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[3])?"block":"none"}} src={require((!box[3])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
            </tr>
            <tr onClick={()=>{
              if ( (turn==box[3]&& turn==box[5]) || (turn == box[1]&&turn==box[7]) ||(turn== box[6]&&turn==box[2] ||(turn==box[0]&&turn==box[8]))  )  {
                setShow(true)
              }
              HandelClick(4); 
              }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[4])?"block":"none"}} src={require((!box[4])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
            </tr>
            <tr onClick={()=>{
              if ( (turn==box[4]&&turn==box[3]) || (turn==box[2]&&turn==box[8])  )  {
                setShow(true)
              }
              HandelClick(5);
              }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[5])?"block":"none"}} src={require((!box[5])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
            </tr>
            <br />
            <tr onClick={()=>{
              if ( (turn==box[7]&&turn==box[8]) || (turn==box[0]&&turn==box[3]) ||(turn==box[2]&&turn==box[4])  )  {
                setShow(true)
              }
              
              HandelClick(6); 
              
              }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[6])?"block":"none"}} src={require((!box[6])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
            </tr>
            
            <tr onClick={()=>{
              
              if ( (turn==box[6]&&turn==box[8]) || (turn==box[1]&&turn==box[4])  )  {
                setShow(true)
              }
              
              HandelClick(7) ;
              }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[7])?"block":"none"}} src={require((!box[7])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
            </tr>
            
            <tr onClick={()=>{
              
              if ( (turn==box[7]&&turn==box[6]) || (turn==box[0]&&turn==box[4]) ||(turn==box[2]&&turn==box[5])  )  {
                setShow(true)
              }
              HandelClick(8); 
              
              }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[8])?"block":"none"}} src={require((!box[8])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
            </tr>
  
          </table>
            
          </>
    )
  }

  const End = ()=> {
      return (
        <>

        {Same>=8?
        <h1 className="text-2xl font-bold text-gray-700 bg-yellow-200 p-4 rounded-lg text-center shadow-md">
        🤝 تعادل!
      </h1>
      
      :
        
        
        <h1 className="text-2xl font-bold text-green-600 bg-green-100 p-4 rounded-lg text-center shadow-md">
  🎉  "{!turn ? name1 : name2}" ألف مبرووك!
       </h1>
       }


        </>
      )
  }


  return (
    <div className="App">
         

         {start? <Start setName1={setName1} setName2={setName2} setStart={setStart}/> :
          show ?<End/>:<Game/> 
         }

         
    </div>
  );
}

export default App;
