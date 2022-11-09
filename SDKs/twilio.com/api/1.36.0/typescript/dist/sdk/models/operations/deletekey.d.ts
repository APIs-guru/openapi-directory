import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEKEY_SERVERS: string[];
export declare class DeleteKeyPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteKeyPathParams;
    security: DeleteKeySecurity;
}
export declare class DeleteKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
