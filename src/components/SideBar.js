import { Apps, Bookmark, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from "@material-ui/icons";
import { CreateOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import SideBarOption from "./SideBarOption";

function SideBar() {
  return (
    <SidebarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Hi Firas</h2>
          <h3>
            <FiberManualRecord />
            Firas Jerbi
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

        <hr/>
        <SideBarOption Icon={ExpandMore} title="Show More" />
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
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 10px;
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
