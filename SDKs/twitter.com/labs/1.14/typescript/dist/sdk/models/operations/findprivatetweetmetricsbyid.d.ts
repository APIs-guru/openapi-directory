import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindPrivateTweetMetricsByIdQueryParams extends SpeakeasyBase {
    ids: string[];
}
export declare class FindPrivateTweetMetricsByIdRequest extends SpeakeasyBase {
    queryParams: FindPrivateTweetMetricsByIdQueryParams;
}
export declare class FindPrivateTweetMetricsByIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    problem?: any;
    statusCode: number;
    tweetMetricsResponse?: shared.TweetMetricsResponse;
}
