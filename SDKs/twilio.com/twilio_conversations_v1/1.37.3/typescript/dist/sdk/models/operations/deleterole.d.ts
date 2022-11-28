import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteRoleServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteRolePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteRoleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteRoleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteRolePathParams;
    security: DeleteRoleSecurity;
}
export declare class DeleteRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
