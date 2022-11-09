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
  
  // DfsSlatesByDate - DFS Slates by Date
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

  
  // DfsSlatesByWeek - DFS Slates by Week
  DfsSlatesByWeek(
    req: operations.DfsSlatesByWeekRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DfsSlatesByWeekResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfsSlatesByWeekRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/DfsSlatesByWeek/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DfsSlatesByWeekResponse = {statusCode: httpRes.status, contentType: contentType};
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

  
  // IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries - IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
  IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(
    req: operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/IdpPlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.playerGameProjection = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries - IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
  IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(
    req: operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/IdpPlayerGameProjectionStatsByTeam/{season}/{week}/{team}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
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

  
  // IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries - IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
  IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(
    req: operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/IdpPlayerGameProjectionStatsByWeek/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
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

  
  // ProjectedFantasyDefenseGameStatsWDfsSalaries - Projected Fantasy Defense Game Stats (w/ DFS Salaries)
  ProjectedFantasyDefenseGameStatsWDfsSalaries(
    req: operations.ProjectedFantasyDefenseGameStatsWDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedFantasyDefenseGameStatsWDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedFantasyDefenseGameStatsWDfsSalariesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/FantasyDefenseProjectionsByGame/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProjectedFantasyDefenseGameStatsWDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fantasyDefenseGameProjections = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProjectedFantasyDefenseSeasonStatsWByeWeekAdp - Projected Fantasy Defense Season Stats (w/ Bye Week, ADP)
  ProjectedFantasyDefenseSeasonStatsWByeWeekAdp(
    req: operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/FantasyDefenseProjectionsBySeason/{season}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fantasyDefenseSeasonProjections = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
  ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(
    req: operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.playerGameProjection = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
  ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(
    req: operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameProjectionStatsByTeam/{season}/{week}/{team}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
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

  
  // ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
  ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(
    req: operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameProjectionStatsByWeek/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
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

  
  // ProjectedPlayerSeasonStatsByPlayerWByeWeekAdp - Projected Player Season Stats by Player (w/ Bye Week, ADP)
  ProjectedPlayerSeasonStatsByPlayerWByeWeekAdp(
    req: operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerSeasonProjectionStatsByPlayerID/{season}/{playerid}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.playerSeasonProjection = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProjectedPlayerSeasonStatsByTeamWByeWeekAdp - Projected Player Season Stats by Team (w/ Bye Week, ADP)
  ProjectedPlayerSeasonStatsByTeamWByeWeekAdp(
    req: operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.playerSeasonProjections = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProjectedPlayerSeasonStatsWByeWeekAdp - Projected Player Season Stats (w/ Bye Week, ADP)
  ProjectedPlayerSeasonStatsWByeWeekAdp(
    req: operations.ProjectedPlayerSeasonStatsWByeWeekAdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedPlayerSeasonStatsWByeWeekAdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedPlayerSeasonStatsWByeWeekAdpRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerSeasonProjectionStats/{season}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProjectedPlayerSeasonStatsWByeWeekAdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.playerSeasonProjections = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
