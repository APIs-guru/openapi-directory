import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESIPCREDENTIAL_SERVERS: string[];
export declare class DeleteSipCredentialPathParams extends SpeakeasyBase {
    accountSid: string;
    credentialListSid: string;
    sid: string;
}
export declare class DeleteSipCredentialSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSipCredentialRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSipCredentialPathParams;
    security: DeleteSipCredentialSecurity;
}
export declare class DeleteSipCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
