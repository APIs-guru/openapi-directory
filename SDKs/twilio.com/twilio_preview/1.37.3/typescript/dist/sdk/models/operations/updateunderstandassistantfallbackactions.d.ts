import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateUnderstandAssistantFallbackActionsServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateUnderstandAssistantFallbackActionsPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest extends SpeakeasyBase {
    fallbackActions?: any;
}
export declare class UpdateUnderstandAssistantFallbackActionsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateUnderstandAssistantFallbackActionsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateUnderstandAssistantFallbackActionsPathParams;
    request?: UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest;
    security: UpdateUnderstandAssistantFallbackActionsSecurity;
}
export declare class UpdateUnderstandAssistantFallbackActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantAssistantFallbackActions?: shared.PreviewUnderstandAssistantAssistantFallbackActions;
}
