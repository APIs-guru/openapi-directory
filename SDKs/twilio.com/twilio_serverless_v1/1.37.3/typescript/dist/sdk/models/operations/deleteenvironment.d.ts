import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteEnvironmentServerList: readonly ["https://serverless.twilio.com"];
export declare class DeleteEnvironmentPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteEnvironmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteEnvironmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteEnvironmentPathParams;
    security: DeleteEnvironmentSecurity;
}
export declare class DeleteEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
