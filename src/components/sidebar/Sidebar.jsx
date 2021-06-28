import "./sidebar.css";
import {
  RssFeed,
  Bookmark,
  Group,
  PlayCircleFilledOutlined, 
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div>
      <div className="sideber">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feeds</span>
            </li>
            <li className="sidebarListItem">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <PlayCircleFilledOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Video</span>
            </li>
            <li className="sidebarListItem">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Grup</span>
            </li>
            <li className="sidebarListItem">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <HelpOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">School</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr"/>
          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
              <img className="sidebarFriendImg"src="../../../public/assets/Profile2.jpg" alt=""/>
              <span className="sidebarFriendName">Lestari Ayu</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg"src="../../../public/assets/Profile2.jpg" alt=""/>
              <span className="sidebarFriendName">MNArsyad</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
