import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Match {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEventMatchTimeseries - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
     * *WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
     * *WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
    **/
    getEventMatchTimeseries(req: operations.GetEventMatchTimeseriesRequest, config?: AxiosRequestConfig): Promise<operations.GetEventMatchTimeseriesResponse>;
    /**
     * getEventMatches - Gets a list of matches for the given event.
    **/
    getEventMatches(req: operations.GetEventMatchesRequest, config?: AxiosRequestConfig): Promise<operations.GetEventMatchesResponse>;
    /**
     * getEventMatchesKeys - Gets a list of match keys for the given event.
    **/
    getEventMatchesKeys(req: operations.GetEventMatchesKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetEventMatchesKeysResponse>;
    /**
     * getEventMatchesSimple - Gets a short-form list of matches for the given event.
    **/
    getEventMatchesSimple(req: operations.GetEventMatchesSimpleRequest, config?: AxiosRequestConfig): Promise<operations.GetEventMatchesSimpleResponse>;
    /**
     * getMatch - Gets a `Match` object for the given match key.
    **/
    getMatch(req: operations.GetMatchRequest, config?: AxiosRequestConfig): Promise<operations.GetMatchResponse>;
    /**
     * getMatchSimple - Gets a short-form `Match` object for the given match key.
    **/
    getMatchSimple(req: operations.GetMatchSimpleRequest, config?: AxiosRequestConfig): Promise<operations.GetMatchSimpleResponse>;
    /**
     * getMatchTimeseries - Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.
     * *WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
     * *WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
    **/
    getMatchTimeseries(req: operations.GetMatchTimeseriesRequest, config?: AxiosRequestConfig): Promise<operations.GetMatchTimeseriesResponse>;
    /**
     * getMatchZebra - Gets Zebra MotionWorks data for a Match for the given match key.
    **/
    getMatchZebra(req: operations.GetMatchZebraRequest, config?: AxiosRequestConfig): Promise<operations.GetMatchZebraResponse>;
    /**
     * getTeamEventMatches - Gets a list of matches for the given team and event.
    **/
    getTeamEventMatches(req: operations.GetTeamEventMatchesRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamEventMatchesResponse>;
    /**
     * getTeamEventMatchesKeys - Gets a list of match keys for matches for the given team and event.
    **/
    getTeamEventMatchesKeys(req: operations.GetTeamEventMatchesKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamEventMatchesKeysResponse>;
    /**
     * getTeamEventMatchesSimple - Gets a short-form list of matches for the given team and event.
    **/
    getTeamEventMatchesSimple(req: operations.GetTeamEventMatchesSimpleRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamEventMatchesSimpleResponse>;
    /**
     * getTeamMatchesByYear - Gets a list of matches for the given team and year.
    **/
    getTeamMatchesByYear(req: operations.GetTeamMatchesByYearRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMatchesByYearResponse>;
    /**
     * getTeamMatchesByYearKeys - Gets a list of match keys for matches for the given team and year.
    **/
    getTeamMatchesByYearKeys(req: operations.GetTeamMatchesByYearKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMatchesByYearKeysResponse>;
    /**
     * getTeamMatchesByYearSimple - Gets a short-form list of matches for the given team and year.
    **/
    getTeamMatchesByYearSimple(req: operations.GetTeamMatchesByYearSimpleRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMatchesByYearSimpleResponse>;
}
