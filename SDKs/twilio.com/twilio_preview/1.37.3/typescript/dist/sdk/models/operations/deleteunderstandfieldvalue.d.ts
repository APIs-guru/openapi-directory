import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteUnderstandFieldValueServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteUnderstandFieldValuePathParams extends SpeakeasyBase {
    assistantSid: string;
    fieldTypeSid: string;
    sid: string;
}
export declare class DeleteUnderstandFieldValueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUnderstandFieldValueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUnderstandFieldValuePathParams;
    security: DeleteUnderstandFieldValueSecurity;
}
export declare class DeleteUnderstandFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
