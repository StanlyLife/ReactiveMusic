import "./styles/app.scss";
//components
import Player from "./components/player";
import Song from "./components/song";
function App() {
	return (
		<div className="App">
			<h1>React music</h1>
			<Song />
			<Player />
		</div>
	);
}

export default App;
