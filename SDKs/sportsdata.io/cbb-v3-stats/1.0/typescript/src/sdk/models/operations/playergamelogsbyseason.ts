import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerGameLogsBySeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerGameLogsBySeasonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameLogsBySeasonFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=numberofgames" })
  numberofgames: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerGameLogsBySeasonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerGameLogsBySeasonPathParams;
}


export class PlayerGameLogsBySeasonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGames?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
