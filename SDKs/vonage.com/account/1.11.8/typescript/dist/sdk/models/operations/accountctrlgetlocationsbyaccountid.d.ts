import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccountCtrlGetLocationsByAccountIdPathParams extends SpeakeasyBase {
    accountId: number;
}
export declare class AccountCtrlGetLocationsByAccountIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class AccountCtrlGetLocationsByAccountIdRequest extends SpeakeasyBase {
    pathParams: AccountCtrlGetLocationsByAccountIdPathParams;
    security: AccountCtrlGetLocationsByAccountIdSecurity;
}
export declare class AccountCtrlGetLocationsByAccountIdResponse extends SpeakeasyBase {
    contentType: string;
    locationsHalResponse?: shared.LocationsHalResponse;
    statusCode: number;
}
