import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchBuildStatusServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchBuildStatusPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchBuildStatusSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchBuildStatusRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchBuildStatusPathParams;
    security: FetchBuildStatusSecurity;
}
export declare class FetchBuildStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceBuildBuildStatus?: shared.ServerlessV1ServiceBuildBuildStatus;
}
