import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUnderstandAssistantFallbackActionsServerList: readonly ["https://preview.twilio.com"];
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
