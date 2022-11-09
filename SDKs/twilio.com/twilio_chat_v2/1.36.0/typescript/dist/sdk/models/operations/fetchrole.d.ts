import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHROLE_SERVERS: string[];
export declare class FetchRolePathParams extends SpeakeasyBase {
    serviceSid: string;
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
    chatV2ServiceRole?: shared.ChatV2ServiceRole;
}
