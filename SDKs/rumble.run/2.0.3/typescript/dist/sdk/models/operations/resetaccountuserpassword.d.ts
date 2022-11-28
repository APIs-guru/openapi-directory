import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetAccountUserPasswordPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class ResetAccountUserPasswordSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ResetAccountUserPasswordRequest extends SpeakeasyBase {
    pathParams: ResetAccountUserPasswordPathParams;
    security: ResetAccountUserPasswordSecurity;
}
export declare class ResetAccountUserPasswordResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
