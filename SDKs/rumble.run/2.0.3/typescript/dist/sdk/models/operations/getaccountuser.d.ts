import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAccountUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetAccountUserSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAccountUserRequest extends SpeakeasyBase {
    pathParams: GetAccountUserPathParams;
    security: GetAccountUserSecurity;
}
export declare class GetAccountUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
