import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WeekLastCompletedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class WeekLastCompletedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WeekLastCompletedPathParams;
}


export class WeekLastCompletedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  weekLastCompleted200ApplicationJsonInteger?: number;
}
