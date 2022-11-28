import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BoxScoreByScoreidVFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class BoxScoreByScoreidVPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoreByScoreidVFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scoreid" })
  scoreid: string;
}


export class BoxScoreByScoreidVRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BoxScoreByScoreidVPathParams;
}


export class BoxScoreByScoreidVResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxScoreV3?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
