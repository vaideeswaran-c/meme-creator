import React from "react";
import "./../styles/Footer.css";
import { FaGlobeAsia } from "react-icons/fa";
import {
	english,
	contactck,
	privacy,
	terms,
	trademarks,
	ads,
	copywright,
} from "./../locale/en";

const Footer = () => {
	return (
		<nav className="vaidee-footer">
			<a href="#" className="vaidee-footer-link">
				{english}
			</a>
			<ul>
				<li>
					<a>{privacy}</a>
				</li>
				<li>
					<a>{terms}</a>
				</li>
				<li>
					<a>{trademarks}</a>
				</li>
				<li>
					<a>{ads}</a>
				</li>
				<li>
					<a>{copywright}</a>
				</li>
			</ul>
		</nav>
	);
};

export default Footer;
