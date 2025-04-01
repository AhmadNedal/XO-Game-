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
  const [win , setWin ] = useState(-1); 

  const HandelClick=(idx)=> {

     if (!reserved[idx]){
        let newBox = [...box];
        let newReserved = [...reserved];
        newReserved[idx]= 1 ;
        newBox[idx]=turn; 
        setReserved(newReserved) ; 
        setTurn(!turn);
        setBox(newBox); 
        setSame(Same =>Same+1) ;
      }

      if (Same>=8){
        setShow(true) ; 
      }

  }


  const Game = ()=>{ 

    return ( 
      <>
      <table>
          <tr onClick={()=>{
            HandelClick(0); 
            if ( (turn==box[4]&&turn==box[8]) || (turn==box[1]&&turn==box[2]) ||(turn==box[3]&&turn==box[6]) )  {
                setShow(true); 
                setWin(true) ; 
            }
          }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[0])?"block":"none"}} src={require((!box[0])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
          </tr>

            <tr onClick={()=>{
              HandelClick(1) ; 
              if ( (turn==box[0]&&turn==box[2]) || (turn==box[4]&&turn==box[7])  )  {
                setShow(true) ; 
                setWin(true) ; 
              }
            }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[1])?"block":"none"}} src={require((!box[1])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
          </tr>


            <tr onClick={()=>{
              HandelClick(2) ;
              if ( (turn==box[0]&&turn==box[1]) || (turn==box[5]&&turn==box[8]) || (turn==box[4]&&turn==box[6])  )  {
                setShow(true) ; 
                setWin(true) ; 
              }
              }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[2])?"block":"none"}} src={require((!box[2])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
            </tr>

            <br />
  
            <tr onClick={()=>{
              HandelClick(3); 
              if ( ((turn==box[4]&&turn==box[5]) || (turn==box[0]&&turn==box[6]))   )  {
                setShow(true) ;
                setWin(true) ;
              } 
              }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[3])?"block":"none"}} src={require((!box[3])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
            </tr>
            <tr onClick={()=>{
              HandelClick(4); 
              if ( (turn==box[3]&& turn==box[5]) || (turn == box[1]&&turn==box[7]) ||(turn== box[6]&&turn==box[2] ||(turn==box[0]&&turn==box[8]))  )  {
                setShow(true) ;
                setWin(true) ;
              }
              }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[4])?"block":"none"}} src={require((!box[4])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
            </tr>
            <tr onClick={()=>{
              HandelClick(5);
              if ( (turn==box[4]&&turn==box[3]) || (turn==box[2]&&turn==box[8])  )  {
                setShow(true) ; 
                setWin(true) ;

              }
              }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[5])?"block":"none"}} src={require((!box[5])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
            </tr>
            <br />
            <tr onClick={()=>{
              HandelClick(6); 
              if ( (turn==box[7]&&turn==box[8]) || (turn==box[0]&&turn==box[3]) ||(turn==box[2]&&turn==box[4])  )  {
                setShow(true) ;
                setWin(true) ;
              }
              }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[6])?"block":"none"}} src={require((!box[6])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
            </tr>
            
            <tr onClick={()=>{
              
              HandelClick(7) ;
              if ( (turn==box[6]&&turn==box[8]) || (turn==box[1]&&turn==box[4])  )  {
                setShow(true); 
                setWin(true) ;
              }
              
              }}>
              <div className='Box1'> 
                 <img className='image' style={{ display:(reserved[7])?"block":"none"}} src={require((!box[7])?'./images/oo.png':'./images/xx.png')} alt="" />  
              </div>
            </tr>
            
            <tr onClick={()=>{
              HandelClick(8);
              if ( (turn==box[7]&&turn==box[6]) || (turn==box[0]&&turn==box[4]) ||(turn==box[2]&&turn==box[5])  )  {
                setShow(true);
                setWin(true) ;
              }
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
        <div className='text-green-600 bg-green-100 p-4 rounded-lg text-center shadow-md'>
        {(Same>=9&&win==-1)?
        <h1 className="text-2xl font-bold text-gray-700 p-4 rounded-lg text-center ">
        تعادل
      </h1>
      :  
        <h1 className="text-2xl font-bold text-green-600  p-4 rounded-lg text-center ">
        ألف مبرووك  <br/> 
        " <span style={{color:"red" ,  fontSize:"30px" }}>{!turn ? name1 : name2}</span> " 
       </h1>}

       <button 
        class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        onClick={()=> {
          setBox([-1,-1,-1,-1,-1,-1,-1,-1,-1]); 
          setReserved([0,0,0,0,0,0,0,0,0]); 
          setTurn(1); 
          setShow(false); 
          setStart(false); 
          setSame(0); 
        }}
      >
        إعادة اللعبة
      </button>

      <button 
        class="bg-red-500  text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition ml-4"
        onClick={()=> {
          window.location.reload();
        }}
      >
        تغيير اللاعبين
      </button>
        </div>
      );
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
