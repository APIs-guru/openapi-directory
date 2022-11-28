import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchRoleServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchRolePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchRoleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRoleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchRolePathParams;
    security: FetchRoleSecurity;
}
export declare class FetchRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1Role?: shared.ConversationsV1Role;
}
