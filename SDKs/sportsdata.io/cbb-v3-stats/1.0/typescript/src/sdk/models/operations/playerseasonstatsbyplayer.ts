import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerSeasonStatsByPlayerFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerSeasonStatsByPlayerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonStatsByPlayerFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerSeasonStatsByPlayerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerSeasonStatsByPlayerPathParams;
}


export class PlayerSeasonStatsByPlayerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeason?: any;

  @Metadata()
  statusCode: number;
}
