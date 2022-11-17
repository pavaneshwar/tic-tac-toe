
import React from 'react'
import {useState} from 'react'


function TicTacToe() {
  const [element, setElement] = useState('x');
  const [Cells, setCells] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState('');


  let square=[...Cells];
  
  //vertical
  const win = [];
   win[0] = square[0]+square[1]+square[2];
   win[1] = square[3]+square[4]+square[5];
   win[2] = square[6]+square[7]+square[8];
  //horiontal
   win[3] = square[0]+square[3]+square[6];
   win[4] = square[1]+square[4]+square[7];
   win[5] = square[2]+square[5]+square[8];
   //diagonal
   win[6] = square[0]+square[4]+square[8];
   win[7] = square[2]+square[4]+square[6];

   

   const CheckWinner=(square)=>{
    
      for(let i=0;i<9;i++){
        if (win[i]==='xxx'){
          setWinner("x");
        }
        if (win[i]==='ooo'){
          setWinner("o");
        }
      }
   }

   const handleReset=()=>{
    setElement('x');
    setCells(Array(9).fill(''));
    setWinner('');
   }

  
    const handleClick=(id)=>{

        if(square[id] !== ''){
          alert("Don't Cheat")
          return;
        }
      
        if(element==='x'){
          square[id]='x';
            setElement('o');
        }
        else if(element==='o'){
          square[id]='o';
            setElement('x');
        }
        CheckWinner(square);
       setCells(square);
       
    }

  const Cell=({id})=>{
    return (
      <td onClick={()=>handleClick(id)}>
          {Cells[id]}
      </td>
    )
  }
    
  return (
    <div className='tab'>
        Turn:{element}
      
        <table>
          <tbody>
            <tr>
              <Cell id={0}/>
              <Cell id={1}/>
              <Cell id={2}/>
            </tr>
            <tr>
              <Cell id={3}/>
              <Cell id={4}/>
              <Cell id={5}/>
            </tr>
            <tr>
              <Cell id={6}/>
              <Cell id={7}/>
              <Cell id={8}/>
            </tr>
          </tbody>
        </table>
        {winner && 
        <>
        <p>The Winner is {winner}</p>
        <button onClick={()=>handleReset()}>Play Again!</button>
        </>
        }

    </div>
  )
}

export default TicTacToe