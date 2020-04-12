import React from "react";
import test from "./../data/meme1.jpg";
import "./../styles/Main.css";
import { memedesc } from "./../locale/en";

let numbers = [];

for (let i = 1; i <= 100; i++) {
	numbers.push(i);
}

const MainComponent = () => {
	const memeData = numbers.map((number) => {
		return (
			<div className="vaidee-meme-div">
				<img
					src={`http://127.0.0.1:8887/meme${number}.jpg`}
					alt="meme"
					className="vaidee-meme-img"
				/>
			</div>
		);
	});
	return (
		<div className="vaidee-main-div">
			<div className="vaidee-sidebar">{memedesc}</div>
			<div className="vaidee-mainbar">{memeData}</div>
		</div>
	);
};

export default MainComponent;
