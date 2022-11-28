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
   * areGamesInProgress - Are Games In Progress
   *
   * Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.
  **/
  areGamesInProgress(
    req: operations.AreGamesInProgressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AreGamesInProgressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AreGamesInProgressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/AreAnyGamesInProgress", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AreGamesInProgressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.areGamesInProgress200ApplicationJsonBoolean = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * boxScoreByScoreidV - Box Score by ScoreID V3
  **/
  boxScoreByScoreidV(
    req: operations.BoxScoreByScoreidVRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BoxScoreByScoreidVResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BoxScoreByScoreidVRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/BoxScoreByScoreIDV3/{scoreid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BoxScoreByScoreidVResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.boxScoreV3 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * boxScoreV - Box Score V3
  **/
  boxScoreV(
    req: operations.BoxScoreVRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BoxScoreVResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BoxScoreVRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/BoxScoreV3/{season}/{week}/{hometeam}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BoxScoreVResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.boxScoreV3 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * boxScoresDeltaV - Box Scores Delta V3
   *
   * This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes. You can also filter by type of player stats to include, such as traditional fantasy players, IDP players or all players.
  **/
  boxScoresDeltaV(
    req: operations.BoxScoresDeltaVRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BoxScoresDeltaVResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BoxScoresDeltaVRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/BoxScoresDeltaV3/{season}/{week}/{playerstoinclude}/{minutes}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BoxScoresDeltaVResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.boxScoreV3s = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * boxScoresVSimulation - Box Scores V3 Simulation
   *
   * Gets simulated live box scores of NFL games, covering the Conference Championship games on January 21, 2018.
  **/
  boxScoresVSimulation(
    req: operations.BoxScoresVSimulationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BoxScoresVSimulationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BoxScoresVSimulationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/SimulatedBoxScoresV3/{numberofplays}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BoxScoresVSimulationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.boxScoreV3s = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * byeWeeks - Bye Weeks
   *
   * Get bye weeks for the teams during a specified NFL season. 
  **/
  byeWeeks(
    req: operations.ByeWeeksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ByeWeeksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ByeWeeksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/Byes/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ByeWeeksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.byes = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * dailyFantasyPlayers - Daily Fantasy Players
  **/
  dailyFantasyPlayers(
    req: operations.DailyFantasyPlayersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DailyFantasyPlayersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DailyFantasyPlayersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/DailyFantasyPlayers/{date}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DailyFantasyPlayersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dailyFantasyPlayers = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * dailyFantasyScoring - Daily Fantasy Scoring
  **/
  dailyFantasyScoring(
    req: operations.DailyFantasyScoringRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DailyFantasyScoringResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DailyFantasyScoringRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/DailyFantasyPoints/{date}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DailyFantasyScoringResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dailyFantasyScorings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
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
   * fantasyDefenseGameStats - Fantasy Defense Game Stats
  **/
  fantasyDefenseGameStats(
    req: operations.FantasyDefenseGameStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FantasyDefenseGameStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FantasyDefenseGameStatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/FantasyDefenseByGame/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FantasyDefenseGameStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fantasyDefenseGames = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fantasyDefenseGameStatsByTeam - Fantasy Defense Game Stats by Team
  **/
  fantasyDefenseGameStatsByTeam(
    req: operations.FantasyDefenseGameStatsByTeamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FantasyDefenseGameStatsByTeamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FantasyDefenseGameStatsByTeamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/FantasyDefenseByGameByTeam/{season}/{week}/{team}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FantasyDefenseGameStatsByTeamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fantasyDefenseGame = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fantasyDefenseSeasonStats - Fantasy Defense Season Stats
  **/
  fantasyDefenseSeasonStats(
    req: operations.FantasyDefenseSeasonStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FantasyDefenseSeasonStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FantasyDefenseSeasonStatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/FantasyDefenseBySeason/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FantasyDefenseSeasonStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fantasyDefenseSeasons = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fantasyDefenseSeasonStatsByTeam - Fantasy Defense Season Stats by Team
  **/
  fantasyDefenseSeasonStatsByTeam(
    req: operations.FantasyDefenseSeasonStatsByTeamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FantasyDefenseSeasonStatsByTeamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FantasyDefenseSeasonStatsByTeamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/FantasyDefenseBySeasonByTeam/{season}/{team}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FantasyDefenseSeasonStatsByTeamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fantasyDefenseSeason = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fantasyPlayerOwnershipPercentagesSeasonLong - Fantasy Player Ownership Percentages (Season-Long)
  **/
  fantasyPlayerOwnershipPercentagesSeasonLong(
    req: operations.FantasyPlayerOwnershipPercentagesSeasonLongRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FantasyPlayerOwnershipPercentagesSeasonLongResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FantasyPlayerOwnershipPercentagesSeasonLongRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerOwnership/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FantasyPlayerOwnershipPercentagesSeasonLongResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerOwnerships = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fantasyPlayersWithAdp - Fantasy Players with ADP
   *
   * This method returns a comprehensive list of draftable fantasy football players, including QB, RB, WR, TE, K and DEF.  Players are sorted by ADP (AverageDraftPosition).
  **/
  fantasyPlayersWithAdp(
    req: operations.FantasyPlayersWithAdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FantasyPlayersWithAdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FantasyPlayersWithAdpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/FantasyPlayers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FantasyPlayersWithAdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fantasyPlayers = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * gameStatsBySeasonDeprecatedUseTeamGameStatsInstead - Game Stats by Season (Deprecated, use Team Game Stats instead)
   *
   * Game stats for a specified season.
  **/
  gameStatsBySeasonDeprecatedUseTeamGameStatsInstead(
    req: operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/GameStats/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.games = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * gameStatsByWeekDeprecatedUseTeamGameStatsInstead - Game Stats by Week (Deprecated, use Team Game Stats instead)
   *
   * Game stats for a specified season and week.
  **/
  gameStatsByWeekDeprecatedUseTeamGameStatsInstead(
    req: operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/GameStatsByWeek/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.games = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * idpFantasyPlayersWithAdp - IDP Fantasy Players with ADP
   *
   * This method returns the top 300+ IDP Fantasy Players for the current or upcoming season, ordered by AverageDraftPositionIDP.
  **/
  idpFantasyPlayersWithAdp(
    req: operations.IdpFantasyPlayersWithAdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdpFantasyPlayersWithAdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdpFantasyPlayersWithAdpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/FantasyPlayersIDP", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.IdpFantasyPlayersWithAdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fantasyPlayers = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * injuries - Injuries
  **/
  injuries(
    req: operations.InjuriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InjuriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InjuriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/Injuries/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InjuriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.injuries = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * injuriesByTeam - Injuries by Team
  **/
  injuriesByTeam(
    req: operations.InjuriesByTeamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InjuriesByTeamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InjuriesByTeamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/Injuries/{season}/{week}/{team}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InjuriesByTeamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.injuries = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * leagueLeadersBySeason - League Leaders by Season
  **/
  leagueLeadersBySeason(
    req: operations.LeagueLeadersBySeasonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LeagueLeadersBySeasonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LeagueLeadersBySeasonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/SeasonLeagueLeaders/{season}/{position}/{column}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LeagueLeadersBySeasonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerSeasons = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * leagueLeadersByWeek - League Leaders by Week
  **/
  leagueLeadersByWeek(
    req: operations.LeagueLeadersByWeekRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LeagueLeadersByWeekResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LeagueLeadersByWeekRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/GameLeagueLeaders/{season}/{week}/{position}/{column}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LeagueLeadersByWeekResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGames = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * legacyBoxScore - Legacy Box Score
  **/
  legacyBoxScore(
    req: operations.LegacyBoxScoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LegacyBoxScoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LegacyBoxScoreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/BoxScore/{season}/{week}/{hometeam}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LegacyBoxScoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.boxScore = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * legacyBoxScores - Legacy Box Scores
   *
   * This method returns all box scores for a given season and week.
  **/
  legacyBoxScores(
    req: operations.LegacyBoxScoresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LegacyBoxScoresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LegacyBoxScoresRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/BoxScores/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LegacyBoxScoresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.boxScores = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * legacyBoxScoresActive - Legacy Box Scores Active
   *
   * This method returns box scores for all games that are either in-progress or have been updated within the last 30 minutes.
  **/
  legacyBoxScoresActive(
    req: operations.LegacyBoxScoresActiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LegacyBoxScoresActiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LegacyBoxScoresActiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/ActiveBoxScores", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LegacyBoxScoresActiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.boxScores = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * legacyBoxScoresDelta - Legacy Box Scores Delta
   *
   * This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes.
  **/
  legacyBoxScoresDelta(
    req: operations.LegacyBoxScoresDeltaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LegacyBoxScoresDeltaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LegacyBoxScoresDeltaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/BoxScoresDelta/{season}/{week}/{minutes}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LegacyBoxScoresDeltaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.boxScores = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * legacyBoxScoresDeltaCurrentWeek - Legacy Box Scores Delta (Current Week)
  **/
  legacyBoxScoresDeltaCurrentWeek(
    req: operations.LegacyBoxScoresDeltaCurrentWeekRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LegacyBoxScoresDeltaCurrentWeekResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LegacyBoxScoresDeltaCurrentWeekRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/RecentlyUpdatedBoxScores/{minutes}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LegacyBoxScoresDeltaCurrentWeekResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.boxScores = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * legacyBoxScoresFinal - Legacy Box Scores Final
  **/
  legacyBoxScoresFinal(
    req: operations.LegacyBoxScoresFinalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LegacyBoxScoresFinalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LegacyBoxScoresFinalRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/FinalBoxScores", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LegacyBoxScoresFinalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.boxScores = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * legacyBoxScoresLive - Legacy Box Scores Live
  **/
  legacyBoxScoresLive(
    req: operations.LegacyBoxScoresLiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LegacyBoxScoresLiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LegacyBoxScoresLiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/LiveBoxScores", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LegacyBoxScoresLiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.boxScores = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * news - News
  **/
  news(
    req: operations.NewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NewsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/News", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.news = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * newsByDate - News by Date
  **/
  newsByDate(
    req: operations.NewsByDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NewsByDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NewsByDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/NewsByDate/{date}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NewsByDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.news = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * newsByPlayer - News by Player
  **/
  newsByPlayer(
    req: operations.NewsByPlayerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NewsByPlayerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NewsByPlayerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/NewsByPlayerID/{playerid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NewsByPlayerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.news = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * newsByTeam - News by Team
  **/
  newsByTeam(
    req: operations.NewsByTeamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NewsByTeamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NewsByTeamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/NewsByTeam/{team}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NewsByTeamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.news = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerDetailsByAvailable - Player Details by Available
  **/
  playerDetailsByAvailable(
    req: operations.PlayerDetailsByAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerDetailsByAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerDetailsByAvailableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/Players", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerDetailsByAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.players = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerDetailsByFreeAgents - Player Details by Free Agents
  **/
  playerDetailsByFreeAgents(
    req: operations.PlayerDetailsByFreeAgentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerDetailsByFreeAgentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerDetailsByFreeAgentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/FreeAgents", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerDetailsByFreeAgentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.players = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerDetailsByPlayer - Player Details by Player
  **/
  playerDetailsByPlayer(
    req: operations.PlayerDetailsByPlayerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerDetailsByPlayerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerDetailsByPlayerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/Player/{playerid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerDetailsByPlayerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerDetailsByRookieDraftYear - Player Details by Rookie Draft Year
  **/
  playerDetailsByRookieDraftYear(
    req: operations.PlayerDetailsByRookieDraftYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerDetailsByRookieDraftYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerDetailsByRookieDraftYearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/Rookies/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerDetailsByRookieDraftYearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.players = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerDetailsByTeam - Player Details by Team
  **/
  playerDetailsByTeam(
    req: operations.PlayerDetailsByTeamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerDetailsByTeamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerDetailsByTeamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/Players/{team}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerDetailsByTeamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerGameLogsBySeason - Player Game Logs By Season
  **/
  playerGameLogsBySeason(
    req: operations.PlayerGameLogsBySeasonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerGameLogsBySeasonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerGameLogsBySeasonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerGameLogsBySeasonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGames = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerGameRedZoneStats - Player Game Red Zone Stats
  **/
  playerGameRedZoneStats(
    req: operations.PlayerGameRedZoneStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerGameRedZoneStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerGameRedZoneStatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameRedZoneStats/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerGameRedZoneStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGameRedZones = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerGameRedZoneStatsInsideFive - Player Game Red Zone Stats Inside Five
  **/
  playerGameRedZoneStatsInsideFive(
    req: operations.PlayerGameRedZoneStatsInsideFiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerGameRedZoneStatsInsideFiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerGameRedZoneStatsInsideFiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameRedZoneInsideFiveStats/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerGameRedZoneStatsInsideFiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGameRedZones = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerGameRedZoneStatsInsideTen - Player Game Red Zone Stats Inside Ten
  **/
  playerGameRedZoneStatsInsideTen(
    req: operations.PlayerGameRedZoneStatsInsideTenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerGameRedZoneStatsInsideTenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerGameRedZoneStatsInsideTenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameRedZoneInsideTenStats/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerGameRedZoneStatsInsideTenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGameRedZones = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerGameStatsByPlayer - Player Game Stats by Player
  **/
  playerGameStatsByPlayer(
    req: operations.PlayerGameStatsByPlayerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerGameStatsByPlayerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerGameStatsByPlayerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameStatsByPlayerID/{season}/{week}/{playerid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerGameStatsByPlayerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGame = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerGameStatsByTeam - Player Game Stats by Team
  **/
  playerGameStatsByTeam(
    req: operations.PlayerGameStatsByTeamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerGameStatsByTeamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerGameStatsByTeamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameStatsByTeam/{season}/{week}/{team}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerGameStatsByTeamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGames = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerGameStatsByWeek - Player Game Stats by Week
  **/
  playerGameStatsByWeek(
    req: operations.PlayerGameStatsByWeekRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerGameStatsByWeekResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerGameStatsByWeekRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameStatsByWeek/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerGameStatsByWeekResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGames = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerGameStatsByWeekDelta - Player Game Stats by Week Delta
  **/
  playerGameStatsByWeekDelta(
    req: operations.PlayerGameStatsByWeekDeltaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerGameStatsByWeekDeltaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerGameStatsByWeekDeltaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameStatsByWeekDelta/{season}/{week}/{minutes}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerGameStatsByWeekDeltaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGames = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerGameStatsDelta - Player Game Stats Delta
  **/
  playerGameStatsDelta(
    req: operations.PlayerGameStatsDeltaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerGameStatsDeltaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerGameStatsDeltaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerGameStatsDelta/{minutes}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerGameStatsDeltaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerGames = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerSeasonRedZoneStats - Player Season Red Zone Stats
  **/
  playerSeasonRedZoneStats(
    req: operations.PlayerSeasonRedZoneStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerSeasonRedZoneStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerSeasonRedZoneStatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerSeasonRedZoneStats/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerSeasonRedZoneStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerSeasonRedZones = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerSeasonRedZoneStatsInsideFive - Player Season Red Zone Stats Inside Five
  **/
  playerSeasonRedZoneStatsInsideFive(
    req: operations.PlayerSeasonRedZoneStatsInsideFiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerSeasonRedZoneStatsInsideFiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerSeasonRedZoneStatsInsideFiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerSeasonRedZoneInsideFiveStats/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerSeasonRedZoneStatsInsideFiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerSeasonRedZones = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerSeasonRedZoneStatsInsideTen - Player Season Red Zone Stats Inside Ten
  **/
  playerSeasonRedZoneStatsInsideTen(
    req: operations.PlayerSeasonRedZoneStatsInsideTenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerSeasonRedZoneStatsInsideTenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerSeasonRedZoneStatsInsideTenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerSeasonRedZoneInsideTenStats/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerSeasonRedZoneStatsInsideTenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerSeasonRedZones = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerSeasonStats - Player Season Stats
  **/
  playerSeasonStats(
    req: operations.PlayerSeasonStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerSeasonStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerSeasonStatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerSeasonStats/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerSeasonStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerSeasons = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerSeasonStatsByPlayer - Player Season Stats by Player
  **/
  playerSeasonStatsByPlayer(
    req: operations.PlayerSeasonStatsByPlayerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerSeasonStatsByPlayerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerSeasonStatsByPlayerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerSeasonStatsByPlayerID/{season}/{playerid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerSeasonStatsByPlayerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerSeasons = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerSeasonStatsByTeam - Player Season Stats by Team
  **/
  playerSeasonStatsByTeam(
    req: operations.PlayerSeasonStatsByTeamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerSeasonStatsByTeamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerSeasonStatsByTeamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerSeasonStatsByTeam/{season}/{team}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerSeasonStatsByTeamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerSeasons = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playerSeasonThirdDownStats - Player Season Third Down Stats
  **/
  playerSeasonThirdDownStats(
    req: operations.PlayerSeasonThirdDownStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayerSeasonThirdDownStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayerSeasonThirdDownStatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/PlayerSeasonThirdDownStats/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayerSeasonThirdDownStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerSeasonThirdDowns = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * proBowlers - Pro Bowlers
  **/
  proBowlers(
    req: operations.ProBowlersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProBowlersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProBowlersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/ProBowlers/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProBowlersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playerInfos = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * schedule - Schedule
   *
   * Game schedule for a specified season.
  **/
  schedule(
    req: operations.ScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ScheduleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/Schedules/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ScheduleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.schedules = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * scoresByDate - Scores by Date
   *
   * Get game scores for a specified week of a season.
  **/
  scoresByDate(
    req: operations.ScoresByDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ScoresByDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ScoresByDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/ScoresByDate/{date}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ScoresByDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scores = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * scoresBySeason - Scores by Season 
   *
   * Game scores for a specified season.
  **/
  scoresBySeason(
    req: operations.ScoresBySeasonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ScoresBySeasonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ScoresBySeasonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/Scores/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ScoresBySeasonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scores = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * scoresByWeek - Scores by Week
   *
   * Get game scores for a specified week of a season.
  **/
  scoresByWeek(
    req: operations.ScoresByWeekRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ScoresByWeekResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ScoresByWeekRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/ScoresByWeek/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ScoresByWeekResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scores = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * scoresByWeekSimulation - Scores by Week Simulation
   *
   * Gets simulated live scores of NFL games, covering the Conference Championship games on January 21, 2018.
  **/
  scoresByWeekSimulation(
    req: operations.ScoresByWeekSimulationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ScoresByWeekSimulationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ScoresByWeekSimulationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/SimulatedScores/{numberofplays}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ScoresByWeekSimulationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scores = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * seasonCurrent - Season Current
   *
   * Year of the current NFL season. This value changes on July 1st. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
  **/
  seasonCurrent(
    req: operations.SeasonCurrentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SeasonCurrentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SeasonCurrentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/CurrentSeason", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SeasonCurrentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.seasonCurrent200ApplicationJsonInteger = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * seasonLastCompleted - Season Last Completed
   *
   * Year of the most recently completed season. this value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
  **/
  seasonLastCompleted(
    req: operations.SeasonLastCompletedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SeasonLastCompletedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SeasonLastCompletedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/LastCompletedSeason", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SeasonLastCompletedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.seasonLastCompleted200ApplicationJsonInteger = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * seasonUpcoming - Season Upcoming
   *
   * Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then year of the next upcoming season. This value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
  **/
  seasonUpcoming(
    req: operations.SeasonUpcomingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SeasonUpcomingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SeasonUpcomingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/UpcomingSeason", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SeasonUpcomingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.seasonUpcoming200ApplicationJsonInteger = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * stadiums - Stadiums
   *
   * This method returns all stadiums.
  **/
  stadiums(
    req: operations.StadiumsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StadiumsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StadiumsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/Stadiums", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StadiumsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.stadiums = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * standings - Standings
  **/
  standings(
    req: operations.StandingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StandingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StandingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/Standings/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StandingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.standings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamGameStats - Team Game Stats
  **/
  teamGameStats(
    req: operations.TeamGameStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamGameStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamGameStatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/TeamGameStats/{season}/{week}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamGameStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamGames = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamSeasonStats - Team Season Stats
  **/
  teamSeasonStats(
    req: operations.TeamSeasonStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamSeasonStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamSeasonStatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/TeamSeasonStats/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamSeasonStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamSeasons = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsActive - Teams (Active)
   *
   * Gets all active teams.
  **/
  teamsActive(
    req: operations.TeamsActiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsActiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsActiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/Teams", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsActiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teams = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsAll - Teams (All)
   *
   * Gets all teams, including pro bowl teams.
  **/
  teamsAll(
    req: operations.TeamsAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsAllRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/AllTeams", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teams = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsBySeason - Teams by Season
   *
   * List of teams playing in a specified season.
  **/
  teamsBySeason(
    req: operations.TeamsBySeasonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsBySeasonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsBySeasonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/Teams/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsBySeasonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teams = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * timeframes - Timeframes
   *
   * Get detailed information about past, present, and future timeframes.
  **/
  timeframes(
    req: operations.TimeframesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TimeframesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TimeframesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/Timeframes/{type}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TimeframesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.timeframes = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * weekCurrent - Week Current
   *
   * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
  **/
  weekCurrent(
    req: operations.WeekCurrentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WeekCurrentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WeekCurrentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/CurrentWeek", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.WeekCurrentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.weekCurrent200ApplicationJsonInteger = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * weekLastCompleted - Week Last Completed
   *
   * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
  **/
  weekLastCompleted(
    req: operations.WeekLastCompletedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WeekLastCompletedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WeekLastCompletedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/LastCompletedWeek", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.WeekLastCompletedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.weekLastCompleted200ApplicationJsonInteger = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * weekUpcoming - Week Upcoming
   *
   * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
  **/
  weekUpcoming(
    req: operations.WeekUpcomingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WeekUpcomingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WeekUpcomingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}/UpcomingWeek", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.WeekUpcomingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.weekUpcoming200ApplicationJsonInteger = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
