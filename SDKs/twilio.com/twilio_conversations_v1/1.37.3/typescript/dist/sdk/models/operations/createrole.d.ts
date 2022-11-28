import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateRoleServerList: readonly ["https://conversations.twilio.com"];
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
    request?: CreateRoleCreateRoleRequest;
    security: CreateRoleSecurity;
}
export declare class CreateRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1Role?: shared.ConversationsV1Role;
}
