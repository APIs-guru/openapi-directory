import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEUNDERSTANDFIELDVALUE_SERVERS: string[];
export declare class CreateUnderstandFieldValuePathParams extends SpeakeasyBase {
    assistantSid: string;
    fieldTypeSid: string;
}
export declare class CreateUnderstandFieldValueCreateUnderstandFieldValueRequest extends SpeakeasyBase {
    language: string;
    synonymOf?: string;
    value: string;
}
export declare class CreateUnderstandFieldValueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateUnderstandFieldValueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateUnderstandFieldValuePathParams;
    request?: CreateUnderstandFieldValueCreateUnderstandFieldValueRequest;
    security: CreateUnderstandFieldValueSecurity;
}
export declare class CreateUnderstandFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantFieldTypeFieldValue?: shared.PreviewUnderstandAssistantFieldTypeFieldValue;
}
