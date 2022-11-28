import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyFollowsBrandsSlugPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class PostMyFollowsBrandsSlugSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyFollowsBrandsSlugRequest extends SpeakeasyBase {
    pathParams: PostMyFollowsBrandsSlugPathParams;
    security: PostMyFollowsBrandsSlugSecurity;
}
export declare class PostMyFollowsBrandsSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
