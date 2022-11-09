import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESERVICEROLE_SERVERS: string[];
export declare class CreateServiceRolePathParams extends SpeakeasyBase {
    chatServiceSid: string;
}
export declare class CreateServiceRoleCreateServiceRoleRequest extends SpeakeasyBase {
    friendlyName: string;
    permission: string[];
    type: shared.ServiceRoleEnumRoleTypeEnum;
}
export declare class CreateServiceRoleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateServiceRoleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateServiceRolePathParams;
    request?: CreateServiceRoleCreateServiceRoleRequest;
    security: CreateServiceRoleSecurity;
}
export declare class CreateServiceRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceRole?: shared.ConversationsV1ServiceServiceRole;
}
