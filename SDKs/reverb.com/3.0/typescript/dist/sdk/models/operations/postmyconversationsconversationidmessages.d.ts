import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyConversationsConversationIdMessagesPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class PostMyConversationsConversationIdMessagesRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class PostMyConversationsConversationIdMessagesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyConversationsConversationIdMessagesRequest extends SpeakeasyBase {
    pathParams: PostMyConversationsConversationIdMessagesPathParams;
    request?: PostMyConversationsConversationIdMessagesRequestBody;
    security: PostMyConversationsConversationIdMessagesSecurity;
}
export declare class PostMyConversationsConversationIdMessagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
