import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayByPlayFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayByPlayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayByPlayFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=gameid" })
  gameid: string;
}


export class PlayByPlayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayByPlayPathParams;
}


export class PlayByPlayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playByPlay?: any;

  @Metadata()
  statusCode: number;
}
