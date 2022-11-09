import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerGameStatsByPlayerFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerGameStatsByPlayerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameStatsByPlayerFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;
}


export class PlayerGameStatsByPlayerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerGameStatsByPlayerPathParams;
}


export class PlayerGameStatsByPlayerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGame?: any;

  @Metadata()
  statusCode: number;
}
