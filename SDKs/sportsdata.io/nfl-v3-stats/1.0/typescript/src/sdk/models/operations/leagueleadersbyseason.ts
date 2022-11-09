import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LeagueLeadersBySeasonColumnEnum {
    FantasyPoints = "FantasyPoints"
,    PassingYards = "PassingYards"
,    RushingYards = "RushingYards"
,    Receptions = "Receptions"
,    Sacks = "Sacks"
,    Interceptions = "Interceptions"
,    Touchdowns = "Touchdowns"
}

export enum LeagueLeadersBySeasonFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}

export enum LeagueLeadersBySeasonPositionEnum {
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


export class LeagueLeadersBySeasonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column" })
  column: LeagueLeadersBySeasonColumnEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LeagueLeadersBySeasonFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=position" })
  position: LeagueLeadersBySeasonPositionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class LeagueLeadersBySeasonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LeagueLeadersBySeasonPathParams;
}


export class LeagueLeadersBySeasonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasons?: any[];

  @Metadata()
  statusCode: number;
}
