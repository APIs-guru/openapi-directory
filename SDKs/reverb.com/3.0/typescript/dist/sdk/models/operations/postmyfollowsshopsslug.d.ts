import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyFollowsShopsSlugPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class PostMyFollowsShopsSlugSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyFollowsShopsSlugRequest extends SpeakeasyBase {
    pathParams: PostMyFollowsShopsSlugPathParams;
    security: PostMyFollowsShopsSlugSecurity;
}
export declare class PostMyFollowsShopsSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
