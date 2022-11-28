import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateUnderstandFieldTypeServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateUnderstandFieldTypePathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest extends SpeakeasyBase {
    friendlyName?: string;
    uniqueName?: string;
}
export declare class UpdateUnderstandFieldTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateUnderstandFieldTypeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateUnderstandFieldTypePathParams;
    request?: UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest;
    security: UpdateUnderstandFieldTypeSecurity;
}
export declare class UpdateUnderstandFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantFieldType?: shared.PreviewUnderstandAssistantFieldType;
}
