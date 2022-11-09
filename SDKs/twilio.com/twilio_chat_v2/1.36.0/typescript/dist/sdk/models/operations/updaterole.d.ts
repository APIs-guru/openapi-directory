import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEROLE_SERVERS: string[];
export declare class UpdateRolePathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class UpdateRoleUpdateRoleRequest extends SpeakeasyBase {
    permission: string[];
}
export declare class UpdateRoleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateRoleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateRolePathParams;
    request?: UpdateRoleUpdateRoleRequest;
    security: UpdateRoleSecurity;
}
export declare class UpdateRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chatV2ServiceRole?: shared.ChatV2ServiceRole;
}
