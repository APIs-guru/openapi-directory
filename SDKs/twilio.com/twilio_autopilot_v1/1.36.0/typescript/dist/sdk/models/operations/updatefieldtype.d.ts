import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEFIELDTYPE_SERVERS: string[];
export declare class UpdateFieldTypePathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class UpdateFieldTypeUpdateFieldTypeRequest extends SpeakeasyBase {
    friendlyName?: string;
    uniqueName?: string;
}
export declare class UpdateFieldTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateFieldTypeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateFieldTypePathParams;
    request?: UpdateFieldTypeUpdateFieldTypeRequest;
    security: UpdateFieldTypeSecurity;
}
export declare class UpdateFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantFieldType?: shared.AutopilotV1AssistantFieldType;
}
