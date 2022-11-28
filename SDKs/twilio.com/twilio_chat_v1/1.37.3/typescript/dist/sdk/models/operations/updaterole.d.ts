import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateRoleServerList: readonly ["https://chat.twilio.com"];
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
    chatV1ServiceRole?: shared.ChatV1ServiceRole;
}
