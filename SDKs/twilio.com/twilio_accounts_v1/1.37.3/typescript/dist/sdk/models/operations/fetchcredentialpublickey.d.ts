import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchCredentialPublicKeyServerList: readonly ["https://accounts.twilio.com"];
export declare class FetchCredentialPublicKeyPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchCredentialPublicKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCredentialPublicKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchCredentialPublicKeyPathParams;
    security: FetchCredentialPublicKeySecurity;
}
export declare class FetchCredentialPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    accountsV1CredentialCredentialPublicKey?: shared.AccountsV1CredentialCredentialPublicKey;
}
