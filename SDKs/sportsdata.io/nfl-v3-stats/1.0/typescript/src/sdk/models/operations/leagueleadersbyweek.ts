import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LeagueLeadersByWeekColumnEnum {
    FantasyPoints = "FantasyPoints",
    PassingYards = "PassingYards",
    RushingYards = "RushingYards",
    Receptions = "Receptions",
    Sacks = "Sacks",
    Interceptions = "Interceptions",
    Touchdowns = "Touchdowns"
}

export enum LeagueLeadersByWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}

export enum LeagueLeadersByWeekPositionEnum {
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


export class LeagueLeadersByWeekPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column" })
  column: LeagueLeadersByWeekColumnEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LeagueLeadersByWeekFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=position" })
  position: LeagueLeadersByWeekPositionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class LeagueLeadersByWeekRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LeagueLeadersByWeekPathParams;
}


export class LeagueLeadersByWeekResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGames?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
