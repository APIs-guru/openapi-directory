import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateCredentialPublicKeyServerList: readonly ["https://accounts.twilio.com"];
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
