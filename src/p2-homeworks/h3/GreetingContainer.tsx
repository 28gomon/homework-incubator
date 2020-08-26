import React, {useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
	// need to fix any
    users: Array<UserType>
	// need to fix any
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
// деструктуризация пропсов
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(""); // need to fix any

    const setNameCallback = (e: React.FormEvent<HTMLInputElement>) => { // need to fix any
    	let value = e.currentTarget.value;
        setName(value); // need to fix
		setError("");
    };
    const addUser = () => {
    	if (name !== "") {
			addUserCallback(name);
			// need to fix
			alert(`Hello ${name} !`);
			setError("");
			setName("");
		} else {
    		setError('Поле не должно быть пустым!');
		}
    };

    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
