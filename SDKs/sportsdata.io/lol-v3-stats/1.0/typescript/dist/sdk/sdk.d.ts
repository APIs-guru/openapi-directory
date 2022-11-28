import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.sportsdata.io", "https://api.sportsdata.io", "http://azure-api.sportsdata.io", "https://azure-api.sportsdata.io"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * areasCountries - Areas (Countries)
     *
     * Areas (Countries)
    **/
    areasCountries(req: operations.AreasCountriesRequest, config?: AxiosRequestConfig): Promise<operations.AreasCountriesResponse>;
    /**
     * boxScore - Box Score
     *
     * Games by Date
    **/
    boxScore(req: operations.BoxScoreRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoreResponse>;
    /**
     * boxScoresByDate - Box Scores by Date
     *
     * Games by Date
    **/
    boxScoresByDate(req: operations.BoxScoresByDateRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresByDateResponse>;
    /**
     * champions - Champions
     *
     * Areas (Countries)
    **/
    champions(req: operations.ChampionsRequest, config?: AxiosRequestConfig): Promise<operations.ChampionsResponse>;
    /**
     * competitionFixturesLeagueDetails - Competition Fixtures (League Details)
     *
     * Competition Fixtures (League Details)
    **/
    competitionFixturesLeagueDetails(req: operations.CompetitionFixturesLeagueDetailsRequest, config?: AxiosRequestConfig): Promise<operations.CompetitionFixturesLeagueDetailsResponse>;
    /**
     * competitionsLeagues - Competitions (Leagues)
     *
     * Competitions (Leagues)
    **/
    competitionsLeagues(req: operations.CompetitionsLeaguesRequest, config?: AxiosRequestConfig): Promise<operations.CompetitionsLeaguesResponse>;
    /**
     * gamesByDate - Games by Date
     *
     * Games by Date
    **/
    gamesByDate(req: operations.GamesByDateRequest, config?: AxiosRequestConfig): Promise<operations.GamesByDateResponse>;
    /**
     * items - Items
     *
     * Competitions (Leagues)
    **/
    items(req: operations.ItemsRequest, config?: AxiosRequestConfig): Promise<operations.ItemsResponse>;
    /**
     * membershipsActive - Memberships (Active)
     *
     * Memberships (Active)
    **/
    membershipsActive(req: operations.MembershipsActiveRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsActiveResponse>;
    /**
     * membershipsByTeamActive - Memberships by Team (Active)
     *
     * Memberships by Team (Active)
    **/
    membershipsByTeamActive(req: operations.MembershipsByTeamActiveRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsByTeamActiveResponse>;
    /**
     * membershipsByTeamHistorical - Memberships by Team (Historical)
     *
     * Memberships by Team (Historical)
    **/
    membershipsByTeamHistorical(req: operations.MembershipsByTeamHistoricalRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsByTeamHistoricalResponse>;
    /**
     * membershipsHistorical - Memberships (Historical)
     *
     * Memberships (Historical)
    **/
    membershipsHistorical(req: operations.MembershipsHistoricalRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsHistoricalResponse>;
    /**
     * player - Player
     *
     * Player
    **/
    player(req: operations.PlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerResponse>;
    /**
     * players - Players
     *
     * Players
    **/
    players(req: operations.PlayersRequest, config?: AxiosRequestConfig): Promise<operations.PlayersResponse>;
    /**
     * playersByTeam - Players by Team
     *
     * Players by Team
    **/
    playersByTeam(req: operations.PlayersByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayersByTeamResponse>;
    /**
     * schedule - Schedule
     *
     * Schedule
    **/
    schedule(req: operations.ScheduleRequest, config?: AxiosRequestConfig): Promise<operations.ScheduleResponse>;
    /**
     * seasonTeams - Season Teams
     *
     * Season Teams
    **/
    seasonTeams(req: operations.SeasonTeamsRequest, config?: AxiosRequestConfig): Promise<operations.SeasonTeamsResponse>;
    /**
     * spells - Spells
     *
     * Areas (Countries)
    **/
    spells(req: operations.SpellsRequest, config?: AxiosRequestConfig): Promise<operations.SpellsResponse>;
    /**
     * standings - Standings
     *
     * Standings
    **/
    standings(req: operations.StandingsRequest, config?: AxiosRequestConfig): Promise<operations.StandingsResponse>;
    /**
     * teams - Teams
     *
     * Teams
    **/
    teams(req: operations.TeamsRequest, config?: AxiosRequestConfig): Promise<operations.TeamsResponse>;
    /**
     * venues - Venues
     *
     * Venues
    **/
    venues(req: operations.VenuesRequest, config?: AxiosRequestConfig): Promise<operations.VenuesResponse>;
}
export {};
