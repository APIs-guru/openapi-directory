import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
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
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
  }
  
  /**
   * dfsSlatesByDate - DFS Slates by Date
  **/
  dfsSlatesByDate(
    req: operations.DfsSlatesByDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DfsSlatesByDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfsSlatesByDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/DfsSlatesByDate/{date}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DfsSlatesByDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dfsSlates = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * dfsSlatesByWeek - DFS Slates by Week
  **/
  dfsSlatesByWeek(
    req: operations.DfsSlatesByWeekRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DfsSlatesByWeekResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfsSlatesByWeekRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/DfsSlatesByWeek/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DfsSlatesByWeekResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dfsSlates = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * idpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries - IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
  **/
  idpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(
    req: operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/IdpPlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGameProjection = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * idpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries - IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
  **/
  idpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(
    req: operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/IdpPlayerGameProjectionStatsByTeam/{season}/{week}/{team}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGameProjections = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * idpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries - IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
  **/
  idpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(
    req: operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/IdpPlayerGameProjectionStatsByWeek/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGameProjections = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * projectedFantasyDefenseGameStatsWDfsSalaries - Projected Fantasy Defense Game Stats (w/ DFS Salaries)
  **/
  projectedFantasyDefenseGameStatsWDfsSalaries(
    req: operations.ProjectedFantasyDefenseGameStatsWDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedFantasyDefenseGameStatsWDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedFantasyDefenseGameStatsWDfsSalariesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/FantasyDefenseProjectionsByGame/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProjectedFantasyDefenseGameStatsWDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fantasyDefenseGameProjections = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * projectedFantasyDefenseSeasonStatsWByeWeekAdp - Projected Fantasy Defense Season Stats (w/ Bye Week, ADP)
  **/
  projectedFantasyDefenseSeasonStatsWByeWeekAdp(
    req: operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/FantasyDefenseProjectionsBySeason/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fantasyDefenseSeasonProjections = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
  **/
  projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(
    req: operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGameProjection = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * projectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
  **/
  projectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(
    req: operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameProjectionStatsByTeam/{season}/{week}/{team}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGameProjections = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * projectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
  **/
  projectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(
    req: operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameProjectionStatsByWeek/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGameProjections = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * projectedPlayerSeasonStatsByPlayerWByeWeekAdp - Projected Player Season Stats by Player (w/ Bye Week, ADP)
  **/
  projectedPlayerSeasonStatsByPlayerWByeWeekAdp(
    req: operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerSeasonProjectionStatsByPlayerID/{season}/{playerid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerSeasonProjection = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * projectedPlayerSeasonStatsByTeamWByeWeekAdp - Projected Player Season Stats by Team (w/ Bye Week, ADP)
  **/
  projectedPlayerSeasonStatsByTeamWByeWeekAdp(
    req: operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerSeasonProjections = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * projectedPlayerSeasonStatsWByeWeekAdp - Projected Player Season Stats (w/ Bye Week, ADP)
  **/
  projectedPlayerSeasonStatsWByeWeekAdp(
    req: operations.ProjectedPlayerSeasonStatsWByeWeekAdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectedPlayerSeasonStatsWByeWeekAdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectedPlayerSeasonStatsWByeWeekAdpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerSeasonProjectionStats/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProjectedPlayerSeasonStatsWByeWeekAdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerSeasonProjections = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
