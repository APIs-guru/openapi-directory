import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHENGAGEMENT_SERVERS: string[];
export declare class FetchEngagementPathParams extends SpeakeasyBase {
    flowSid: string;
    sid: string;
}
export declare class FetchEngagementSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchEngagementRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchEngagementPathParams;
    security: FetchEngagementSecurity;
}
export declare class FetchEngagementResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV1FlowEngagement?: shared.StudioV1FlowEngagement;
}
