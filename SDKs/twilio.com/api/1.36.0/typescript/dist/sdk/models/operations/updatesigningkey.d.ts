import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESIGNINGKEY_SERVERS: string[];
export declare class UpdateSigningKeyPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class UpdateSigningKeyUpdateSigningKeyRequest extends SpeakeasyBase {
    friendlyName?: string;
}
export declare class UpdateSigningKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSigningKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSigningKeyPathParams;
    request?: UpdateSigningKeyUpdateSigningKeyRequest;
    security: UpdateSigningKeySecurity;
}
export declare class UpdateSigningKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSigningKey?: shared.ApiV2010AccountSigningKey;
}
