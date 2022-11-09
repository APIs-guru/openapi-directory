import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LegacyBoxScoresDeltaCurrentWeekFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class LegacyBoxScoresDeltaCurrentWeekPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LegacyBoxScoresDeltaCurrentWeekFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=minutes" })
  minutes: string;
}


export class LegacyBoxScoresDeltaCurrentWeekRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LegacyBoxScoresDeltaCurrentWeekPathParams;
}


export class LegacyBoxScoresDeltaCurrentWeekResponse extends SpeakeasyBase {
  @Metadata()
  boxScores?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
