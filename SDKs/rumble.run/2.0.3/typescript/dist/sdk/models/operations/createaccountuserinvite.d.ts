import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateAccountUserInviteSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class CreateAccountUserInviteRequest extends SpeakeasyBase {
    request: shared.UserInviteOptions;
    security: CreateAccountUserInviteSecurity;
}
export declare class CreateAccountUserInviteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
