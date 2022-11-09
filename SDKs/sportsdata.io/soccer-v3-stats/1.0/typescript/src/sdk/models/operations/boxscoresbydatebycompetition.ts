import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BoxScoresByDateByCompetitionFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class BoxScoresByDateByCompetitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=competition" })
  competition: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoresByDateByCompetitionFormatEnum;
}


export class BoxScoresByDateByCompetitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BoxScoresByDateByCompetitionPathParams;
}


export class BoxScoresByDateByCompetitionResponse extends SpeakeasyBase {
  @Metadata()
  boxScores?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
