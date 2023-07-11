import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

const authApiConfig: CreateAxiosDefaults<AxiosInstance> = {
  baseURL: "https://api.github.com",
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
    Accept: "application/vnd.github+json",
  },
};

export const issueApi: AxiosInstance = axios.create(authApiConfig);

issueApi.interceptors.request.use((config) => {
  config.headers.Authorization = process.env.REACT_APP_MY_TOKEN;
  return config;
});

const PARAMS = {
  OWNER: "facebook",
  REPO: "react",
  STATE: "open",
  SORT: "comments",
  PER_PAGE: 30,
};

export const PATH = {
  GET_ALL_ISSUES: `/repos/${PARAMS.OWNER}/${PARAMS.REPO}/issues?state=${PARAMS.STATE}&sort=${PARAMS.SORT}&per_page=${PARAMS.PER_PAGE}`,
  GET_ISSUE: `/repos/${PARAMS.OWNER}/${PARAMS.REPO}/issues`,
};
