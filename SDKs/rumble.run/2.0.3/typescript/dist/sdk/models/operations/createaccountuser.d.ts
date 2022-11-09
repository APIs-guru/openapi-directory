import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateAccountUserSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class CreateAccountUserRequest extends SpeakeasyBase {
    request: shared.UserOptions;
    security: CreateAccountUserSecurity;
}
export declare class CreateAccountUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
