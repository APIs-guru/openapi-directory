import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEFUNCTION_SERVERS: string[];
export declare class CreateFunctionPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateFunctionCreateFunctionRequest extends SpeakeasyBase {
    friendlyName: string;
}
export declare class CreateFunctionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateFunctionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateFunctionPathParams;
    request?: CreateFunctionCreateFunctionRequest;
    security: CreateFunctionSecurity;
}
export declare class CreateFunctionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceFunction?: shared.ServerlessV1ServiceFunction;
}
