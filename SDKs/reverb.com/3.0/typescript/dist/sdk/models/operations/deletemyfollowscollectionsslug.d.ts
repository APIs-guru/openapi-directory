import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteMyFollowsCollectionsSlugPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class DeleteMyFollowsCollectionsSlugSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteMyFollowsCollectionsSlugRequest extends SpeakeasyBase {
    pathParams: DeleteMyFollowsCollectionsSlugPathParams;
    security: DeleteMyFollowsCollectionsSlugSecurity;
}
export declare class DeleteMyFollowsCollectionsSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
