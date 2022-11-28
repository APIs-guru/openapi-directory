import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateAssistantServerList: readonly ["https://autopilot.twilio.com"];
export declare class CreateAssistantCreateAssistantRequest extends SpeakeasyBase {
    callbackEvents?: string;
    callbackUrl?: string;
    defaults?: any;
    friendlyName?: string;
    logQueries?: boolean;
    styleSheet?: any;
    uniqueName?: string;
}
export declare class CreateAssistantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateAssistantRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateAssistantCreateAssistantRequest;
    security: CreateAssistantSecurity;
}
export declare class CreateAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1Assistant?: shared.AutopilotV1Assistant;
}
