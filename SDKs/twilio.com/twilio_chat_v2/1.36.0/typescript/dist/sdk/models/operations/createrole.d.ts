import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEROLE_SERVERS: string[];
export declare class CreateRolePathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateRoleCreateRoleRequest extends SpeakeasyBase {
    friendlyName: string;
    permission: string[];
    type: shared.RoleEnumRoleTypeEnum;
}
export declare class CreateRoleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateRoleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateRolePathParams;
    request?: CreateRoleCreateRoleRequest;
    security: CreateRoleSecurity;
}
export declare class CreateRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chatV2ServiceRole?: shared.ChatV2ServiceRole;
}
