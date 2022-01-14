import React from "react";

const LibarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) => {
	const songSelectHandler = () => {
		const selectedSong = songs.filter((state) => state.id === id);
		setCurrentSong(selectedSong[0]);
		//Add active state
		const newSongs = songs.map((song) => {
			if (song.id === id) {
				return { ...song, active: true };
			} else {
				return { ...song, active: false };
			}
		});
		setSongs(newSongs);
		if (isPlaying) {
			const playPromise = audioRef.current.play();
			if (playPromise !== undefined) {
				playPromise.then((audio) => {
					audioRef.current.play();
				});
			}
		}
	};
	return (
		<div className={`libary-song ${song.active ? "active" : ""}`} onClick={songSelectHandler}>
			<img src={song.cover} alt="cover for {currentSong.name}" />
			<div className="info">
				<p className="name">{song.name}</p>
				<p className="artist">{song.artist}</p>
			</div>
		</div>
	);
};

export default LibarySong;
