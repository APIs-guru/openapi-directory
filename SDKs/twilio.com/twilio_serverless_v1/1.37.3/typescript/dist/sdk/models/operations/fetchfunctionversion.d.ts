import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchFunctionVersionServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchFunctionVersionPathParams extends SpeakeasyBase {
    functionSid: string;
    serviceSid: string;
    sid: string;
}
export declare class FetchFunctionVersionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchFunctionVersionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchFunctionVersionPathParams;
    security: FetchFunctionVersionSecurity;
}
export declare class FetchFunctionVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceFunctionFunctionVersion?: shared.ServerlessV1ServiceFunctionFunctionVersion;
}
