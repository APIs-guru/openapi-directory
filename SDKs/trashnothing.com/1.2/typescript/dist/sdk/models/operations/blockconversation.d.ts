import { SpeakeasyBase } from "../../../internal/utils";
export declare class BlockConversationPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class BlockConversationRequest extends SpeakeasyBase {
    pathParams: BlockConversationPathParams;
}
export declare class BlockConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
