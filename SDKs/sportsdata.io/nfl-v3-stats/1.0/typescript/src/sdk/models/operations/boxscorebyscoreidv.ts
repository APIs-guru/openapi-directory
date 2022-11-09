import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BoxScoreByScoreidVFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class BoxScoreByScoreidVPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoreByScoreidVFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scoreid" })
  scoreid: string;
}


export class BoxScoreByScoreidVRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BoxScoreByScoreidVPathParams;
}


export class BoxScoreByScoreidVResponse extends SpeakeasyBase {
  @Metadata()
  boxScoreV3?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
