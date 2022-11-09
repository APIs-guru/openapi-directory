import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum LeagueLeadersByWeekColumnEnum {
    FantasyPoints = "FantasyPoints",
    PassingYards = "PassingYards",
    RushingYards = "RushingYards",
    Receptions = "Receptions",
    Sacks = "Sacks",
    Interceptions = "Interceptions",
    Touchdowns = "Touchdowns"
}
export declare enum LeagueLeadersByWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare enum LeagueLeadersByWeekPositionEnum {
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
export declare class LeagueLeadersByWeekPathParams extends SpeakeasyBase {
    column: LeagueLeadersByWeekColumnEnum;
    format: LeagueLeadersByWeekFormatEnum;
    position: LeagueLeadersByWeekPositionEnum;
    season: string;
    week: string;
}
export declare class LeagueLeadersByWeekRequest extends SpeakeasyBase {
    pathParams: LeagueLeadersByWeekPathParams;
}
export declare class LeagueLeadersByWeekResponse extends SpeakeasyBase {
    contentType: string;
    playerGames?: any[];
    statusCode: number;
}
