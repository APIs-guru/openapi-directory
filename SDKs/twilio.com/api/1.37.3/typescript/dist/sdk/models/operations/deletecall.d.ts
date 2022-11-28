import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteCallServerList: readonly ["https://api.twilio.com"];
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
