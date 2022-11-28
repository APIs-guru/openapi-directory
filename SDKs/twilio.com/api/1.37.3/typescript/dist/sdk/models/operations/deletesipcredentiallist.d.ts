import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSipCredentialListServerList: readonly ["https://api.twilio.com"];
export declare class DeleteSipCredentialListPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteSipCredentialListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSipCredentialListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSipCredentialListPathParams;
    security: DeleteSipCredentialListSecurity;
}
export declare class DeleteSipCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
