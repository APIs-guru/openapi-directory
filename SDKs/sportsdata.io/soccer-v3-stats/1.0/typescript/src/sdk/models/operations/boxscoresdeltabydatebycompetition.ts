import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BoxScoresDeltaByDateByCompetitionFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class BoxScoresDeltaByDateByCompetitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=competition" })
  competition: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoresDeltaByDateByCompetitionFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=minutes" })
  minutes: string;
}


export class BoxScoresDeltaByDateByCompetitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BoxScoresDeltaByDateByCompetitionPathParams;
}


export class BoxScoresDeltaByDateByCompetitionResponse extends SpeakeasyBase {
  @Metadata()
  boxScores?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
