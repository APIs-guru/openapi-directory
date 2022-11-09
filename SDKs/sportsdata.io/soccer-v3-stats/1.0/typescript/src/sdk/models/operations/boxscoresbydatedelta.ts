import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BoxScoresByDateDeltaFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class BoxScoresByDateDeltaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoresByDateDeltaFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=minutes" })
  minutes: string;
}


export class BoxScoresByDateDeltaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BoxScoresByDateDeltaPathParams;
}


export class BoxScoresByDateDeltaResponse extends SpeakeasyBase {
  @Metadata()
  boxScores?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
