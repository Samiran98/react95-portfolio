
/* Original Windows95 font (optional) */
import AboutMe from './components/AboutMe';
import { AppBarComponent } from './components/AppBarComponent';
import DesktopIcon from './components/DesktopIcon';

import { Wordpad } from "@react95/icons";

const App = () => (
	<div style={{ width: "100%", background: "#098684", minHeight: "100vh", position: "relative" }}>
		<img src="src/assets/logo.png" width={400} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-70%)" }} />
		<div className="fixed">
			<DesktopIcon width={650} icon={<Wordpad variant="32x32_4" />} name="About me.exe">
				<AboutMe />
			</DesktopIcon>
		</div>
		<AppBarComponent />
	</div>
);

export default App;