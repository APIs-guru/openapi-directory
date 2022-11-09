import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerDetailsByPlayerFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerDetailsByPlayerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerDetailsByPlayerFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;
}


export class PlayerDetailsByPlayerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerDetailsByPlayerPathParams;
}


export class PlayerDetailsByPlayerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  player?: any;

  @Metadata()
  statusCode: number;
}
