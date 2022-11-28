import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DailyFantasyScoringFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class DailyFantasyScoringPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: DailyFantasyScoringFormatEnum;
}


export class DailyFantasyScoringRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DailyFantasyScoringPathParams;
}


export class DailyFantasyScoringResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dailyFantasyScorings?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
