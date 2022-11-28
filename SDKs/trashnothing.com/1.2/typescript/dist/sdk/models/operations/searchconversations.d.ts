import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchConversationsQueryParams extends SpeakeasyBase {
    devicePixelRatio?: number;
    page?: number;
    perPage?: number;
    search: string;
}
export declare class SearchConversations200ApplicationJson extends SpeakeasyBase {
    conversations?: shared.Conversation[];
    page?: number;
    perPage?: number;
    search?: string;
}
export declare class SearchConversationsRequest extends SpeakeasyBase {
    queryParams: SearchConversationsQueryParams;
}
export declare class SearchConversationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    searchConversations200ApplicationJsonObject?: SearchConversations200ApplicationJson;
}
