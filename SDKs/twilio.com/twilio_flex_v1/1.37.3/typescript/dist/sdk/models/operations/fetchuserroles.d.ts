import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUserRolesServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchUserRolesHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class FetchUserRolesSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUserRolesRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: FetchUserRolesHeaders;
    security: FetchUserRolesSecurity;
}
export declare class FetchUserRolesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1UserRoles?: shared.FlexV1UserRoles;
}
