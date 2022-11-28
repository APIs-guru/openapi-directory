import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayByPlayDeltaFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayByPlayDeltaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayByPlayDeltaFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=minutes" })
  minutes: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class PlayByPlayDeltaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayByPlayDeltaPathParams;
}


export class PlayByPlayDeltaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playByPlays?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
