import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayByPlayFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayByPlayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayByPlayFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gameid" })
  gameid: string;
}


export class PlayByPlayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayByPlayPathParams;
}


export class PlayByPlayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playByPlay?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
