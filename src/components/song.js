import React from "react";
import "../styles/_song.scss";

const Song = ({ currentSong }) => {
	return (
		<div className="song">
			<img src={currentSong.cover} alt="cover for {currentSong.name}" />
			<h1>{currentSong.name}</h1>
			<h2>{currentSong.artist}</h2>
		</div>
	);
};

export default Song;
