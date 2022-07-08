import { useState } from 'react';
import './App.css';
import {Block} from './components/Block/Block';
import Card from './components/Card/Card';
import Text from './components/Text/Text';
import classes from './ui/Global.module.css'


const App = () => {

  const [isGameOver, setGameIsOver] = useState(false);
  const [win,setWin] = useState(0);
  const [clickedCount, setClickedCount] = useState(0);
  setInterval(() => {
    setWin(localStorage.getItem('count'));
    setClickedCount(localStorage.getItem('clickedTimesCount'));
    if(Number(clickedCount) === 8) {
      setGameIsOver(true)
      console.log('aaaaa')
    }
    
    if(localStorage.getItem('isGameOver') === 'true') {
      setWin(0)
      setGameIsOver(true)
    }
  },1000)

  return (
     !isGameOver ?
     <Card>
        <Card className={classes.header}>
          <Text> your win is {win} </Text>
        </Card>
        <Card className={classes.container}>
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
        </Card> 
     </Card> : (
        Number(clickedCount)  ===  8 ? <Card className={classes.over}>  Game is Over You Won {win}  dram</Card> : <Card className={classes.over}>  Game is Over You  lose </Card>
     )
     

  )
}

export  default App