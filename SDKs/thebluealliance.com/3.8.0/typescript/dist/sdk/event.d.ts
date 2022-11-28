import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Event {
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
     * getEvent - Gets an Event.
    **/
    getEvent(req: operations.GetEventRequest, config?: AxiosRequestConfig): Promise<operations.GetEventResponse>;
    /**
     * getEventAlliances - Gets a list of Elimination Alliances for the given Event.
    **/
    getEventAlliances(req: operations.GetEventAlliancesRequest, config?: AxiosRequestConfig): Promise<operations.GetEventAlliancesResponse>;
    /**
     * getEventAwards - Gets a list of awards from the given event.
    **/
    getEventAwards(req: operations.GetEventAwardsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventAwardsResponse>;
    /**
     * getEventDistrictPoints - Gets a list of team rankings for the Event.
    **/
    getEventDistrictPoints(req: operations.GetEventDistrictPointsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventDistrictPointsResponse>;
    /**
     * getEventInsights - Gets a set of Event-specific insights for the given Event.
    **/
    getEventInsights(req: operations.GetEventInsightsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventInsightsResponse>;
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
     * getEventOpRs - Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.
    **/
    getEventOpRs(req: operations.GetEventOpRsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventOpRsResponse>;
    /**
     * getEventPredictions - Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.
    **/
    getEventPredictions(req: operations.GetEventPredictionsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventPredictionsResponse>;
    /**
     * getEventRankings - Gets a list of team rankings for the Event.
    **/
    getEventRankings(req: operations.GetEventRankingsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventRankingsResponse>;
    /**
     * getEventSimple - Gets a short-form Event.
    **/
    getEventSimple(req: operations.GetEventSimpleRequest, config?: AxiosRequestConfig): Promise<operations.GetEventSimpleResponse>;
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
     * getTeamEventAwards - Gets a list of awards the given team won at the given event.
    **/
    getTeamEventAwards(req: operations.GetTeamEventAwardsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamEventAwardsResponse>;
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
     * getTeamEventStatus - Gets the competition rank and status of the team at the given event.
    **/
    getTeamEventStatus(req: operations.GetTeamEventStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamEventStatusResponse>;
    /**
     * getTeamEvents - Gets a list of all events this team has competed at.
    **/
    getTeamEvents(req: operations.GetTeamEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamEventsResponse>;
    /**
     * getTeamEventsByYear - Gets a list of events this team has competed at in the given year.
    **/
    getTeamEventsByYear(req: operations.GetTeamEventsByYearRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamEventsByYearResponse>;
    /**
     * getTeamEventsByYearKeys - Gets a list of the event keys for events this team has competed at in the given year.
    **/
    getTeamEventsByYearKeys(req: operations.GetTeamEventsByYearKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamEventsByYearKeysResponse>;
    /**
     * getTeamEventsByYearSimple - Gets a short-form list of events this team has competed at in the given year.
    **/
    getTeamEventsByYearSimple(req: operations.GetTeamEventsByYearSimpleRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamEventsByYearSimpleResponse>;
    /**
     * getTeamEventsKeys - Gets a list of the event keys for all events this team has competed at.
    **/
    getTeamEventsKeys(req: operations.GetTeamEventsKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamEventsKeysResponse>;
    /**
     * getTeamEventsSimple - Gets a short-form list of all events this team has competed at.
    **/
    getTeamEventsSimple(req: operations.GetTeamEventsSimpleRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamEventsSimpleResponse>;
    /**
     * getTeamEventsStatusesByYear - Gets a key-value list of the event statuses for events this team has competed at in the given year.
    **/
    getTeamEventsStatusesByYear(req: operations.GetTeamEventsStatusesByYearRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamEventsStatusesByYearResponse>;
}
