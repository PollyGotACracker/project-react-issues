import { useCallback, useEffect, useRef, useState } from "react";
import { useApiContext } from "../contexts/ApiContext";
import { useDataContext } from "../contexts/DataContext";
import List from "../components/List";
import Loading from "../components/Loading";

const Home = () => {
  const { getIssueList } = useApiContext();
  const { issueList, issuePageNum, insertIssueList } = useDataContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);

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
  }, [insertIssueList, issuePageNum]);

  const observerHandler = useCallback(
    async (
      [entries]: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      if (entries.isIntersecting) {
        observer.unobserve(entries.target);
        await loadMoreItem();
      }
      observer.observe(entries.target);
    },
    [loadMoreItem]
  );

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(observerHandler, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });
    let localRef: HTMLDivElement | null = null;
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
      localRef = loadMoreRef.current;
    }

    return () => {
      if (localRef) return observer.unobserve(localRef);
    };
  }, [loadMoreRef, observerHandler]);

  return (
    <ul>
      {issueList.length === 0 ? <Loading /> : <List data={issueList} />}
      {!isLastPage && !isLoading && <Loading ref={loadMoreRef} />}
    </ul>
  );
};

export default Home;
