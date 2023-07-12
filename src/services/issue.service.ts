import { extractIssue, extractIssueList } from "../utils/extractIssue";
import { issueApi, PATH } from "./core";

export interface IssueItem {
  id: number;
  title: string;
  user: string;
  created_at: string;
  comments: number;
}

export interface IssueDetail extends IssueItem {
  user_avatar_url?: string;
  content?: string;
}

export class IssueService {
  async getIssueList(): Promise<IssueItem[] | void> {
    return issueApi
      .get(PATH.GET_ALL_ISSUES)
      .then((response) => {
        return extractIssueList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }

  async getIssue(id: number): Promise<IssueDetail | void> {
    return issueApi
      .get(`${PATH.GET_ISSUE}/${id}`)
      .then((response) => {
        return extractIssue(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }
}
