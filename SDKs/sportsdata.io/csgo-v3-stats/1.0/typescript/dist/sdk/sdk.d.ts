import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Areas (Countries)
    **/
    AreasCountries(req: operations.AreasCountriesRequest, config?: AxiosRequestConfig): Promise<operations.AreasCountriesResponse>;
    /**
     * Box Scores by Date
    **/
    BoxScore(req: operations.BoxScoreRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoreResponse>;
    /**
     * Box Scores by Date
    **/
    BoxScoresByDate(req: operations.BoxScoresByDateRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresByDateResponse>;
    /**
     * Competition Fixtures (League Details)
    **/
    CompetitionFixturesLeagueDetails(req: operations.CompetitionFixturesLeagueDetailsRequest, config?: AxiosRequestConfig): Promise<operations.CompetitionFixturesLeagueDetailsResponse>;
    /**
     * Competitions (Leagues)
    **/
    CompetitionsLeagues(req: operations.CompetitionsLeaguesRequest, config?: AxiosRequestConfig): Promise<operations.CompetitionsLeaguesResponse>;
    /**
     * Games by Date
    **/
    GamesByDate(req: operations.GamesByDateRequest, config?: AxiosRequestConfig): Promise<operations.GamesByDateResponse>;
    /**
     * Memberships (Active)
    **/
    MembershipsActive(req: operations.MembershipsActiveRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsActiveResponse>;
    /**
     * Memberships by Team (Active)
    **/
    MembershipsByTeamActive(req: operations.MembershipsByTeamActiveRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsByTeamActiveResponse>;
    /**
     * Memberships by Team (Historical)
    **/
    MembershipsByTeamHistorical(req: operations.MembershipsByTeamHistoricalRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsByTeamHistoricalResponse>;
    /**
     * Memberships (Historical)
    **/
    MembershipsHistorical(req: operations.MembershipsHistoricalRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsHistoricalResponse>;
    /**
     * Player
    **/
    Player(req: operations.PlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerResponse>;
    /**
     * Players
    **/
    Players(req: operations.PlayersRequest, config?: AxiosRequestConfig): Promise<operations.PlayersResponse>;
    /**
     * Players by Team
    **/
    PlayersByTeam(req: operations.PlayersByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayersByTeamResponse>;
    /**
     * Schedule
    **/
    Schedule(req: operations.ScheduleRequest, config?: AxiosRequestConfig): Promise<operations.ScheduleResponse>;
    /**
     * Season Teams
    **/
    SeasonTeams(req: operations.SeasonTeamsRequest, config?: AxiosRequestConfig): Promise<operations.SeasonTeamsResponse>;
    /**
     * Schedule
    **/
    Standings(req: operations.StandingsRequest, config?: AxiosRequestConfig): Promise<operations.StandingsResponse>;
    /**
     * Teams
    **/
    Teams(req: operations.TeamsRequest, config?: AxiosRequestConfig): Promise<operations.TeamsResponse>;
    /**
     * Venues
    **/
    Venues(req: operations.VenuesRequest, config?: AxiosRequestConfig): Promise<operations.VenuesResponse>;
}
export {};
