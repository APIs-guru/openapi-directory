import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum LeagueLeadersBySeasonColumnEnum {
    FantasyPoints = "FantasyPoints",
    PassingYards = "PassingYards",
    RushingYards = "RushingYards",
    Receptions = "Receptions",
    Sacks = "Sacks",
    Interceptions = "Interceptions",
    Touchdowns = "Touchdowns"
}
export declare enum LeagueLeadersBySeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare enum LeagueLeadersBySeasonPositionEnum {
    All = "ALL",
    Offense = "OFFENSE",
    Qb = "QB",
    Rb = "RB",
    Wr = "WR",
    Te = "TE",
    Defense = "DEFENSE",
    Dl = "DL",
    Lb = "LB",
    Db = "DB",
    K = "K"
}
export declare class LeagueLeadersBySeasonPathParams extends SpeakeasyBase {
    column: LeagueLeadersBySeasonColumnEnum;
    format: LeagueLeadersBySeasonFormatEnum;
    position: LeagueLeadersBySeasonPositionEnum;
    season: string;
}
export declare class LeagueLeadersBySeasonRequest extends SpeakeasyBase {
    pathParams: LeagueLeadersBySeasonPathParams;
}
export declare class LeagueLeadersBySeasonResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: any[];
    statusCode: number;
}
