import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyFollowsHandpickedSlugPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class PostMyFollowsHandpickedSlugSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyFollowsHandpickedSlugRequest extends SpeakeasyBase {
    pathParams: PostMyFollowsHandpickedSlugPathParams;
    security: PostMyFollowsHandpickedSlugSecurity;
}
export declare class PostMyFollowsHandpickedSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
