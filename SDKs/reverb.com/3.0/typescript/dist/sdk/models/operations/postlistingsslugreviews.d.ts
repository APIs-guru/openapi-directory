import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostListingsSlugReviewsPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class PostListingsSlugReviewsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostListingsSlugReviewsRequest extends SpeakeasyBase {
    pathParams: PostListingsSlugReviewsPathParams;
    security: PostListingsSlugReviewsSecurity;
}
export declare class PostListingsSlugReviewsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
