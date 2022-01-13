import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Song = () => {
	return (
		<div className="song-container">
			<div className="time-control">
				<p>Start time</p>
				<input type="range" />
				<p>end time</p>
			</div>
			<div className="play-control">
				<FontAwesomeIcon className="play" icon={faPlay} />
				<FontAwesomeIcon className="skip-back" icon={faAngleLeft} />
				<FontAwesomeIcon className="skip-forward" icon={faAngleRight} />
			</div>
		</div>
	);
};

export default Song;
