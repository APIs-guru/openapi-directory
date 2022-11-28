import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchFunctionServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchFunctionPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchFunctionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchFunctionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchFunctionPathParams;
    security: FetchFunctionSecurity;
}
export declare class FetchFunctionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceFunction?: shared.ServerlessV1ServiceFunction;
}
