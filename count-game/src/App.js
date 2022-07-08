import './App.css';
import Block from './components/Block/Block';
import Card from './components/Card/Card';
import classes from './ui/Global.module.css'


const App = () => {
  return (
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

  )
}

export  default App