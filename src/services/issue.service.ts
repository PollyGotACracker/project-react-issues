import {
  GET_ISSUE_LIST_STATUS,
  GET_ISSUE_STATUS,
} from "../constants/statusDesc";
import { extractIssueDetail, extractIssueList } from "../utils/extractIssue";
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
  async getIssueList(pageNum: number): Promise<IssueItem[] | boolean | void> {
    return issueApi
      .get(`${PATH.GET_ALL_ISSUES}&page=${pageNum}`)
      .then((response) => {
        const status = response.status;
        if (status === 200) {
          const isEmpty = response.data.length === 0;
          return !isEmpty ? extractIssueList(response.data) : false;
        }
        if (status !== 200) {
          const _STATUS = Object.entries(GET_ISSUE_LIST_STATUS);
          for (const [key, value] of _STATUS) {
            if (status === parseInt(key)) window.alert(value);
          }
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  async getIssueDetail(id: number): Promise<IssueDetail | void> {
    return issueApi
      .get(`${PATH.GET_ISSUE}/${id}`)
      .then((response) => {
        const status = response.status;
        if (status === 200) {
          return extractIssueDetail(response.data);
        }
        if (status !== 200) {
          const _STATUS = Object.entries(GET_ISSUE_STATUS);
          for (const [key, value] of _STATUS) {
            if (status === parseInt(key)) window.alert(value);
          }
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
