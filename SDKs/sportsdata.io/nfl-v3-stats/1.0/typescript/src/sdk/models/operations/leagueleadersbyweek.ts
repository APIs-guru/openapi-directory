import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LeagueLeadersByWeekColumnEnum {
    FantasyPoints = "FantasyPoints"
,    PassingYards = "PassingYards"
,    RushingYards = "RushingYards"
,    Receptions = "Receptions"
,    Sacks = "Sacks"
,    Interceptions = "Interceptions"
,    Touchdowns = "Touchdowns"
}

export enum LeagueLeadersByWeekFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}

export enum LeagueLeadersByWeekPositionEnum {
    All = "ALL"
,    Offense = "OFFENSE"
,    Qb = "QB"
,    Rb = "RB"
,    Wr = "WR"
,    Te = "TE"
,    Defense = "DEFENSE"
,    Dl = "DL"
,    Lb = "LB"
,    Db = "DB"
,    K = "K"
}


export class LeagueLeadersByWeekPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column" })
  column: LeagueLeadersByWeekColumnEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LeagueLeadersByWeekFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=position" })
  position: LeagueLeadersByWeekPositionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class LeagueLeadersByWeekRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LeagueLeadersByWeekPathParams;
}


export class LeagueLeadersByWeekResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGames?: any[];

  @Metadata()
  statusCode: number;
}
