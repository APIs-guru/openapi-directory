import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayByPlayDeltaFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayByPlayDeltaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayByPlayDeltaFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=minutes" })
  minutes: string;
}


export class PlayByPlayDeltaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayByPlayDeltaPathParams;
}


export class PlayByPlayDeltaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playByPlays?: any[];

  @Metadata()
  statusCode: number;
}
