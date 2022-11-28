import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Team {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
     * getTeam - Gets a `Team` object for the team referenced by the given key.
    **/
    getTeam(req: operations.GetTeamRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamResponse>;
    /**
     * getTeamAwards - Gets a list of awards the given team has won.
    **/
    getTeamAwards(req: operations.GetTeamAwardsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamAwardsResponse>;
    /**
     * getTeamAwardsByYear - Gets a list of awards the given team has won in a given year.
    **/
    getTeamAwardsByYear(req: operations.GetTeamAwardsByYearRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamAwardsByYearResponse>;
    /**
     * getTeamDistricts - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
    **/
    getTeamDistricts(req: operations.GetTeamDistrictsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamDistrictsResponse>;
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
    /**
     * getTeamMediaByTag - Gets a list of Media (videos / pictures) for the given team and tag.
    **/
    getTeamMediaByTag(req: operations.GetTeamMediaByTagRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMediaByTagResponse>;
    /**
     * getTeamMediaByTagYear - Gets a list of Media (videos / pictures) for the given team, tag and year.
    **/
    getTeamMediaByTagYear(req: operations.GetTeamMediaByTagYearRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMediaByTagYearResponse>;
    /**
     * getTeamMediaByYear - Gets a list of Media (videos / pictures) for the given team and year.
    **/
    getTeamMediaByYear(req: operations.GetTeamMediaByYearRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMediaByYearResponse>;
    /**
     * getTeamRobots - Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.
    **/
    getTeamRobots(req: operations.GetTeamRobotsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamRobotsResponse>;
    /**
     * getTeamSimple - Gets a `Team_Simple` object for the team referenced by the given key.
    **/
    getTeamSimple(req: operations.GetTeamSimpleRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamSimpleResponse>;
    /**
     * getTeamSocialMedia - Gets a list of Media (social media) for the given team.
    **/
    getTeamSocialMedia(req: operations.GetTeamSocialMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamSocialMediaResponse>;
    /**
     * getTeamYearsParticipated - Gets a list of years in which the team participated in at least one competition.
    **/
    getTeamYearsParticipated(req: operations.GetTeamYearsParticipatedRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamYearsParticipatedResponse>;
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
