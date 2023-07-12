import { createContext, useContext } from "react";
import {
  IssueItem,
  IssueDetail,
  IssueService,
} from "../services/issue.service";

interface IssueContextType {
  getIssueList: () => Promise<IssueItem[] | void>;
  getIssue: (id: number) => Promise<IssueDetail | void>;
}

type ProvierProps = {
  children: React.ReactElement;
  issueService: InstanceType<typeof IssueService>;
};

const IssueContext = createContext<IssueContextType | null>(null);
export const useIssueContext = () => {
  const context = useContext(IssueContext);
  if (!context)
    throw new Error(
      "useIssueContext has to be used within <IssueContext.Provider>"
    );
  return context;
};

const IssueProvider = ({ children, issueService }: ProvierProps) => {
  const getIssueList = issueService.getIssueList.bind(issueService);
  const getIssue = issueService.getIssue.bind(issueService);

  return (
    <IssueContext.Provider value={{ getIssueList, getIssue }}>
      {children}
    </IssueContext.Provider>
  );
};
export default IssueProvider;
