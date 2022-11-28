import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateServiceServerList: readonly ["https://serverless.twilio.com"];
export declare class UpdateServicePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
    friendlyName?: string;
    includeCredentials?: boolean;
    uiEditable?: boolean;
}
export declare class UpdateServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateServicePathParams;
    request?: UpdateServiceUpdateServiceRequest;
    security: UpdateServiceSecurity;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1Service?: shared.ServerlessV1Service;
}
