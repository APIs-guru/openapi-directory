import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindPrivateTweetMetricsByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids: string[];
}


export class FindPrivateTweetMetricsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FindPrivateTweetMetricsByIdQueryParams;
}


export class FindPrivateTweetMetricsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  problem?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tweetMetricsResponse?: shared.TweetMetricsResponse;
}
