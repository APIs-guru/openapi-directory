import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETECALL_SERVERS: string[];
export declare class DeleteCallPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteCallSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteCallRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteCallPathParams;
    security: DeleteCallSecurity;
}
export declare class DeleteCallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
