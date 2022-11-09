import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerGameStatsDeltaFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerGameStatsDeltaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameStatsDeltaFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=minutes" })
  minutes: string;
}


export class PlayerGameStatsDeltaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerGameStatsDeltaPathParams;
}


export class PlayerGameStatsDeltaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGames?: any[];

  @Metadata()
  statusCode: number;
}
