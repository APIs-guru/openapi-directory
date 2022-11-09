import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETECREDENTIALPUBLICKEY_SERVERS: string[];
export declare class DeleteCredentialPublicKeyPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteCredentialPublicKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteCredentialPublicKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteCredentialPublicKeyPathParams;
    security: DeleteCredentialPublicKeySecurity;
}
export declare class DeleteCredentialPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
