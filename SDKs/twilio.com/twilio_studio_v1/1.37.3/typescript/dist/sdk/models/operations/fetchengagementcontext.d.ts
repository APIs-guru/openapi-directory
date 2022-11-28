import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchEngagementContextServerList: readonly ["https://studio.twilio.com"];
export declare class FetchEngagementContextPathParams extends SpeakeasyBase {
    engagementSid: string;
    flowSid: string;
}
export declare class FetchEngagementContextSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchEngagementContextRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchEngagementContextPathParams;
    security: FetchEngagementContextSecurity;
}
export declare class FetchEngagementContextResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV1FlowEngagementEngagementContext?: shared.StudioV1FlowEngagementEngagementContext;
}
