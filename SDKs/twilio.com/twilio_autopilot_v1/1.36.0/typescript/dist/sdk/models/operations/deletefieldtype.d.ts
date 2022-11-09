import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEFIELDTYPE_SERVERS: string[];
export declare class DeleteFieldTypePathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class DeleteFieldTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteFieldTypeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteFieldTypePathParams;
    security: DeleteFieldTypeSecurity;
}
export declare class DeleteFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
