import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCREDENTIALPUBLICKEY_SERVERS: string[];
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
