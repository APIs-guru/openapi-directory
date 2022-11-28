import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConversationsQueryParams extends SpeakeasyBase {
    category?: string;
    devicePixelRatio?: number;
    includeNumUnread?: number;
    numMessages?: number;
    page?: number;
    perPage?: number;
}
export declare class GetConversations200ApplicationJson extends SpeakeasyBase {
    conversations?: shared.Conversation[];
    numUnread?: number;
    page?: number;
    perPage?: number;
}
export declare class GetConversationsRequest extends SpeakeasyBase {
    queryParams: GetConversationsQueryParams;
}
export declare class GetConversationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getConversations200ApplicationJsonObject?: GetConversations200ApplicationJson;
}
