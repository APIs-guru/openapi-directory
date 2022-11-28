import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateUnderstandFieldServerList: readonly ["https://preview.twilio.com"];
export declare class CreateUnderstandFieldPathParams extends SpeakeasyBase {
    assistantSid: string;
    taskSid: string;
}
export declare class CreateUnderstandFieldCreateUnderstandFieldRequest extends SpeakeasyBase {
    fieldType: string;
    uniqueName: string;
}
export declare class CreateUnderstandFieldSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateUnderstandFieldRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateUnderstandFieldPathParams;
    request?: CreateUnderstandFieldCreateUnderstandFieldRequest;
    security: CreateUnderstandFieldSecurity;
}
export declare class CreateUnderstandFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantTaskField?: shared.PreviewUnderstandAssistantTaskField;
}
