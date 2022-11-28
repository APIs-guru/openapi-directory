import { SpeakeasyBase } from "../../../internal/utils";
export declare class UnarchiveConversationPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class UnarchiveConversationRequest extends SpeakeasyBase {
    pathParams: UnarchiveConversationPathParams;
}
export declare class UnarchiveConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
