import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplyToConversationPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class ReplyToConversationRequestBody extends SpeakeasyBase {
    content: string;
    devicePixelRatio?: number;
    photoIds?: string;
}
export declare class ReplyToConversationRequest extends SpeakeasyBase {
    pathParams: ReplyToConversationPathParams;
    request: ReplyToConversationRequestBody;
}
export declare class ReplyToConversationResponse extends SpeakeasyBase {
    contentType: string;
    message?: shared.Message;
    statusCode: number;
}
