import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RemoveAccountKeyPathParams extends SpeakeasyBase {
    keyId: string;
}
export declare class RemoveAccountKeySecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class RemoveAccountKeyRequest extends SpeakeasyBase {
    pathParams: RemoveAccountKeyPathParams;
    security: RemoveAccountKeySecurity;
}
export declare class RemoveAccountKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
