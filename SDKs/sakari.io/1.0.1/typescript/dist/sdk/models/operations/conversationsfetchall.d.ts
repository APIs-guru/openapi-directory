import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConversationsFetchAllPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class ConversationsFetchAllQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class ConversationsFetchAllSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class ConversationsFetchAllRequest extends SpeakeasyBase {
    pathParams: ConversationsFetchAllPathParams;
    queryParams: ConversationsFetchAllQueryParams;
    security: ConversationsFetchAllSecurity;
}
export declare class ConversationsFetchAllResponse extends SpeakeasyBase {
    contentType: string;
    conversationsResponse?: shared.ConversationsResponse;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
