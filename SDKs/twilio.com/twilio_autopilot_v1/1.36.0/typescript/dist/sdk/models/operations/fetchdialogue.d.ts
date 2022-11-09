import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHDIALOGUE_SERVERS: string[];
export declare class FetchDialoguePathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class FetchDialogueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDialogueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchDialoguePathParams;
    security: FetchDialogueSecurity;
}
export declare class FetchDialogueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantDialogue?: shared.AutopilotV1AssistantDialogue;
}
