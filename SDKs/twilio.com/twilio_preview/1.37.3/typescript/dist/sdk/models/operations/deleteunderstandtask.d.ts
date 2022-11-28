import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteUnderstandTaskServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteUnderstandTaskPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class DeleteUnderstandTaskSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUnderstandTaskRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUnderstandTaskPathParams;
    security: DeleteUnderstandTaskSecurity;
}
export declare class DeleteUnderstandTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
