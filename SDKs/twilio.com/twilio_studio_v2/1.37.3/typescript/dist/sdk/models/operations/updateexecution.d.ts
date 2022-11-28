import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateExecutionServerList: readonly ["https://studio.twilio.com"];
export declare class UpdateExecutionPathParams extends SpeakeasyBase {
    flowSid: string;
    sid: string;
}
export declare class UpdateExecutionUpdateExecutionRequest extends SpeakeasyBase {
    status: shared.ExecutionEnumStatusEnum;
}
export declare class UpdateExecutionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateExecutionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateExecutionPathParams;
    request?: UpdateExecutionUpdateExecutionRequest;
    security: UpdateExecutionSecurity;
}
export declare class UpdateExecutionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV2FlowExecution?: shared.StudioV2FlowExecution;
}
