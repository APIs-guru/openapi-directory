import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LegacyBoxScoresDeltaCurrentWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class LegacyBoxScoresDeltaCurrentWeekPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LegacyBoxScoresDeltaCurrentWeekFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=minutes" })
  minutes: string;
}


export class LegacyBoxScoresDeltaCurrentWeekRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LegacyBoxScoresDeltaCurrentWeekPathParams;
}


export class LegacyBoxScoresDeltaCurrentWeekResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxScores?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
