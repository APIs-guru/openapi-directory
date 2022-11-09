import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccountCtrlGetLocationByIdPathParams extends SpeakeasyBase {
    accountId: number;
    locationId: number;
}
export declare class AccountCtrlGetLocationByIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class AccountCtrlGetLocationByIdRequest extends SpeakeasyBase {
    pathParams: AccountCtrlGetLocationByIdPathParams;
    security: AccountCtrlGetLocationByIdSecurity;
}
export declare class AccountCtrlGetLocationByIdResponse extends SpeakeasyBase {
    contentType: string;
    locationHalResponse?: shared.LocationHalResponse;
    statusCode: number;
}
