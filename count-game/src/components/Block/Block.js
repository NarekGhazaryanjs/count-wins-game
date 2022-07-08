import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Text from "../Text/Text";
import classes from '../../ui/Global.module.css';

const Block = () => {
    const [blockCount,setBlockCount] = useState('');
    const [show,setShow] = useState(false);
    const [canClick,setCanClick] = useState(true);
    const [gameOver,setGameOver] = useState(false)
    
   
    const changeShowSatement = () => {
        const possibleItems = [
            1,'bomb','bomb','bomb','bomb','bomb','bomb',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,'bomb','bomb','bomb'
        ];
        if(canClick) {
            setShow(!show)
            const skyCount = possibleItems[Math.ceil(Math.random() * 25)];
            setBlockCount(skyCount);
            console.log(skyCount)
            if(skyCount === 'bomb') {
                setCanClick(false)
                setGameOver(!gameOver);
                setTimeout(() => {
                  window.location.reload()
                }, 1000)
            }
            setCanClick(false);
        }
    }
 
    return(
       !gameOver ? <Card className={classes.block}>
            <Button className={classes.button} onClick={changeShowSatement}> good luck  </Button>
            { show && <Text> {blockCount} </Text>}  
        </Card> : <div>game over</div>
    )
}

export default Block