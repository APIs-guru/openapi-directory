import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MessagesFetchAllPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class MessagesFetchAllQueryParams extends SpeakeasyBase {
    contactId?: string;
    conversationId?: string;
    limit?: number;
    offset?: number;
}
export declare class MessagesFetchAllSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class MessagesFetchAllRequest extends SpeakeasyBase {
    pathParams: MessagesFetchAllPathParams;
    queryParams: MessagesFetchAllQueryParams;
    security: MessagesFetchAllSecurity;
}
export declare class MessagesFetchAllResponse extends SpeakeasyBase {
    contentType: string;
    messagesResponse?: shared.MessagesResponse;
    statusCode: number;
}
