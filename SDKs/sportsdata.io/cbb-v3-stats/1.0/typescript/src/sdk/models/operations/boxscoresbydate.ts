import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BoxScoresByDateFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class BoxScoresByDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoresByDateFormatEnum;
}


export class BoxScoresByDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BoxScoresByDatePathParams;
}


export class BoxScoresByDateResponse extends SpeakeasyBase {
  @Metadata()
  boxScores?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
