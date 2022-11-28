import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteUnderstandFieldServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteUnderstandFieldPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
    taskSid: string;
}
export declare class DeleteUnderstandFieldSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUnderstandFieldRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUnderstandFieldPathParams;
    security: DeleteUnderstandFieldSecurity;
}
export declare class DeleteUnderstandFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
