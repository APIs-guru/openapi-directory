import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerDetailsByPlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerDetailsByPlayerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerDetailsByPlayerFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;
}


export class PlayerDetailsByPlayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerDetailsByPlayerPathParams;
}


export class PlayerDetailsByPlayerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  player?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
