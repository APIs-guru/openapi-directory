import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEFIELDTYPE_SERVERS: string[];
export declare class CreateFieldTypePathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class CreateFieldTypeCreateFieldTypeRequest extends SpeakeasyBase {
    friendlyName?: string;
    uniqueName: string;
}
export declare class CreateFieldTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateFieldTypeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateFieldTypePathParams;
    request?: CreateFieldTypeCreateFieldTypeRequest;
    security: CreateFieldTypeSecurity;
}
export declare class CreateFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantFieldType?: shared.AutopilotV1AssistantFieldType;
}
