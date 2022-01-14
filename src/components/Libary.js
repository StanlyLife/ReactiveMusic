import React from "react";
import LibarySong from "./LibarySong";
import "../styles/_libary.scss";

const Libary = ({ libaryStatus, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) => {
	return (
		<div className={`libary ${libaryStatus ? "active" : ""}`}>
			{songs.map((song) => (
				<LibarySong song={song} setCurrentSong={setCurrentSong} songs={songs} id={song.id} key={song.id} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} />
			))}
		</div>
	);
};

export default Libary;
