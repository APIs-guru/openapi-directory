import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class District {
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
     * getDistrictsByYear - Gets a list of districts and their corresponding district key, for the given year.
    **/
    getDistrictsByYear(req: operations.GetDistrictsByYearRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictsByYearResponse>;
    /**
     * getEventDistrictPoints - Gets a list of team rankings for the Event.
    **/
    getEventDistrictPoints(req: operations.GetEventDistrictPointsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventDistrictPointsResponse>;
    /**
     * getTeamDistricts - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
    **/
    getTeamDistricts(req: operations.GetTeamDistrictsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamDistrictsResponse>;
}
