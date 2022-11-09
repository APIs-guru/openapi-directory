import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEUNDERSTANDFIELDTYPE_SERVERS: string[];
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
