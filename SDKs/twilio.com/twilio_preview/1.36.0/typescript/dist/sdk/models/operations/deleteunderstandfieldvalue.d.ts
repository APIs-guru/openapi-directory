import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEUNDERSTANDFIELDVALUE_SERVERS: string[];
export declare class DeleteUnderstandFieldValuePathParams extends SpeakeasyBase {
    assistantSid: string;
    fieldTypeSid: string;
    sid: string;
}
export declare class DeleteUnderstandFieldValueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUnderstandFieldValueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUnderstandFieldValuePathParams;
    security: DeleteUnderstandFieldValueSecurity;
}
export declare class DeleteUnderstandFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
