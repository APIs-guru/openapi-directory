import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSigningKeyServerList: readonly ["https://api.twilio.com"];
export declare class DeleteSigningKeyPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteSigningKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSigningKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSigningKeyPathParams;
    security: DeleteSigningKeySecurity;
}
export declare class DeleteSigningKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
