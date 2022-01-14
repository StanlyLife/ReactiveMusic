import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import "../styles/_nav.scss";

const Nav = ({ libaryStatus, setLibaryStatus }) => {
	return (
		<nav>
			<button onClick={() => setLibaryStatus(!libaryStatus)}>
				<FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
				<p>Libary</p>
			</button>
		</nav>
	);
};

export default Nav;
