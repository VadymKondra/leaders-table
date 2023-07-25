import React from "react";
import helmetRed from '../../logos/helmet-red.svg'
import helmetGreen from '../../logos/helmet-green.svg'
import helmetBlue from '../../logos/helmet-blue.svg'
import './userResultStyle.css'

export interface User {
    // Улюблений колір 
    color: Color;
    // Повне ім'я
    name: string;
    // Швидкість заїзду
    speed: number;
    // Час заїзду. Виражено в мілісекундах
    time: number;

  } 
  
export enum Color {
    RED, 
    GREEN, 
    BLUE
  }
  

export const UserResult: React.FunctionComponent<User> = ({color, name, speed, time}) => {
    const [clicked, setClicked] = React.useState(false)
    let helmet;

    switch (+color) {
        case Color.RED:
            helmet = helmetRed;
            break;
        case Color.GREEN:
            helmet = helmetGreen;
            break;
        case Color.BLUE:
            helmet = helmetBlue;
            break;
        default:
            helmet = helmetBlue;
            break;
    }
    
    return(
        <>
            <button className="buttonRecord" onClick = {() => {
                if(clicked) {
                    setClicked(false)
                }
                else{
                    setClicked(true)
                }
            }}>
                <div className="userStyle">
                    <div className={clicked ? 'buttonClicked' : 'buttonNonClicked'} >
                        <h1 className="number">1</h1>
                    </div>
                    <img className="userIconStyle" src={helmet} alt="" />
                    <div className="userInfoStyle">
                        <div>
                                <h2 className="dots3">{name}</h2>
                        </div>
                        <div className='userSpeedTime'>
                            <h3> {`00:00:${time}`} | {speed}</h3>
                        </div>
                    </div>
                </div>
            </button>
        </>
    )
}