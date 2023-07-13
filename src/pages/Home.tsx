import { useCallback, useEffect, useRef, useState } from "react";
import { useApiContext } from "../contexts/ApiContext";
import { useDataContext } from "../contexts/DataContext";
import List from "../components/List";
import Loading from "../components/Loading";
import useObserver from "../hooks/useObserver";

const Home = () => {
  const { getIssueList } = useApiContext();
  const { issueList, issuePageNum, insertIssueList } = useDataContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const loadMoreItem = useCallback(async () => {
    if (!isLastPage) {
      setIsLoading(true);
      const data = await getIssueList(issuePageNum);
      if (Array.isArray(data)) {
        insertIssueList([...data]);
        setIsLoading(false);
      }
      if (!data) setIsLastPage(true);
    }
  }, [getIssueList, insertIssueList, isLastPage, issuePageNum]);

  const { loadMoreRef } = useObserver(loadMoreItem);

  return (
    <>
      {issueList.length === 0 ? (
        <Loading size={"full"} />
      ) : (
        <List data={issueList} />
      )}
      {!isLastPage && !isLoading && (
        <Loading ref={loadMoreRef} size={"inline"} />
      )}
    </>
  );
};

export default Home;
