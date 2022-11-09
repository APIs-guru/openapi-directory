import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScoresByWeekPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class ScoresByWeekRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ScoresByWeekPathParams;
}


export class ScoresByWeekResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scores?: any[];

  @Metadata()
  statusCode: number;
}
