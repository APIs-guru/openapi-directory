import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DailyFantasyScoringFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class DailyFantasyScoringPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: DailyFantasyScoringFormatEnum;
}


export class DailyFantasyScoringRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DailyFantasyScoringPathParams;
}


export class DailyFantasyScoringResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dailyFantasyScorings?: any[];

  @Metadata()
  statusCode: number;
}
