import { useContext } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { AuthContext } from "../../context/AuthContext";

import "./home.css";

export default function Home() {
    const {user} = useContext(AuthContext);
    return(
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar user={user}/>
                <Feed />
                <Rightbar />
            </div>
        </>
    );
}