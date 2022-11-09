import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHUNDERSTANDASSISTANTINITIATIONACTIONS_SERVERS: string[];
export declare class FetchUnderstandAssistantInitiationActionsPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class FetchUnderstandAssistantInitiationActionsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUnderstandAssistantInitiationActionsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUnderstandAssistantInitiationActionsPathParams;
    security: FetchUnderstandAssistantInitiationActionsSecurity;
}
export declare class FetchUnderstandAssistantInitiationActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantAssistantInitiationActions?: shared.PreviewUnderstandAssistantAssistantInitiationActions;
}
