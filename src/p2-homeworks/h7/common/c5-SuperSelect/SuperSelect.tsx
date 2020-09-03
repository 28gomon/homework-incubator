import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from "react";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
	options?: Array<string>
	onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
	// map options with key
	const mappedOptions: JSX.Element[] = options ? options.map((option, index) => {
		return (
			<option title={option} value={option} key={index}>{option}</option>
		)
	}) : [];

	const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
		// onChange, onChangeOption
		if (onChangeOption) onChangeOption(e.currentTarget.value);
	}

	return (
		<select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;
