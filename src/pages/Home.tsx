import { useEffect, useState } from "react";
import { useIssueContext } from "../contexts/IssueContext";
import { IssueItem } from "../services/issue.service";
import List from "../components/List";

const Home = () => {
  const [issueList, setIssueList] = useState<IssueItem[]>([]);
  const { getIssueList } = useIssueContext();

  useEffect(() => {
    (async () => {
      const data: IssueItem[] | void = await getIssueList();
      data && setIssueList([...data]);
    })();
  }, [getIssueList]);

  return (
    <List
      data={issueList}
      adAHref={"https://www.wanted.co.kr/"}
      adImgSrc={"/images/ad_wanted.webp"}
    />
  );
};

export default Home;
