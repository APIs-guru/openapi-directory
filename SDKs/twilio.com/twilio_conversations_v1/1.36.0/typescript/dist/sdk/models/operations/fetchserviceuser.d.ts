import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSERVICEUSER_SERVERS: string[];
export declare class FetchServiceUserPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    sid: string;
}
export declare class FetchServiceUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchServiceUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchServiceUserPathParams;
    security: FetchServiceUserSecurity;
}
export declare class FetchServiceUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceUser?: shared.ConversationsV1ServiceServiceUser;
}
