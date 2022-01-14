import React, { useState, useRef } from "react";
import Nav from "./components/Nav";
//scss
import "./styles/app.scss";
//components
import Player from "./components/player";
import Song from "./components/song";
import Libary from "./components/Libary";
//utils
import data from "./data";
function App() {
	//References
	const audioRef = useRef(null);
	//state
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
		animationPercentage: 0,
	});
	const [libaryStatus, setLibaryStatus] = useState(false);
	//handler

	const [skipSong, doSkipSong] = useState(0);
	const songEndHandler = () => {
		doSkipSong(skipSong + 1);
	};

	const timeUpdateHandler = (e) => {
		console.log(e.target.currentTime);
		//calculate percentage
		const roundedCurrent = Math.round(e.target.currentTime);
		const roundedDuration = Math.round(songInfo.duration);
		let animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100);
		const current = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime: current, duration, animationPercentage });
	};
	//return
	return (
		<div className={`App ${libaryStatus ? "libActive" : ""}`}>
			<audio onEnded={songEndHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio} onLoadedMetadata={timeUpdateHandler}></audio>
			<Nav libaryStatus={libaryStatus} setLibaryStatus={setLibaryStatus}></Nav>
			<Song currentSong={currentSong} />
			<Player skipSong={skipSong} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songInfo={songInfo} setSongInfo={setSongInfo} songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} setSongs={setSongs} />
			<Libary libaryStatus={libaryStatus} songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} id={Song.id}></Libary>
		</div>
	);
}

export default App;
