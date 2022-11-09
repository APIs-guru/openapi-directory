import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEUNDERSTANDTASKACTIONS_SERVERS: string[];
export declare class UpdateUnderstandTaskActionsPathParams extends SpeakeasyBase {
    assistantSid: string;
    taskSid: string;
}
export declare class UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest extends SpeakeasyBase {
    actions?: any;
}
export declare class UpdateUnderstandTaskActionsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateUnderstandTaskActionsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateUnderstandTaskActionsPathParams;
    request?: UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest;
    security: UpdateUnderstandTaskActionsSecurity;
}
export declare class UpdateUnderstandTaskActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantTaskTaskActions?: shared.PreviewUnderstandAssistantTaskTaskActions;
}
