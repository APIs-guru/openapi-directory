import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BoxScoreFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class BoxScorePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoreFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=gameid" })
  gameid: string;
}


export class BoxScoreRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BoxScorePathParams;
}


export class BoxScoreResponse extends SpeakeasyBase {
  @Metadata()
  boxScores?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
