import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEUNDERSTANDFIELDTYPE_SERVERS: string[];
export declare class CreateUnderstandFieldTypePathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest extends SpeakeasyBase {
    friendlyName?: string;
    uniqueName: string;
}
export declare class CreateUnderstandFieldTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateUnderstandFieldTypeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateUnderstandFieldTypePathParams;
    request?: CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest;
    security: CreateUnderstandFieldTypeSecurity;
}
export declare class CreateUnderstandFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantFieldType?: shared.PreviewUnderstandAssistantFieldType;
}
