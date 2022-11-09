import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFeedConnectionsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetFeedConnectionsHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetFeedConnectionsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetFeedConnectionsRequest extends SpeakeasyBase {
    queryParams: GetFeedConnectionsQueryParams;
    headers: GetFeedConnectionsHeaders;
    security: GetFeedConnectionsSecurity;
}
export declare class GetFeedConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    feedConnections?: shared.FeedConnections;
    statusCode: number;
}
