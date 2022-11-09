import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSERVICEROLE_SERVERS: string[];
export declare class FetchServiceRolePathParams extends SpeakeasyBase {
    chatServiceSid: string;
    sid: string;
}
export declare class FetchServiceRoleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchServiceRoleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchServiceRolePathParams;
    security: FetchServiceRoleSecurity;
}
export declare class FetchServiceRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceRole?: shared.ConversationsV1ServiceServiceRole;
}
