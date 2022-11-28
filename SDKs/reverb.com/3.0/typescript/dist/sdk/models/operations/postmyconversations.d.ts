import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyConversationsRequestBody extends SpeakeasyBase {
    body: string;
    cloudinaryPhotos?: string[];
    listingId?: number;
    recipientId?: number;
    recipientUuid?: string;
    shopId?: string;
}
export declare class PostMyConversationsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyConversationsRequest extends SpeakeasyBase {
    request?: PostMyConversationsRequestBody;
    security: PostMyConversationsSecurity;
}
export declare class PostMyConversationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
