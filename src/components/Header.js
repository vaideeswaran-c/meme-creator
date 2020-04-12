import React from "react";
import logo from "./../assets/vaidee.png";
import { title, about, contact, webtitle } from "./../locale/en";
import "./../styles/Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiNinjaHead } from "react-icons/gi";

const Header = () => {
	return (
		<div className="vaidee-header-div">
			<nav className="vaidee-header-nav">
				<ul className="vaidee-nav-left">
					<li>
						<a href="#" className="vaidee-title">
							<span>
								<GiNinjaHead />
							</span>
							<span style={{ paddingLeft: "5px" }}>{title}</span>
						</a>
					</li>
				</ul>
				<ul className="vaidee-nav-left">
					<li>
						<a href="#">{webtitle}</a>
					</li>
				</ul>

				<ul className="vaidee-nav-right">
					<li>
						<a href="#">{contact}</a>
					</li>
					<li>
						<a href="#">{about}</a>
					</li>
					<li>
						<a href="https://github.com/vaideeswaran23" target="_blank">
							<FaGithub />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/vaideeswaranc/"
							target="_blank"
						>
							<FaLinkedin />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
