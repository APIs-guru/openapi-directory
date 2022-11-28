import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateRestoreAssistantServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateRestoreAssistantUpdateRestoreAssistantRequest extends SpeakeasyBase {
    assistant: string;
}
export declare class UpdateRestoreAssistantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateRestoreAssistantRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: UpdateRestoreAssistantUpdateRestoreAssistantRequest;
    security: UpdateRestoreAssistantSecurity;
}
export declare class UpdateRestoreAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1RestoreAssistant?: shared.AutopilotV1RestoreAssistant;
}
