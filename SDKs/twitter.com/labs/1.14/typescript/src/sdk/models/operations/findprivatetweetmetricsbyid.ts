import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindPrivateTweetMetricsByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids: string[];
}


export class FindPrivateTweetMetricsByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: FindPrivateTweetMetricsByIdQueryParams;
}


export class FindPrivateTweetMetricsByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  problem?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tweetMetricsResponse?: shared.TweetMetricsResponse;
}
