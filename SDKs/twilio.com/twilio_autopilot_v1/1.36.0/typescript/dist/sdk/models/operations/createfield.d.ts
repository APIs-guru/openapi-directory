import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEFIELD_SERVERS: string[];
export declare class CreateFieldPathParams extends SpeakeasyBase {
    assistantSid: string;
    taskSid: string;
}
export declare class CreateFieldCreateFieldRequest extends SpeakeasyBase {
    fieldType: string;
    uniqueName: string;
}
export declare class CreateFieldSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateFieldRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateFieldPathParams;
    request?: CreateFieldCreateFieldRequest;
    security: CreateFieldSecurity;
}
export declare class CreateFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantTaskField?: shared.AutopilotV1AssistantTaskField;
}
