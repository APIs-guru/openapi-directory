import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ResetAccountUserMfaPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class ResetAccountUserMfaSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ResetAccountUserMfaRequest extends SpeakeasyBase {
    pathParams: ResetAccountUserMfaPathParams;
    security: ResetAccountUserMfaSecurity;
}
export declare class ResetAccountUserMfaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
