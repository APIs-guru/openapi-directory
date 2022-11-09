import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHFIELDTYPE_SERVERS: string[];
export declare class FetchFieldTypePathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class FetchFieldTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchFieldTypeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchFieldTypePathParams;
    security: FetchFieldTypeSecurity;
}
export declare class FetchFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantFieldType?: shared.AutopilotV1AssistantFieldType;
}
