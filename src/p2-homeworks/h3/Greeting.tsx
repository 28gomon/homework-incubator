import React from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
	// need to fix any
	name: string
	// need to fix any
	setNameCallback: (e: React.FormEvent<HTMLInputElement>) => void
	// need to fix any
	addUser: () => void
	// need to fix any
	error: string
	// need to fix any
	totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
	const inputClass = error === "" ? "" : s.error; // need to fix with (?:)

	return (
		<div className={s.Greeting}>
			<input value={name} onChange={setNameCallback} className={inputClass}/>
			{error ? <span className={s.Error}>{error}</span> : null}
			<button onClick={addUser}>add</button>
			<span className={s.TotalUser}>{totalUsers}</span>
		</div>
	);
}

export default Greeting;
