import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSERVICECONVERSATIONMESSAGE_SERVERS: string[];
export declare class ListServiceConversationMessagePathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
}
export declare class ListServiceConversationMessageQueryParams extends SpeakeasyBase {
    order?: shared.ServiceConversationMessageEnumOrderTypeEnum;
    pageSize?: number;
}
export declare class ListServiceConversationMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListServiceConversationMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListServiceConversationMessagePathParams;
    queryParams: ListServiceConversationMessageQueryParams;
    security: ListServiceConversationMessageSecurity;
}
export declare class ListServiceConversationMessageListServiceConversationMessageResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListServiceConversationMessageListServiceConversationMessageResponse extends SpeakeasyBase {
    messages?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessage[];
    meta?: ListServiceConversationMessageListServiceConversationMessageResponseMeta;
}
export declare class ListServiceConversationMessageResponse extends SpeakeasyBase {
    contentType: string;
    listServiceConversationMessageResponse?: ListServiceConversationMessageListServiceConversationMessageResponse;
    statusCode: number;
}
