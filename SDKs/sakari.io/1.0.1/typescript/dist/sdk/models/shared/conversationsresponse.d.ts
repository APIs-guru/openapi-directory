import { SpeakeasyBase } from "../../../internal/utils";
import { Conversation } from "./conversation";
export declare class ConversationsResponseError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class ConversationsResponsePagination extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    totalCount?: number;
}
export declare class ConversationsResponse extends SpeakeasyBase {
    data?: Conversation[];
    error?: ConversationsResponseError;
    pagination?: ConversationsResponsePagination;
    success?: boolean;
}
