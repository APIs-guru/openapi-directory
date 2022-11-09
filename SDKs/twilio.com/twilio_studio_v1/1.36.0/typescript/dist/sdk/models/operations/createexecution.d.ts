import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEEXECUTION_SERVERS: string[];
export declare class CreateExecutionPathParams extends SpeakeasyBase {
    flowSid: string;
}
export declare class CreateExecutionCreateExecutionRequest extends SpeakeasyBase {
    from: string;
    parameters?: any;
    to: string;
}
export declare class CreateExecutionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateExecutionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateExecutionPathParams;
    request?: CreateExecutionCreateExecutionRequest;
    security: CreateExecutionSecurity;
}
export declare class CreateExecutionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV1FlowExecution?: shared.StudioV1FlowExecution;
}
