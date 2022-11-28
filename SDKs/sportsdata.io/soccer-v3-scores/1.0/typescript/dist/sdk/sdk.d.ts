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
    **/
    areasCountries(req: operations.AreasCountriesRequest, config?: AxiosRequestConfig): Promise<operations.AreasCountriesResponse>;
    /**
     * canceledMemberships - Canceled Memberships
    **/
    canceledMemberships(req: operations.CanceledMembershipsRequest, config?: AxiosRequestConfig): Promise<operations.CanceledMembershipsResponse>;
    /**
     * competitionFixturesLeagueDetails - Competition Fixtures (League Details)
    **/
    competitionFixturesLeagueDetails(req: operations.CompetitionFixturesLeagueDetailsRequest, config?: AxiosRequestConfig): Promise<operations.CompetitionFixturesLeagueDetailsResponse>;
    /**
     * competitionHierarchyLeagueHierarchy - Competition Hierarchy (League Hierarchy)
    **/
    competitionHierarchyLeagueHierarchy(req: operations.CompetitionHierarchyLeagueHierarchyRequest, config?: AxiosRequestConfig): Promise<operations.CompetitionHierarchyLeagueHierarchyResponse>;
    /**
     * competitionsLeagues - Competitions (Leagues)
    **/
    competitionsLeagues(req: operations.CompetitionsLeaguesRequest, config?: AxiosRequestConfig): Promise<operations.CompetitionsLeaguesResponse>;
    /**
     * gamesByDate - Games by Date
    **/
    gamesByDate(req: operations.GamesByDateRequest, config?: AxiosRequestConfig): Promise<operations.GamesByDateResponse>;
    /**
     * membershipsActive - Memberships (Active)
    **/
    membershipsActive(req: operations.MembershipsActiveRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsActiveResponse>;
    /**
     * membershipsByCompetitionActive - Memberships by Competition (Active)
    **/
    membershipsByCompetitionActive(req: operations.MembershipsByCompetitionActiveRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsByCompetitionActiveResponse>;
    /**
     * membershipsByCompetitionHistorical - Memberships by Competition (Historical)
    **/
    membershipsByCompetitionHistorical(req: operations.MembershipsByCompetitionHistoricalRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsByCompetitionHistoricalResponse>;
    /**
     * membershipsByTeamActive - Memberships by Team (Active)
    **/
    membershipsByTeamActive(req: operations.MembershipsByTeamActiveRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsByTeamActiveResponse>;
    /**
     * membershipsByTeamHistorical - Memberships by Team (Historical)
    **/
    membershipsByTeamHistorical(req: operations.MembershipsByTeamHistoricalRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsByTeamHistoricalResponse>;
    /**
     * membershipsHistorical - Memberships (Historical)
    **/
    membershipsHistorical(req: operations.MembershipsHistoricalRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsHistoricalResponse>;
    /**
     * membershipsRecentlyChanged - Memberships (Recently Changed)
    **/
    membershipsRecentlyChanged(req: operations.MembershipsRecentlyChangedRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsRecentlyChangedResponse>;
    /**
     * player - Player
    **/
    player(req: operations.PlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerResponse>;
    /**
     * players - Players
    **/
    players(req: operations.PlayersRequest, config?: AxiosRequestConfig): Promise<operations.PlayersResponse>;
    /**
     * playersByTeam - Players by Team
    **/
    playersByTeam(req: operations.PlayersByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayersByTeamResponse>;
    /**
     * schedule - Schedule
    **/
    schedule(req: operations.ScheduleRequest, config?: AxiosRequestConfig): Promise<operations.ScheduleResponse>;
    /**
     * seasonTeams - Season Teams
    **/
    seasonTeams(req: operations.SeasonTeamsRequest, config?: AxiosRequestConfig): Promise<operations.SeasonTeamsResponse>;
    /**
     * standings - Standings
    **/
    standings(req: operations.StandingsRequest, config?: AxiosRequestConfig): Promise<operations.StandingsResponse>;
    /**
     * teamGameStatsByDate - Team Game Stats by Date
    **/
    teamGameStatsByDate(req: operations.TeamGameStatsByDateRequest, config?: AxiosRequestConfig): Promise<operations.TeamGameStatsByDateResponse>;
    /**
     * teamSeasonStats - Team Season Stats
    **/
    teamSeasonStats(req: operations.TeamSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.TeamSeasonStatsResponse>;
    /**
     * teams - Teams
    **/
    teams(req: operations.TeamsRequest, config?: AxiosRequestConfig): Promise<operations.TeamsResponse>;
    /**
     * upcomingScheduleByPlayer - Upcoming Schedule By Player
    **/
    upcomingScheduleByPlayer(req: operations.UpcomingScheduleByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.UpcomingScheduleByPlayerResponse>;
    /**
     * venues - Venues
    **/
    venues(req: operations.VenuesRequest, config?: AxiosRequestConfig): Promise<operations.VenuesResponse>;
}
export {};
