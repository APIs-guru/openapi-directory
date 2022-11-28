import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScoresBySeasonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ScoresBySeasonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ScoresBySeasonPathParams;
}


export class ScoresBySeasonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scores?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
