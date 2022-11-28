import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteCredentialListServerList: readonly ["https://trunking.twilio.com"];
export declare class DeleteCredentialListPathParams extends SpeakeasyBase {
    sid: string;
    trunkSid: string;
}
export declare class DeleteCredentialListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteCredentialListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteCredentialListPathParams;
    security: DeleteCredentialListSecurity;
}
export declare class DeleteCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
