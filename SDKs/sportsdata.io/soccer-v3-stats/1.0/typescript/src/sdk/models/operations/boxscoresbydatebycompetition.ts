import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BoxScoresByDateByCompetitionFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class BoxScoresByDateByCompetitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=competition" })
  competition: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoresByDateByCompetitionFormatEnum;
}


export class BoxScoresByDateByCompetitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BoxScoresByDateByCompetitionPathParams;
}


export class BoxScoresByDateByCompetitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxScores?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
