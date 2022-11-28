import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConversationsFetchPathParams extends SpeakeasyBase {
    accountId: string;
    conversationId: string;
}
export declare class ConversationsFetchSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class ConversationsFetchRequest extends SpeakeasyBase {
    pathParams: ConversationsFetchPathParams;
    security: ConversationsFetchSecurity;
}
export declare class ConversationsFetchResponse extends SpeakeasyBase {
    contentType: string;
    conversationResponse?: shared.ConversationResponse;
    statusCode: number;
}
