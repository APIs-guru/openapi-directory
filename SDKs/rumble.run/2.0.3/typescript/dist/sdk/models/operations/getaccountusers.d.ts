import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountUsersSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAccountUsersRequest extends SpeakeasyBase {
    security: GetAccountUsersSecurity;
}
export declare class GetAccountUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    users?: shared.User[];
}
