import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ResetAccountUserLockoutPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class ResetAccountUserLockoutSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ResetAccountUserLockoutRequest extends SpeakeasyBase {
    pathParams: ResetAccountUserLockoutPathParams;
    security: ResetAccountUserLockoutSecurity;
}
export declare class ResetAccountUserLockoutResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
