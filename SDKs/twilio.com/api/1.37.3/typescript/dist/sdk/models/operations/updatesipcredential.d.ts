import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSipCredentialServerList: readonly ["https://api.twilio.com"];
export declare class UpdateSipCredentialPathParams extends SpeakeasyBase {
    accountSid: string;
    credentialListSid: string;
    sid: string;
}
export declare class UpdateSipCredentialUpdateSipCredentialRequest extends SpeakeasyBase {
    password?: string;
}
export declare class UpdateSipCredentialSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSipCredentialRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSipCredentialPathParams;
    request?: UpdateSipCredentialUpdateSipCredentialRequest;
    security: UpdateSipCredentialSecurity;
}
export declare class UpdateSipCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipCredentialListSipCredential?: shared.ApiV2010AccountSipSipCredentialListSipCredential;
}
