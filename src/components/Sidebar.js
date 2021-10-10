import React from "react";
import "../css/sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SidebarOption from "./SidebarOption";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitter" />
      <SidebarOption active Icon={HomeIcon} Text="Home" />
      <SidebarOption Icon={SearchIcon} Text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} Text="Noifications" />
      <SidebarOption Icon={MailOutlineIcon} Text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} Text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} Text="Lists" />
      <SidebarOption Icon={PersonOutlineIcon} Text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} Text="More" />
      <Button variant="outlined" fullWidth className="sidebar__tweet">
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
