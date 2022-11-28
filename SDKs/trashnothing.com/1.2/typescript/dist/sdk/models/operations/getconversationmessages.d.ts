import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConversationMessagesPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class GetConversationMessagesQueryParams extends SpeakeasyBase {
    devicePixelRatio?: number;
    includeConversation?: number;
    page?: number;
    perPage?: number;
}
export declare class GetConversationMessages200ApplicationJson extends SpeakeasyBase {
    conversation?: shared.Conversation;
    messages?: shared.Message[];
    page?: number;
    perPage?: number;
}
export declare class GetConversationMessagesRequest extends SpeakeasyBase {
    pathParams: GetConversationMessagesPathParams;
    queryParams: GetConversationMessagesQueryParams;
}
export declare class GetConversationMessagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getConversationMessages200ApplicationJsonObject?: GetConversationMessages200ApplicationJson;
}
