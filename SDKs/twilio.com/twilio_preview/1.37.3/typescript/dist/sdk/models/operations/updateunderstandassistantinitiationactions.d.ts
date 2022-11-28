import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateUnderstandAssistantInitiationActionsServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateUnderstandAssistantInitiationActionsPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest extends SpeakeasyBase {
    initiationActions?: any;
}
export declare class UpdateUnderstandAssistantInitiationActionsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateUnderstandAssistantInitiationActionsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateUnderstandAssistantInitiationActionsPathParams;
    request?: UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest;
    security: UpdateUnderstandAssistantInitiationActionsSecurity;
}
export declare class UpdateUnderstandAssistantInitiationActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantAssistantInitiationActions?: shared.PreviewUnderstandAssistantAssistantInitiationActions;
}
