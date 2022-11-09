import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScoresBySeasonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ScoresBySeasonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ScoresBySeasonPathParams;
}


export class ScoresBySeasonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scores?: any[];

  @Metadata()
  statusCode: number;
}
