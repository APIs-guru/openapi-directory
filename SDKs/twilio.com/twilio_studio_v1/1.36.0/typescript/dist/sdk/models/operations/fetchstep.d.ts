import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSTEP_SERVERS: string[];
export declare class FetchStepPathParams extends SpeakeasyBase {
    engagementSid: string;
    flowSid: string;
    sid: string;
}
export declare class FetchStepSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchStepRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchStepPathParams;
    security: FetchStepSecurity;
}
export declare class FetchStepResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV1FlowEngagementStep?: shared.StudioV1FlowEngagementStep;
}
