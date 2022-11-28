import { SpeakeasyBase } from "../../../internal/utils";
export declare class MarkConversationReadPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class MarkConversationReadRequestBody extends SpeakeasyBase {
    messageId: string;
}
export declare class MarkConversationReadRequest extends SpeakeasyBase {
    pathParams: MarkConversationReadPathParams;
    request: MarkConversationReadRequestBody;
}
export declare class MarkConversationReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
