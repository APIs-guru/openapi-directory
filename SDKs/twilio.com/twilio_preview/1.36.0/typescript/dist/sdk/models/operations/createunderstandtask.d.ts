import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEUNDERSTANDTASK_SERVERS: string[];
export declare class CreateUnderstandTaskPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class CreateUnderstandTaskCreateUnderstandTaskRequest extends SpeakeasyBase {
    actions?: any;
    actionsUrl?: string;
    friendlyName?: string;
    uniqueName: string;
}
export declare class CreateUnderstandTaskSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateUnderstandTaskRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateUnderstandTaskPathParams;
    request?: CreateUnderstandTaskCreateUnderstandTaskRequest;
    security: CreateUnderstandTaskSecurity;
}
export declare class CreateUnderstandTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantTask?: shared.PreviewUnderstandAssistantTask;
}
