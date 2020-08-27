import React from "react";
import classes from './Pages.module.css';

function Error404() {
    return (
        <div className={classes.error404}>
            <div>
				<div className={classes.errorNumber}>404</div>
				<div>Page not found!</div>
				<div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
			</div>
        </div>
    );
}

export default Error404;
