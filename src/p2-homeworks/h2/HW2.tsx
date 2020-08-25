import React, {useState} from "react";
import Affairs from "./Affairs";

// types
// need to fix any
export type AffairPriorityType = "high" | "low" | "middle";
// need to fix any
export type AffairType = {
	_id: number
	name: string
	priority: string
};
export type FilterType = "all" | AffairPriorityType;

// constants
// need to fix any
const defaultAffairs: Array<AffairType> = [
	{_id: 1, name: "React", priority: "high"},
	{_id: 2, name: "anime", priority: "low"},
	{_id: 3, name: "games", priority: "low"},
	{_id: 4, name: "work", priority: "high"},
	{_id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
// need to fix any
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
	if (filter === "all") return affairs;
	if (filter === "high") return affairs.filter(affair => affair.priority === "high");
	if (filter === "low") return affairs.filter(affair => affair.priority === "low");
	if (filter === "middle") return affairs.filter(affair => affair.priority === "middle");
	else return []; // need to fix
}

// need to fix any
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
	// need to fix
	return affairs.filter(affair => affair._id !== _id);
}

function HW2() {
	// need to fix any
	const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
	const [filter, setFilter] = useState<FilterType>("all");

	const filteredAffairs = filterAffairs(affairs, filter);
	// need to fix any
	const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

	return (
		<div>
			<hr/>
			homeworks 2

			{/*should work (должно работать)*/}
			<Affairs
				data={filteredAffairs}
				setFilter={setFilter}
				deleteAffairCallback={deleteAffairCallback}
			/>

			<hr/>
			{/*для личного творчества, могу проверить*/}
			{/*<AlternativeAffairs/>*/}
			<hr/>
		</div>
	);
}

export default HW2;
