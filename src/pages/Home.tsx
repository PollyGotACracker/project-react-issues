import { useEffect, useState } from "react";
import { useIssueContext } from "../contexts/IssueContext";
import { IssueData } from "../services/issue.service";
import List from "../components/List";

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
    <List
      data={issueList}
      adAHref={"https://www.wanted.co.kr/"}
      adImgSrc={"/images/ad_wanted.webp"}
    />
  );
};

export default Home;
