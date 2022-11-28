import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUserServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchUserPathParams extends SpeakeasyBase {
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
    conversationsV1User?: shared.ConversationsV1User;
}
