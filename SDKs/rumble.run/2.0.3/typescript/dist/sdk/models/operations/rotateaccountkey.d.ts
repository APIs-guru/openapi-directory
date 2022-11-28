import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RotateAccountKeyPathParams extends SpeakeasyBase {
    keyId: string;
}
export declare class RotateAccountKeySecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class RotateAccountKeyRequest extends SpeakeasyBase {
    pathParams: RotateAccountKeyPathParams;
    security: RotateAccountKeySecurity;
}
export declare class RotateAccountKeyResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
}
