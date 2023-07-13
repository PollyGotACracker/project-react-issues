import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useApiContext } from "../contexts/ApiContext";
import { IssueDetail } from "../services/issue.service";
import Content from "../components/Content";
import UserAvatar from "../components/UserAvatar";
import Loading from "../components/Loading";
import ListItem from "../components/ListItem";

const Detail = () => {
  const { id } = useParams();
  const { getIssueDetail } = useApiContext();
  const [issue, setIssue] = useState<IssueDetail>({} as IssueDetail);
  const isLoaded = !!Object.keys(issue).length;

  useEffect(() => {
    (async () => {
      if (id) {
        const data = await getIssueDetail(parseInt(id));
        data && setIssue({ ...data });
      }
    })();
  }, [id, getIssueDetail]);

  return (
    <>
      {isLoaded ? (
        <StyledMain>
          <UserAvatar url={issue.user_avatar_url || ""} />
          <ListItem item={issue} />
          <Content data={issue.content || ""} />
        </StyledMain>
      ) : (
        <Loading visible={true} />
      )}
    </>
  );
};

const StyledMain = styled.main`
  display: grid;
  row-gap: 20px;
  column-gap: 10px;
  grid-template-rows: auto auto;
  grid-template-columns: 80px auto;
  margin: 30px;
  margin-left: calc(10vw * 0.5);
  margin-right: calc(10vw * 0.5);
  min-height: 0;
  min-width: 0;

  & > * {
    overflow: hidden;
    min-width: 0;
  }
  & > div:last-child {
    grid-column: 1 / span 2;
  }
`;

export default Detail;
