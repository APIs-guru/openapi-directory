import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "http://api.sportsdata.io",
  "https://api.sportsdata.io",
  "http://azure-api.sportsdata.io",
  "https://azure-api.sportsdata.io",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // DfsSlatesByDate - Dfs Slates By Date
  DfsSlatesByDate(
    req: operations.DfsSlatesByDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DfsSlatesByDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfsSlatesByDateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/DfsSlatesByDate/{date}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DfsSlatesByDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.dfsSlates = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProjectedPlayerGameStatsByCompetitionWDfsSalaries - Projected Player Game Stats by Competition (w/ DFS Salaries)
  ProjectedPlayerGameStatsByCompetitionWDfsSalaries(
    req: operations.ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedPlayerGameStatsByCompetitionWDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameProjectionStatsByCompetition/{competition}/{date}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProjectedPlayerGameStatsByCompetitionWDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.playerGameProjections = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProjectedPlayerGameStatsByDateWDfsSalaries - Projected Player Game Stats by Date (w/ DFS Salaries)
  ProjectedPlayerGameStatsByDateWDfsSalaries(
    req: operations.ProjectedPlayerGameStatsByDateWDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedPlayerGameStatsByDateWDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedPlayerGameStatsByDateWDfsSalariesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameProjectionStatsByDate/{date}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProjectedPlayerGameStatsByDateWDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.playerGameProjections = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProjectedPlayerGameStatsByPlayerWDfsSalaries - Projected Player Game Stats by Player (w/ DFS Salaries)
  ProjectedPlayerGameStatsByPlayerWDfsSalaries(
    req: operations.ProjectedPlayerGameStatsByPlayerWDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedPlayerGameStatsByPlayerWDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedPlayerGameStatsByPlayerWDfsSalariesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProjectedPlayerGameStatsByPlayerWDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.playerGameProjections = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpcomingDfsSlatesByCompetition - Upcoming Dfs Slates By Competition
  UpcomingDfsSlatesByCompetition(
    req: operations.UpcomingDfsSlatesByCompetitionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpcomingDfsSlatesByCompetitionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpcomingDfsSlatesByCompetitionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/UpcomingDfsSlatesByCompetition/{competitionId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpcomingDfsSlatesByCompetitionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.dfsSlates = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
