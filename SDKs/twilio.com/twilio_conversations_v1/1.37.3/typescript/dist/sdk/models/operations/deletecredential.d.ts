import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteCredentialServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteCredentialPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteCredentialSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteCredentialRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteCredentialPathParams;
    security: DeleteCredentialSecurity;
}
export declare class DeleteCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
