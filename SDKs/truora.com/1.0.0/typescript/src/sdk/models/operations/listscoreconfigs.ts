import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListScoreConfigsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_key" })
  startKey?: string;
}


export class ListScoreConfigsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListScoreConfigsQueryParams;
}


export class ListScoreConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scoreConfigsOutput?: shared.ScoreConfigsOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
