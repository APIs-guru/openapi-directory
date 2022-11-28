import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteFieldServerList: readonly ["https://autopilot.twilio.com"];
export declare class DeleteFieldPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
    taskSid: string;
}
export declare class DeleteFieldSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteFieldRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteFieldPathParams;
    security: DeleteFieldSecurity;
}
export declare class DeleteFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
