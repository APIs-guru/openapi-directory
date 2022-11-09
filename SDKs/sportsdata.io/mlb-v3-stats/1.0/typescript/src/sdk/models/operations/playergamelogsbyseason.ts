import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerGameLogsBySeasonFormatEnum {
    Json = "JSON"
,    Xml = "XML"
}


export class PlayerGameLogsBySeasonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameLogsBySeasonFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=numberofgames" })
  numberofgames: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerGameLogsBySeasonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerGameLogsBySeasonPathParams;
}


export class PlayerGameLogsBySeasonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGames?: any[];

  @Metadata()
  statusCode: number;
}
