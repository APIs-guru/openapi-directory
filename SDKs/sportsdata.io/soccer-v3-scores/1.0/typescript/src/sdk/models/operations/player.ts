import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class PlayerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;
}


export class PlayerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerPathParams;
}


export class PlayerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  player?: any;

  @Metadata()
  statusCode: number;
}
