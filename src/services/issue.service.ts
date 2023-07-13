import { issueApi, PATH } from "./core";
import {
  GET_ISSUE_LIST_STATUS,
  GET_ISSUE_STATUS,
} from "../constants/statusDesc";
import { extractIssueDetail, extractIssueList } from "../utils/extractIssue";
import { alertStatus } from "../utils/alertStatus";

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

export interface IssueServiceType {
  getIssueList: (pageNum: number) => Promise<IssueItem[] | boolean | void>;
  getIssueDetail: (id: number) => Promise<IssueDetail | void>;
}

export class IssueService implements IssueServiceType {
  async getIssueList(pageNum: number) {
    return issueApi
      .get(`${PATH.GET_ALL_ISSUES}&page=${pageNum}`)
      .then((response) => {
        const status = response.status;
        if (status === 200) {
          const isEmpty = response.data.length === 0;
          return !isEmpty ? extractIssueList(response.data) : false;
        }
        alertStatus(status, GET_ISSUE_LIST_STATUS);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  async getIssueDetail(id: number) {
    return issueApi
      .get(`${PATH.GET_ISSUE}/${id}`)
      .then((response) => {
        const status = response.status;
        if (status === 200) return extractIssueDetail(response.data);
        alertStatus(status, GET_ISSUE_STATUS);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
