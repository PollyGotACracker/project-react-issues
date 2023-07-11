import { createContext, useContext } from "react";
import { IssueData, IssueService } from "../services/issue.service";

interface IssueContextType {
  getAllIssues: () => Promise<IssueData[] | void>;
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
  const getAllIssues: () => Promise<IssueData[] | void> =
    issueService.getAllIssues.bind(issueService);

  return (
    <IssueContext.Provider value={{ getAllIssues }}>
      {children}
    </IssueContext.Provider>
  );
};
export default IssueProvider;
