import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFeedConnectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFeedConnectionHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetFeedConnectionSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetFeedConnectionRequest extends SpeakeasyBase {
    pathParams: GetFeedConnectionPathParams;
    headers: GetFeedConnectionHeaders;
    security: GetFeedConnectionSecurity;
}
export declare class GetFeedConnectionResponse extends SpeakeasyBase {
    contentType: string;
    feedConnection?: shared.FeedConnection;
    statusCode: number;
}
