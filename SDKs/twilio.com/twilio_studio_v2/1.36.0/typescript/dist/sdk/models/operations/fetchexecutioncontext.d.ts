import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHEXECUTIONCONTEXT_SERVERS: string[];
export declare class FetchExecutionContextPathParams extends SpeakeasyBase {
    executionSid: string;
    flowSid: string;
}
export declare class FetchExecutionContextSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchExecutionContextRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchExecutionContextPathParams;
    security: FetchExecutionContextSecurity;
}
export declare class FetchExecutionContextResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV2FlowExecutionExecutionContext?: shared.StudioV2FlowExecutionExecutionContext;
}
