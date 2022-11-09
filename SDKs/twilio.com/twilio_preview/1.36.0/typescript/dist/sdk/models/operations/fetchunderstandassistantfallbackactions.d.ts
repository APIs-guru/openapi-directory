import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHUNDERSTANDASSISTANTFALLBACKACTIONS_SERVERS: string[];
export declare class FetchUnderstandAssistantFallbackActionsPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class FetchUnderstandAssistantFallbackActionsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUnderstandAssistantFallbackActionsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUnderstandAssistantFallbackActionsPathParams;
    security: FetchUnderstandAssistantFallbackActionsSecurity;
}
export declare class FetchUnderstandAssistantFallbackActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantAssistantFallbackActions?: shared.PreviewUnderstandAssistantAssistantFallbackActions;
}
