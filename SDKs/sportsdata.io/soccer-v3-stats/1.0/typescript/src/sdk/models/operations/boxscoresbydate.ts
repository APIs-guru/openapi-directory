import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BoxScoresByDateFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class BoxScoresByDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoresByDateFormatEnum;
}


export class BoxScoresByDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BoxScoresByDatePathParams;
}


export class BoxScoresByDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxScores?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
