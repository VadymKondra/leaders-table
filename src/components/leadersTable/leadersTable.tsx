import {UserResult, User, Color} from '../userResult/userResult'
import './leadersTableStyle.css'





const formArray = () => {
    const arr: User[] = []; 
    for(let i = 0; i < 1000; i++){
        
        arr[i] = {
            color: Color.BLUE,
            name: 'Vasylco Super Racer',
            speed: 1000 - i,
            time: i
        }
        if(i%3 === 1)
        {
            arr[i].color = Color.RED
        }

        if(i%3 === 2){
            arr[i].color = Color.GREEN
        }
    }

    return arr
}


const  LeadersTable = () => {
    const users = formArray();

    return (
        <div className='leadersTable'>
            {
                users.map((user, index) => {
                    return <UserResult key = {index} color={user.color} name={user.name} speed={user.speed} time={user.time} />;
                })
            }
        </div>
    )
}

export default LeadersTable;