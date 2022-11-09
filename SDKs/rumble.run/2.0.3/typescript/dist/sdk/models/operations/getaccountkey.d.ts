import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAccountKeyPathParams extends SpeakeasyBase {
    keyId: string;
}
export declare class GetAccountKeySecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAccountKeyRequest extends SpeakeasyBase {
    pathParams: GetAccountKeyPathParams;
    security: GetAccountKeySecurity;
}
export declare class GetAccountKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
