import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateUnderstandTaskServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateUnderstandTaskPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class UpdateUnderstandTaskUpdateUnderstandTaskRequest extends SpeakeasyBase {
    actions?: any;
    actionsUrl?: string;
    friendlyName?: string;
    uniqueName?: string;
}
export declare class UpdateUnderstandTaskSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateUnderstandTaskRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateUnderstandTaskPathParams;
    request?: UpdateUnderstandTaskUpdateUnderstandTaskRequest;
    security: UpdateUnderstandTaskSecurity;
}
export declare class UpdateUnderstandTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantTask?: shared.PreviewUnderstandAssistantTask;
}
