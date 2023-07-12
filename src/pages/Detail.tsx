import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useIssueContext } from "../contexts/IssueContext";
import { IssueDetail } from "../services/issue.service";
import Content from "../components/Content";
import UserAvatar from "../components/UserAvatar";

const Detail = () => {
  const { id } = useParams();
  const { getIssueDetail } = useIssueContext();
  const [issue, setIssue] = useState<IssueDetail | {}>({});

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
      {Object.entries(issue).map((val) => {
        const [key, value] = val;
        switch (key) {
          case "user_avatar_url":
            return <UserAvatar key={key} url={value} />;
          case "content":
            return <Content key={key} data={value} />;
          default:
            return <div key={key}>{value}</div>;
        }
      })}
    </>
  );
};

export default Detail;
