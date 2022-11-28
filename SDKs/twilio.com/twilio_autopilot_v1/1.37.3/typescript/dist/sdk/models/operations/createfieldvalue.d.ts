import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateFieldValueServerList: readonly ["https://autopilot.twilio.com"];
export declare class CreateFieldValuePathParams extends SpeakeasyBase {
    assistantSid: string;
    fieldTypeSid: string;
}
export declare class CreateFieldValueCreateFieldValueRequest extends SpeakeasyBase {
    language: string;
    synonymOf?: string;
    value: string;
}
export declare class CreateFieldValueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateFieldValueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateFieldValuePathParams;
    request?: CreateFieldValueCreateFieldValueRequest;
    security: CreateFieldValueSecurity;
}
export declare class CreateFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantFieldTypeFieldValue?: shared.AutopilotV1AssistantFieldTypeFieldValue;
}
