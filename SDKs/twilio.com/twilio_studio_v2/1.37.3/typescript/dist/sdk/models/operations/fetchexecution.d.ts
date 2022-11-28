import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchExecutionServerList: readonly ["https://studio.twilio.com"];
export declare class FetchExecutionPathParams extends SpeakeasyBase {
    flowSid: string;
    sid: string;
}
export declare class FetchExecutionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchExecutionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchExecutionPathParams;
    security: FetchExecutionSecurity;
}
export declare class FetchExecutionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV2FlowExecution?: shared.StudioV2FlowExecution;
}
