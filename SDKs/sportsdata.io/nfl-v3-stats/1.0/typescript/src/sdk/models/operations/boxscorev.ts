import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BoxScoreVFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class BoxScoreVPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoreVFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=hometeam" })
  hometeam: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class BoxScoreVRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BoxScoreVPathParams;
}


export class BoxScoreVResponse extends SpeakeasyBase {
  @Metadata()
  boxScoreV3?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
