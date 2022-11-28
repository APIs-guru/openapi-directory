import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteVariableServerList: readonly ["https://serverless.twilio.com"];
export declare class DeleteVariablePathParams extends SpeakeasyBase {
    environmentSid: string;
    serviceSid: string;
    sid: string;
}
export declare class DeleteVariableSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteVariableRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteVariablePathParams;
    security: DeleteVariableSecurity;
}
export declare class DeleteVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
