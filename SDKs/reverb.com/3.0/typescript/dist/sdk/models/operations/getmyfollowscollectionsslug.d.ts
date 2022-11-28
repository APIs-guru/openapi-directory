import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyFollowsCollectionsSlugPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class GetMyFollowsCollectionsSlugSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyFollowsCollectionsSlugRequest extends SpeakeasyBase {
    pathParams: GetMyFollowsCollectionsSlugPathParams;
    security: GetMyFollowsCollectionsSlugSecurity;
}
export declare class GetMyFollowsCollectionsSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
