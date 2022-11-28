import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchExecutionStepServerList: readonly ["https://studio.twilio.com"];
export declare class FetchExecutionStepPathParams extends SpeakeasyBase {
    executionSid: string;
    flowSid: string;
    sid: string;
}
export declare class FetchExecutionStepSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchExecutionStepRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchExecutionStepPathParams;
    security: FetchExecutionStepSecurity;
}
export declare class FetchExecutionStepResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV2FlowExecutionExecutionStep?: shared.StudioV2FlowExecutionExecutionStep;
}
