import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LegacyBoxScoresDeltaFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class LegacyBoxScoresDeltaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LegacyBoxScoresDeltaFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=minutes" })
  minutes: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class LegacyBoxScoresDeltaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LegacyBoxScoresDeltaPathParams;
}


export class LegacyBoxScoresDeltaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxScores?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
