import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUnderstandTaskActionsServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandTaskActionsPathParams extends SpeakeasyBase {
    assistantSid: string;
    taskSid: string;
}
export declare class FetchUnderstandTaskActionsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUnderstandTaskActionsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUnderstandTaskActionsPathParams;
    security: FetchUnderstandTaskActionsSecurity;
}
export declare class FetchUnderstandTaskActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantTaskTaskActions?: shared.PreviewUnderstandAssistantTaskTaskActions;
}
