import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConversationsClosePathParams extends SpeakeasyBase {
    accountId: string;
    conversationId: string;
}
export declare class ConversationsCloseSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class ConversationsCloseRequest extends SpeakeasyBase {
    pathParams: ConversationsClosePathParams;
    security: ConversationsCloseSecurity;
}
export declare class ConversationsCloseResponse extends SpeakeasyBase {
    contentType: string;
    conversationResponse?: shared.ConversationResponse;
    statusCode: number;
}
