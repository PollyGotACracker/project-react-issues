import { useEffect, useState } from "react";
import { useIssueContext } from "../contexts/IssueContext";
import { IssueData } from "../services/issue.service";

const Home = () => {
  const [issueList, setIssueList] = useState<IssueData[]>([]);
  const { getAllIssues } = useIssueContext();

  useEffect(() => {
    (async () => {
      const data: IssueData[] | void = await getAllIssues();
      data && setIssueList([...data]);
    })();
  }, [getAllIssues]);

  return (
    <div>
      {issueList.map((issue) => {
        return (
          <div key={issue.number}>
            <div>{issue.number}</div>
            <div>{issue.title}</div>
            <div>{issue.user}</div>
            <div>{issue.created_at}</div>
            <div>{issue.comments}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
