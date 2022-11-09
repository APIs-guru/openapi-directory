import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccountCtrlGetAccountServicesByAccountIdPathParams extends SpeakeasyBase {
    accountId: number;
}
export declare class AccountCtrlGetAccountServicesByAccountIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class AccountCtrlGetAccountServicesByAccountIdRequest extends SpeakeasyBase {
    pathParams: AccountCtrlGetAccountServicesByAccountIdPathParams;
    security: AccountCtrlGetAccountServicesByAccountIdSecurity;
}
export declare class AccountCtrlGetAccountServicesByAccountIdResponse extends SpeakeasyBase {
    accountHalResponse?: shared.AccountHalResponse;
    contentType: string;
    statusCode: number;
}
