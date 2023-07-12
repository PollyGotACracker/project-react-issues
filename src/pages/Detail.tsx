import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useIssueContext } from "../contexts/IssueContext";
import { IssueDetail } from "../services/issue.service";

const Detail = () => {
  const { id } = useParams();
  const { getIssue } = useIssueContext();
  const [issue, setIssue] = useState<IssueDetail | {}>({});

  useEffect(() => {
    (async () => {
      if (id) {
        const data = await getIssue(parseInt(id));
        data && setIssue({ ...data });
      }
    })();
  }, [id, getIssue]);

  return (
    <>
      {Object.entries(issue).map((val) => {
        const [key, value] = val;
        return <div key={key}>{value}</div>;
      })}
    </>
  );
};

export default Detail;
