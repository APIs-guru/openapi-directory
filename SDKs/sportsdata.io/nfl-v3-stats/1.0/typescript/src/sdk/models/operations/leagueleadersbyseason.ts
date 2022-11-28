import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LeagueLeadersBySeasonColumnEnum {
    FantasyPoints = "FantasyPoints",
    PassingYards = "PassingYards",
    RushingYards = "RushingYards",
    Receptions = "Receptions",
    Sacks = "Sacks",
    Interceptions = "Interceptions",
    Touchdowns = "Touchdowns"
}

export enum LeagueLeadersBySeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}

export enum LeagueLeadersBySeasonPositionEnum {
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


export class LeagueLeadersBySeasonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column" })
  column: LeagueLeadersBySeasonColumnEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LeagueLeadersBySeasonFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=position" })
  position: LeagueLeadersBySeasonPositionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class LeagueLeadersBySeasonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LeagueLeadersBySeasonPathParams;
}


export class LeagueLeadersBySeasonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasons?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
