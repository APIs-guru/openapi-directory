import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
export declare class MessagesResponseError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class MessagesResponsePagination extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    totalCount?: number;
}
export declare class MessagesResponse extends SpeakeasyBase {
    data?: Message[];
    error?: MessagesResponseError;
    pagination?: MessagesResponsePagination;
    success?: boolean;
}
