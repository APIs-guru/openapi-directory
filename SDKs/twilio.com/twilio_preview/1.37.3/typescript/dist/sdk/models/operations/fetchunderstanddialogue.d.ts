import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUnderstandDialogueServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandDialoguePathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class FetchUnderstandDialogueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUnderstandDialogueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUnderstandDialoguePathParams;
    security: FetchUnderstandDialogueSecurity;
}
export declare class FetchUnderstandDialogueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantDialogue?: shared.PreviewUnderstandAssistantDialogue;
}
