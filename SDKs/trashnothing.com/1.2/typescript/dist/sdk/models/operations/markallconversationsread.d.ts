import { SpeakeasyBase } from "../../../internal/utils";
export declare class MarkAllConversationsReadRequestBody extends SpeakeasyBase {
    messageId: string;
}
export declare class MarkAllConversationsReadRequest extends SpeakeasyBase {
    request: MarkAllConversationsReadRequestBody;
}
export declare class MarkAllConversationsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
