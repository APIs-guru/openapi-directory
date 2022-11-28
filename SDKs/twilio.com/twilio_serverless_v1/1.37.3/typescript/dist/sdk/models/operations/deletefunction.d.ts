import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteFunctionServerList: readonly ["https://serverless.twilio.com"];
export declare class DeleteFunctionPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteFunctionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteFunctionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteFunctionPathParams;
    security: DeleteFunctionSecurity;
}
export declare class DeleteFunctionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
