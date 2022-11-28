import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyFollowsCollectionsSlugPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class PostMyFollowsCollectionsSlugSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyFollowsCollectionsSlugRequest extends SpeakeasyBase {
    pathParams: PostMyFollowsCollectionsSlugPathParams;
    security: PostMyFollowsCollectionsSlugSecurity;
}
export declare class PostMyFollowsCollectionsSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
