import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteMyFollowsShopsSlugPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class DeleteMyFollowsShopsSlugSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteMyFollowsShopsSlugRequest extends SpeakeasyBase {
    pathParams: DeleteMyFollowsShopsSlugPathParams;
    security: DeleteMyFollowsShopsSlugSecurity;
}
export declare class DeleteMyFollowsShopsSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
