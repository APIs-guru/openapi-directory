import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATECREDENTIALPUBLICKEY_SERVERS: string[];
export declare class CreateCredentialPublicKeyCreateCredentialPublicKeyRequest extends SpeakeasyBase {
    accountSid?: string;
    friendlyName?: string;
    publicKey: string;
}
export declare class CreateCredentialPublicKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateCredentialPublicKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateCredentialPublicKeyCreateCredentialPublicKeyRequest;
    security: CreateCredentialPublicKeySecurity;
}
export declare class CreateCredentialPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    accountsV1CredentialCredentialPublicKey?: shared.AccountsV1CredentialCredentialPublicKey;
}
