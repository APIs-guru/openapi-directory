import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEFUNCTION_SERVERS: string[];
export declare class UpdateFunctionPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class UpdateFunctionUpdateFunctionRequest extends SpeakeasyBase {
    friendlyName: string;
}
export declare class UpdateFunctionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateFunctionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateFunctionPathParams;
    request?: UpdateFunctionUpdateFunctionRequest;
    security: UpdateFunctionSecurity;
}
export declare class UpdateFunctionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceFunction?: shared.ServerlessV1ServiceFunction;
}
