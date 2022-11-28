import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class List {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDistrictEvents - Gets a list of events in the given district.
    **/
    getDistrictEvents(req: operations.GetDistrictEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictEventsResponse>;
    /**
     * getDistrictEventsKeys - Gets a list of event keys for events in the given district.
    **/
    getDistrictEventsKeys(req: operations.GetDistrictEventsKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictEventsKeysResponse>;
    /**
     * getDistrictEventsSimple - Gets a short-form list of events in the given district.
    **/
    getDistrictEventsSimple(req: operations.GetDistrictEventsSimpleRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictEventsSimpleResponse>;
    /**
     * getDistrictRankings - Gets a list of team district rankings for the given district.
    **/
    getDistrictRankings(req: operations.GetDistrictRankingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictRankingsResponse>;
    /**
     * getDistrictTeams - Gets a list of `Team` objects that competed in events in the given district.
    **/
    getDistrictTeams(req: operations.GetDistrictTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictTeamsResponse>;
    /**
     * getDistrictTeamsKeys - Gets a list of `Team` objects that competed in events in the given district.
    **/
    getDistrictTeamsKeys(req: operations.GetDistrictTeamsKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictTeamsKeysResponse>;
    /**
     * getDistrictTeamsSimple - Gets a short-form list of `Team` objects that competed in events in the given district.
    **/
    getDistrictTeamsSimple(req: operations.GetDistrictTeamsSimpleRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictTeamsSimpleResponse>;
    /**
     * getEventTeams - Gets a list of `Team` objects that competed in the given event.
    **/
    getEventTeams(req: operations.GetEventTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventTeamsResponse>;
    /**
     * getEventTeamsKeys - Gets a list of `Team` keys that competed in the given event.
    **/
    getEventTeamsKeys(req: operations.GetEventTeamsKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetEventTeamsKeysResponse>;
    /**
     * getEventTeamsSimple - Gets a short-form list of `Team` objects that competed in the given event.
    **/
    getEventTeamsSimple(req: operations.GetEventTeamsSimpleRequest, config?: AxiosRequestConfig): Promise<operations.GetEventTeamsSimpleResponse>;
    /**
     * getEventTeamsStatuses - Gets a key-value list of the event statuses for teams competing at the given event.
    **/
    getEventTeamsStatuses(req: operations.GetEventTeamsStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetEventTeamsStatusesResponse>;
    /**
     * getEventsByYear - Gets a list of events in the given year.
    **/
    getEventsByYear(req: operations.GetEventsByYearRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsByYearResponse>;
    /**
     * getEventsByYearKeys - Gets a list of event keys in the given year.
    **/
    getEventsByYearKeys(req: operations.GetEventsByYearKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsByYearKeysResponse>;
    /**
     * getEventsByYearSimple - Gets a short-form list of events in the given year.
    **/
    getEventsByYearSimple(req: operations.GetEventsByYearSimpleRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsByYearSimpleResponse>;
    /**
     * getTeamEventsStatusesByYear - Gets a key-value list of the event statuses for events this team has competed at in the given year.
    **/
    getTeamEventsStatusesByYear(req: operations.GetTeamEventsStatusesByYearRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamEventsStatusesByYearResponse>;
    /**
     * getTeams - Gets a list of `Team` objects, paginated in groups of 500.
    **/
    getTeams(req: operations.GetTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsResponse>;
    /**
     * getTeamsByYear - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
    **/
    getTeamsByYear(req: operations.GetTeamsByYearRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsByYearResponse>;
    /**
     * getTeamsByYearKeys - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
    **/
    getTeamsByYearKeys(req: operations.GetTeamsByYearKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsByYearKeysResponse>;
    /**
     * getTeamsByYearSimple - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
    **/
    getTeamsByYearSimple(req: operations.GetTeamsByYearSimpleRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsByYearSimpleResponse>;
    /**
     * getTeamsKeys - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
    **/
    getTeamsKeys(req: operations.GetTeamsKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsKeysResponse>;
    /**
     * getTeamsSimple - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.
    **/
    getTeamsSimple(req: operations.GetTeamsSimpleRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsSimpleResponse>;
}
