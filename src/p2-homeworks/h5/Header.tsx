import React, {useState} from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header() {

	let cls = [classes.Nav];

	const [state, setState] = useState(false);

	function handlerMenu() {
		setState(!state);
	}

	function closeMenu() {
		setState(false);
	}

	if (state) cls.push(classes.OpenNav);

	return (
		<>
			<nav className={cls.join(' ')}>
				<div className={classes.NavLinkWrapper}>
					<div><NavLink
						activeClassName={classes.Active}
						onClick={closeMenu}
						to="/pre-junior">PreJunior</NavLink>
					</div>
					<div><NavLink
						activeClassName={classes.Active}
						onClick={closeMenu}
						to="/junior">Junior</NavLink>
					</div>
				</div>

				<div
					onClick={handlerMenu}
					className={!state
						? classes.HeaderButton
						: classes.HeaderButton + " " + classes.HeaderButtonOpen}>
					<span className={classes.HeaderButtonSpan}/>
				</div>
			</nav>

			<div className={classes.Header}/>

			{state ? <div onClick={closeMenu} className={classes.Backdrop}/> : null}
		</>
	);
}

export default Header;
