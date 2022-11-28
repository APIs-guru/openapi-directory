import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostListingsListingIdConversationsPathParams extends SpeakeasyBase {
    listingId: string;
}
export declare class PostListingsListingIdConversationsRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class PostListingsListingIdConversationsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostListingsListingIdConversationsRequest extends SpeakeasyBase {
    pathParams: PostListingsListingIdConversationsPathParams;
    request?: PostListingsListingIdConversationsRequestBody;
    security: PostListingsListingIdConversationsSecurity;
}
export declare class PostListingsListingIdConversationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
