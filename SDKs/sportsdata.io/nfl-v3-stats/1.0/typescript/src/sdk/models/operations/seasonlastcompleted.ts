import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SeasonLastCompletedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class SeasonLastCompletedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SeasonLastCompletedPathParams;
}


export class SeasonLastCompletedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  seasonLastCompleted200ApplicationJsonInteger?: number;

  @Metadata()
  statusCode: number;
}
