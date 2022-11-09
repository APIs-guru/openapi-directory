import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESERVICEROLE_SERVERS: string[];
export declare class UpdateServiceRolePathParams extends SpeakeasyBase {
    chatServiceSid: string;
    sid: string;
}
export declare class UpdateServiceRoleUpdateServiceRoleRequest extends SpeakeasyBase {
    permission: string[];
}
export declare class UpdateServiceRoleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateServiceRoleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateServiceRolePathParams;
    request?: UpdateServiceRoleUpdateServiceRoleRequest;
    security: UpdateServiceRoleSecurity;
}
export declare class UpdateServiceRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceRole?: shared.ConversationsV1ServiceServiceRole;
}
