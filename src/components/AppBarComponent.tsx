import { List, TaskBar } from "@react95/core";
import { Amovie2, Computer3, Inetcpl1313, Joy102, Mail, Settings, Wordpad } from "@react95/icons";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useAuthStore } from "../store/auth";
import { useWindowsStore } from "../store/windows";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ padding: "0 10px", alignSelf: "center" }}>
            {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
    );
}

export function AppBarComponent() {
    const { openWindow } = useWindowsStore();
    const logout = useAuthStore((state) => state.logout);

    const handleShutdown = () => {
        logout();
    };

    return (
        <TaskBar
            list={
                <List width={"200px"}>
                    <List.Item icon={<Mail variant="32x32_4" />}>
                        <List width={"200px"}>
                            <List.Item icon={<FaGithub size={16} />}>
                                <a href="https://github.com/Samiran98" target="_blank" style={{ textDecoration: 'none', color: '#222', fontFamily: 'MS Sans Serif' }}>GitHub</a>
                            </List.Item>
                            <List.Item icon={<FaLinkedin size={16} />}>
                                <a href="https://www.linkedin.com/in/samiran-ghosh-8b51871b7" target="_blank" style={{ textDecoration: 'none', color: '#222', fontFamily: 'MS Sans Serif' }}>LinkedIn</a>
                            </List.Item>
                            <List.Item icon={<FaTwitter size={16} />}>
                                <a href="https://x.com" target="_blank" style={{ textDecoration: 'none', color: '#222', fontFamily: 'MS Sans Serif' }}>Twitter (X)</a>
                            </List.Item>
                            <List.Item icon={<Mail variant="16x16_4" />}>
                                <a href="mailto:samiran.seacom@gmail.com" style={{ textDecoration: 'none', color: '#222', fontFamily: 'MS Sans Serif' }}>Gmail</a>
                            </List.Item>
                        </List>
                        Contact
                    </List.Item>
                    <List.Item
                        onClick={() => openWindow("Game")}
                        icon={<Joy102 variant="32x32_4" />}
                    >
                        Game
                    </List.Item>
                    <List.Item icon={<Settings variant="32x32_4" />}>
                        Settings
                    </List.Item>
                    <List.Item
                        onClick={() => openWindow("Browser")}
                        icon={<Inetcpl1313 variant="32x32_4" />}
                    >
                        Browser
                    </List.Item>
                    <List.Item
                        onClick={() => openWindow("Video")}
                        icon={<Amovie2 variant="32x32_4" />}
                    >
                        Video
                    </List.Item>
                    <List.Item
                        onClick={() => openWindow("Resume.exe")}
                        icon={<Wordpad variant="32x32_4" />}
                    >
                        Resume
                    </List.Item>
                    <List.Divider />
                    <List.Item
                        onClick={handleShutdown}
                        icon={<Computer3 variant="32x32_4" />}
                    >
                        Shut Down...
                    </List.Item>

                </List>
            }
        >
            <Clock />
        </TaskBar>
    );
}