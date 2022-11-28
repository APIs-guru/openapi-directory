import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyConversationsQueryParams extends SpeakeasyBase {
    offset?: number;
    page?: number;
    perPage?: number;
    search?: string;
    unreadOnly?: boolean;
}
export declare class GetMyConversationsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyConversationsRequest extends SpeakeasyBase {
    queryParams: GetMyConversationsQueryParams;
    security: GetMyConversationsSecurity;
}
export declare class GetMyConversationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
