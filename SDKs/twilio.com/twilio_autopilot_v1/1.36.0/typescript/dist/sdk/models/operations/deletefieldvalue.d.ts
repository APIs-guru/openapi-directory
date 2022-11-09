import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEFIELDVALUE_SERVERS: string[];
export declare class DeleteFieldValuePathParams extends SpeakeasyBase {
    assistantSid: string;
    fieldTypeSid: string;
    sid: string;
}
export declare class DeleteFieldValueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteFieldValueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteFieldValuePathParams;
    security: DeleteFieldValueSecurity;
}
export declare class DeleteFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
