import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFeedConnectionsHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class CreateFeedConnectionsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateFeedConnectionsRequest extends SpeakeasyBase {
    headers: CreateFeedConnectionsHeaders;
    request: shared.FeedConnections;
    security: CreateFeedConnectionsSecurity;
}
export declare class CreateFeedConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    feedConnections?: shared.FeedConnections;
    statusCode: number;
}
