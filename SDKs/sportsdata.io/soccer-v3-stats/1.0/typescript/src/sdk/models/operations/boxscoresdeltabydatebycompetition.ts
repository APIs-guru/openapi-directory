import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BoxScoresDeltaByDateByCompetitionFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class BoxScoresDeltaByDateByCompetitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=competition" })
  competition: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoresDeltaByDateByCompetitionFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=minutes" })
  minutes: string;
}


export class BoxScoresDeltaByDateByCompetitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BoxScoresDeltaByDateByCompetitionPathParams;
}


export class BoxScoresDeltaByDateByCompetitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxScores?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
