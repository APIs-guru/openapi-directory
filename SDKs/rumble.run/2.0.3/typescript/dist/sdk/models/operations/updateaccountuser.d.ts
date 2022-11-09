import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAccountUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UpdateAccountUserSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class UpdateAccountUserRequest extends SpeakeasyBase {
    pathParams: UpdateAccountUserPathParams;
    request: shared.UserOptions;
    security: UpdateAccountUserSecurity;
}
export declare class UpdateAccountUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
