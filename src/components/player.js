import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleRight, faAngleLeft, faPause } from "@fortawesome/free-solid-svg-icons";

import "./../styles/_player.scss";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

const Player = ({ audioRef, isPlaying, setIsPlaying, songInfo, setSongInfo, songs, currentSong, setCurrentSong, setSongs, skipSong }) => {
	//event handlers
	const playSongHandler = () => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};
	const getTime = (time) => {
		return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
	};
	const dragHandler = (e) => {
		audioRef.current.currentTime = e.target.value;
		setSongInfo({ ...songInfo, currentTime: e.target.value });
	};

	const KeepPlaying = () => {
		if (isPlaying) {
			const playPromise = audioRef.current.play();
			if (playPromise !== undefined) {
				playPromise.then((audio) => {
					audioRef.current.play();
				});
			}
		}
		const newSongs = songs.map((song) => {
			if (song.id === currentSong.id) {
				return { ...song, active: true };
			} else {
				return { ...song, active: false };
			}
		});
		setSongs(newSongs);
	};

	useEffect(() => {
		skipTrackHandler("forward"); //children function of interest
	}, [skipSong]);

	const skipTrackHandler = async (direction) => {
		console.log("skip track");
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		if (direction === "forward") {
			const nextIndex = (currentIndex + 1) % songs.length;
			await setCurrentSong(songs[nextIndex]);
		} else {
			const nextIndex = currentIndex == 0 ? songs.length - 1 : (currentIndex - 1) % songs.length;
			console.log(nextIndex);
			await setCurrentSong(songs[nextIndex]);
		}
		KeepPlaying();
	};

	//styles

	const trackAnim = {
		transform: `translateX(${songInfo.animationPercentage}%)`,
	};

	//state
	return (
		<div className="player">
			<div className="time-control">
				<p>{getTime(songInfo.currentTime)}</p>
				<div className="track">
					<input type="range" min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} style={{ background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})` }} />
					<div style={trackAnim} className="animate-track"></div>
				</div>
				<p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
			</div>
			<div className="play-control">
				<FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} onClick={() => skipTrackHandler("back")} />
				<FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
				<FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} onClick={() => skipTrackHandler("forward")} />
			</div>
		</div>
	);
};

export default Player;
