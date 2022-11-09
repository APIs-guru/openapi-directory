import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LegacyBoxScoresDeltaFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class LegacyBoxScoresDeltaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LegacyBoxScoresDeltaFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=minutes" })
  minutes: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class LegacyBoxScoresDeltaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LegacyBoxScoresDeltaPathParams;
}


export class LegacyBoxScoresDeltaResponse extends SpeakeasyBase {
  @Metadata()
  boxScores?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
