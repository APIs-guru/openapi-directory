import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHFIELDVALUE_SERVERS: string[];
export declare class FetchFieldValuePathParams extends SpeakeasyBase {
    assistantSid: string;
    fieldTypeSid: string;
    sid: string;
}
export declare class FetchFieldValueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchFieldValueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchFieldValuePathParams;
    security: FetchFieldValueSecurity;
}
export declare class FetchFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantFieldTypeFieldValue?: shared.AutopilotV1AssistantFieldTypeFieldValue;
}
