import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchStepContextServerList: readonly ["https://studio.twilio.com"];
export declare class FetchStepContextPathParams extends SpeakeasyBase {
    engagementSid: string;
    flowSid: string;
    stepSid: string;
}
export declare class FetchStepContextSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchStepContextRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchStepContextPathParams;
    security: FetchStepContextSecurity;
}
export declare class FetchStepContextResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV1FlowEngagementStepStepContext?: shared.StudioV1FlowEngagementStepStepContext;
}
