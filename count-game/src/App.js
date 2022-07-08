import { useState } from 'react';
import './App.css';
import {Block} from './components/Block/Block';
import Card from './components/Card/Card';
import Text from './components/Text/Text';
import classes from './ui/Global.module.css'


const App = () => {

  const [isGameOver, setGameIsOver] = useState(false);
  const [win,setWin] = useState(0);
  setInterval(() => {
    if(localStorage.getItem('isGameOver') === 'true') {
      setGameIsOver(true)
    }
  },1000)

  setInterval(() => {
    setWin(localStorage.getItem('count'))
  }, 1000)

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
     </Card> : <Card className={classes.over}>   Game is Over </Card>

  )
}

export  default App