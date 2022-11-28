import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerSeasonStatsByPlayerFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class PlayerSeasonStatsByPlayerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonStatsByPlayerFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roundid" })
  roundid: string;
}


export class PlayerSeasonStatsByPlayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerSeasonStatsByPlayerPathParams;
}


export class PlayerSeasonStatsByPlayerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasons?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
