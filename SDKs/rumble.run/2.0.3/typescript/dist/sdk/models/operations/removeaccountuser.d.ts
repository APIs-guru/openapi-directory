import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveAccountUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class RemoveAccountUserSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class RemoveAccountUserRequest extends SpeakeasyBase {
    pathParams: RemoveAccountUserPathParams;
    security: RemoveAccountUserSecurity;
}
export declare class RemoveAccountUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
