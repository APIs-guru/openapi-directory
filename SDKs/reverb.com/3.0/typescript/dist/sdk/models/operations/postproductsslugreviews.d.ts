import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProductsSlugReviewsPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class PostProductsSlugReviewsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostProductsSlugReviewsRequest extends SpeakeasyBase {
    pathParams: PostProductsSlugReviewsPathParams;
    security: PostProductsSlugReviewsSecurity;
}
export declare class PostProductsSlugReviewsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
