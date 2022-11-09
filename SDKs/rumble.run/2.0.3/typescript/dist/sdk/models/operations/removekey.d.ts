import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RemoveKeySecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class RemoveKeyRequest extends SpeakeasyBase {
    security: RemoveKeySecurity;
}
export declare class RemoveKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
