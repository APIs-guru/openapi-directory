import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class PlayerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;
}


export class PlayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerPathParams;
}


export class PlayerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  player?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
