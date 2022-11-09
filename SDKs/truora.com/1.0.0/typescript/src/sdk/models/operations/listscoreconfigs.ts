import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListScoreConfigsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=start_key" })
  startKey?: string;
}


export class ListScoreConfigsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListScoreConfigsQueryParams;
}


export class ListScoreConfigsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scoreConfigsOutput?: shared.ScoreConfigsOutput;

  @Metadata()
  statusCode: number;
}
