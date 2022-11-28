import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteConversationPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class DeleteConversationQueryParams extends SpeakeasyBase {
    messageId: string;
}
export declare class DeleteConversationRequest extends SpeakeasyBase {
    pathParams: DeleteConversationPathParams;
    queryParams: DeleteConversationQueryParams;
}
export declare class DeleteConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
