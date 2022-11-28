import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScoresByWeekPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class ScoresByWeekRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ScoresByWeekPathParams;
}


export class ScoresByWeekResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scores?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
