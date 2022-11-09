import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHEXECUTIONSTEPCONTEXT_SERVERS: string[];
export declare class FetchExecutionStepContextPathParams extends SpeakeasyBase {
    executionSid: string;
    flowSid: string;
    stepSid: string;
}
export declare class FetchExecutionStepContextSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchExecutionStepContextRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchExecutionStepContextPathParams;
    security: FetchExecutionStepContextSecurity;
}
export declare class FetchExecutionStepContextResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV2FlowExecutionExecutionStepExecutionStepContext?: shared.StudioV2FlowExecutionExecutionStepExecutionStepContext;
}
