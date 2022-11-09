import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEEXECUTION_SERVERS: string[];
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
