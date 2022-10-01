import { Bookmarks, Chat, Event, Group, Help, PlayCircleFilled, RssFeed, School, WorkOutline } from "@material-ui/icons";
import "./sidebar.css";
// import {Users} from "../../dummyData";
import Friend from "../Friends/Friend";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar({user}) {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        const fetchFriends = async () => {
            const res = await axios.get("/users/friends/"+user._id);
            setFriends(res.data);
            console.log(friends);
        }
        fetchFriends();
    }, [user]);
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarListIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarListIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilled className="sidebarListIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarListIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmarks className="sidebarListIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <Help className="sidebarListIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarListIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarListIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarListIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                     {friends.map(u => (
                        <Friend key={u.id} user={u} />
                     ))}
                </ul>
            </div>
        </div>
    );
}