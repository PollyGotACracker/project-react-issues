import { issueApi, PATH } from "./core";

export interface IssueData {
  number: number;
  title: string;
  user: string;
  created_at: string;
  comments: number;
}

export class IssueService {
  async getAllIssues(): Promise<IssueData[] | void> {
    return issueApi
      .get(PATH.GET_ALL_ISSUES)
      .then((response) => {
        const data = response.data;
        const result = data.map((item: any) => {
          const _created_at = item.created_at;
          const regex = /(\w+)-(\w+)-(\w+)T/;
          const created_at = _created_at
            .replace(regex, "$1년 $2월 $3일")
            .slice(0, 13);
          return {
            number: item.number,
            title: item.title,
            user: item.user.login,
            created_at: created_at,
            comments: item.comments,
          };
        });
        return result;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }
}
