import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BoxScoreVFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class BoxScoreVPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoreVFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hometeam" })
  hometeam: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class BoxScoreVRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BoxScoreVPathParams;
}


export class BoxScoreVResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxScoreV3?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
