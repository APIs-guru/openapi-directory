import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateCredentialPublicKeyServerList: readonly ["https://accounts.twilio.com"];
export declare class UpdateCredentialPublicKeyPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest extends SpeakeasyBase {
    friendlyName?: string;
}
export declare class UpdateCredentialPublicKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateCredentialPublicKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateCredentialPublicKeyPathParams;
    request?: UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest;
    security: UpdateCredentialPublicKeySecurity;
}
export declare class UpdateCredentialPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    accountsV1CredentialCredentialPublicKey?: shared.AccountsV1CredentialCredentialPublicKey;
}
