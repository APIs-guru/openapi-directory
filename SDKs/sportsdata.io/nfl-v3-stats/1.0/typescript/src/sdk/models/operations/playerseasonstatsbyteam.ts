import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerSeasonStatsByTeamFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerSeasonStatsByTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonStatsByTeamFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class PlayerSeasonStatsByTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerSeasonStatsByTeamPathParams;
}


export class PlayerSeasonStatsByTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasons?: any[];

  @Metadata()
  statusCode: number;
}
