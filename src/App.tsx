
/* Original Windows95 font (optional) */
import { AppBarComponent } from './components/AppBarComponent';
import DesktopIcon from './components/DesktopIcon';
import Login from './components/Login';

import { Video } from '@react95/core';
import { Amovie2, Inetcpl1313, Joy102, Mail, Wordpad } from "@react95/icons";
import Contact from './components/Contact';
import Game from './components/Game';
import Resume from './components/Resume';
import { useAuthStore } from './store/auth';

const App = () => {
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

	if (!isLoggedIn) {
		return <Login />;
	}

	return (
	<div style={{ width: "100%", background: "#098684", minHeight: "100vh", position: "relative" }}>
		<img src="src/assets/logo.png" width={400} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-70%)" }} />
		<div className="fixed">
			<DesktopIcon width={650} icon={<Wordpad variant="32x32_4" />} name="Resume.exe">
				<Resume />
			</DesktopIcon>
			<DesktopIcon width={400} height={400} icon={<Joy102 variant="32x32_4" />} name="Game">
				<Game />
			</DesktopIcon>
			<DesktopIcon icon={<Amovie2 variant="32x32_4" />} name="Video">
				<Video
					w="420px"
					src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
				/>
			</DesktopIcon>
			<DesktopIcon icon={<Inetcpl1313 variant="32x32_4" />} name="Browser">
				<iframe width={800} height={500} src="https://swisscows.com" />
			</DesktopIcon>
			<DesktopIcon width={400} icon={<Mail variant="32x32_4" />} name="Contact">
				<Contact />
			</DesktopIcon>
		</div>
		<AppBarComponent />
	</div>
	);
};

export default App;