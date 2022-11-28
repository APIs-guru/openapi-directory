import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListUserConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class ListUserConversationPathParams extends SpeakeasyBase {
    userSid: string;
}
export declare class ListUserConversationQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListUserConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUserConversationListUserConversationResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListUserConversationListUserConversationResponse extends SpeakeasyBase {
    conversations?: shared.ConversationsV1UserUserConversation[];
    meta?: ListUserConversationListUserConversationResponseMeta;
}
export declare class ListUserConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUserConversationPathParams;
    queryParams: ListUserConversationQueryParams;
    security: ListUserConversationSecurity;
}
export declare class ListUserConversationResponse extends SpeakeasyBase {
    contentType: string;
    listUserConversationResponse?: ListUserConversationListUserConversationResponse;
    statusCode: number;
}
