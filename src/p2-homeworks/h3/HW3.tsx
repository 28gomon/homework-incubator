import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import { v4 as uuid } from "uuid";

// types
export type UserType = {
	// need to fix any
    _id: string
	// need to fix any
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
		users.push({_id: uuid(), name: name})
        setUsers(users); // need to fix
		console.log(users)
    }
    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
