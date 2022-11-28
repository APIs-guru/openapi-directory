import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BoxScoreFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class BoxScorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoreFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gameid" })
  gameid: string;
}


export class BoxScoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BoxScorePathParams;
}


export class BoxScoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxScore?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
