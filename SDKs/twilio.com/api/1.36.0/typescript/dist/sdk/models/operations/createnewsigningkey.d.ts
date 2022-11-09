import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATENEWSIGNINGKEY_SERVERS: string[];
export declare class CreateNewSigningKeyPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class CreateNewSigningKeyCreateNewSigningKeyRequest extends SpeakeasyBase {
    friendlyName?: string;
}
export declare class CreateNewSigningKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateNewSigningKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateNewSigningKeyPathParams;
    request?: CreateNewSigningKeyCreateNewSigningKeyRequest;
    security: CreateNewSigningKeySecurity;
}
export declare class CreateNewSigningKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountNewSigningKey?: shared.ApiV2010AccountNewSigningKey;
}
