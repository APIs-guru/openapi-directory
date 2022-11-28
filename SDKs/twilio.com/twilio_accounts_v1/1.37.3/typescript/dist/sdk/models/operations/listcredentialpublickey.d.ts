import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListCredentialPublicKeyServerList: readonly ["https://accounts.twilio.com"];
export declare class ListCredentialPublicKeyQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListCredentialPublicKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListCredentialPublicKeyListCredentialPublicKeyResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListCredentialPublicKeyListCredentialPublicKeyResponse extends SpeakeasyBase {
    credentials?: shared.AccountsV1CredentialCredentialPublicKey[];
    meta?: ListCredentialPublicKeyListCredentialPublicKeyResponseMeta;
}
export declare class ListCredentialPublicKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListCredentialPublicKeyQueryParams;
    security: ListCredentialPublicKeySecurity;
}
export declare class ListCredentialPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    listCredentialPublicKeyResponse?: ListCredentialPublicKeyListCredentialPublicKeyResponse;
    statusCode: number;
}
