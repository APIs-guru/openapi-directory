import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFeedConnectionsHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class DeleteFeedConnectionsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteFeedConnectionsRequest extends SpeakeasyBase {
    headers: DeleteFeedConnectionsHeaders;
    request: shared.FeedConnections;
    security: DeleteFeedConnectionsSecurity;
}
export declare class DeleteFeedConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    feedConnections?: shared.FeedConnections;
    statusCode: number;
}
