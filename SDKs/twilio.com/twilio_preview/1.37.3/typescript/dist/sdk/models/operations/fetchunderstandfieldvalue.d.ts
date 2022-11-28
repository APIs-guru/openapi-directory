import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUnderstandFieldValueServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandFieldValuePathParams extends SpeakeasyBase {
    assistantSid: string;
    fieldTypeSid: string;
    sid: string;
}
export declare class FetchUnderstandFieldValueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUnderstandFieldValueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUnderstandFieldValuePathParams;
    security: FetchUnderstandFieldValueSecurity;
}
export declare class FetchUnderstandFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantFieldTypeFieldValue?: shared.PreviewUnderstandAssistantFieldTypeFieldValue;
}
