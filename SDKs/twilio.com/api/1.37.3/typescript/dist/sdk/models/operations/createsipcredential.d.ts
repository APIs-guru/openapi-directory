import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSipCredentialServerList: readonly ["https://api.twilio.com"];
export declare class CreateSipCredentialPathParams extends SpeakeasyBase {
    accountSid: string;
    credentialListSid: string;
}
export declare class CreateSipCredentialCreateSipCredentialRequest extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSipCredentialSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSipCredentialRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSipCredentialPathParams;
    request?: CreateSipCredentialCreateSipCredentialRequest;
    security: CreateSipCredentialSecurity;
}
export declare class CreateSipCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipCredentialListSipCredential?: shared.ApiV2010AccountSipSipCredentialListSipCredential;
}
