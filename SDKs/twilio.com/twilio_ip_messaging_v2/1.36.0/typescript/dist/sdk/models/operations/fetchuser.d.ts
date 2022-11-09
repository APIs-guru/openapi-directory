import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHUSER_SERVERS: string[];
export declare class FetchUserPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUserPathParams;
    security: FetchUserSecurity;
}
export declare class FetchUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV2ServiceUser?: shared.IpMessagingV2ServiceUser;
}
