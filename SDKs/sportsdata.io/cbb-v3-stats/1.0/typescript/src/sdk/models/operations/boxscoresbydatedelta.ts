import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BoxScoresByDateDeltaFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class BoxScoresByDateDeltaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoresByDateDeltaFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=minutes" })
  minutes: string;
}


export class BoxScoresByDateDeltaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BoxScoresByDateDeltaPathParams;
}


export class BoxScoresByDateDeltaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxScores?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
