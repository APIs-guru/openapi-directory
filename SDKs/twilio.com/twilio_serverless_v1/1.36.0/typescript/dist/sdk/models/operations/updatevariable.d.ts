import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEVARIABLE_SERVERS: string[];
export declare class UpdateVariablePathParams extends SpeakeasyBase {
    environmentSid: string;
    serviceSid: string;
    sid: string;
}
export declare class UpdateVariableUpdateVariableRequest extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class UpdateVariableSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateVariableRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateVariablePathParams;
    request?: UpdateVariableUpdateVariableRequest;
    security: UpdateVariableSecurity;
}
export declare class UpdateVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceEnvironmentVariable?: shared.ServerlessV1ServiceEnvironmentVariable;
}
