import {
  Add,
  Apps,
  Bookmark,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import { CreateOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useCollection } from "react-firebase-hooks/firestore";
import SideBarOption from "./SideBarOption";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function SideBar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);
  return (
    <SidebarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>HI {user.displayName}</h2>
          <h3>
            <FiberManualRecord />
            {user.displayName}
          </h3>
        </SideBarInfo>
        <CreateOutlined />
      </SideBarHeader>

      <SideBarOption Icon={InsertComment} title="threads" />
      <SideBarOption Icon={Inbox} title="Mentions & reactions" />
      <SideBarOption Icon={Drafts} title="Saved Items " />
      <SideBarOption Icon={Bookmark} title="Channel Browser" />
      <SideBarOption Icon={PeopleAlt} title="People & user groups" />
      <SideBarOption Icon={Apps} title="Apps" />
      <SideBarOption Icon={FileCopy} title="File Browser" />
      <SideBarOption Icon={ExpandLess} title="Show Less" />

      <hr />
      <SideBarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SideBarOption Icon={Add} addChannelOption title="Add Channel" />

      {channels?.docs.map((doc) => {
        return (
          <SideBarOption key={doc.id} id={doc.id} title={doc.data().name} />
        );
      })}
    </SidebarContainer>
  );
}

export default SideBar;

const SidebarContainer = styled.div`
  background-color: var(--notifiny-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SideBarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 480px;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
