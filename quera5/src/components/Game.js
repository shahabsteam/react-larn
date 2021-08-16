import Card from "./Card";
import { cardsData } from "../cards";
import { useState } from "react";

function Game() {
  
  const cardClicked = ( event)=>{
    if(isTimeOut){
      return;
    }
      
    let arr = allCards
   
      arr.forEach((cardt)=>{
        if(event.target.offsetParent.attributes[2].nodeValue==cardt.id  ){
          cardt.isFlipped=true;
          if(lastCard==null){
            setLastCard(cardt);
          }else{
            if(lastCard.name == cardt.name){
              setLastCard(null)
              
            }else if(lastCard.name!==cardt.name){
              
              
              setisTimeout(true)


              setTimeout(()=>{
                setisTimeout(false)
                lastCard.isFlipped=false;
              cardt.isFlipped=false;
              setLastCard(null)
              changeCards([...arr]);
              },1500)
            }
          }
     
        }
      
      })
      changeCards([...arr]);
  }
  const [allCards,changeCards]=useState(cardsData);
  const[lastCard,setLastCard]=useState(null);
  const[isTimeOut,setisTimeout]=useState(false);

const renderCards = ()=>{
  let arr = []

  allCards.forEach((cardt)=>{
 
    arr.push(<Card card={cardt} onClick={cardClicked} />)
  })
  return arr;
}
  return (
    <section className="memory-game">
        {renderCards()}
     
    </section>
  );
}

export default Game;
