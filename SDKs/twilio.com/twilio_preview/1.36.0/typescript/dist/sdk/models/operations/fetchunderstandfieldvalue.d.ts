import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHUNDERSTANDFIELDVALUE_SERVERS: string[];
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
