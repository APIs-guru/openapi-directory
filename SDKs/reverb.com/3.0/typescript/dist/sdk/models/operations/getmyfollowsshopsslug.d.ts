import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyFollowsShopsSlugPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class GetMyFollowsShopsSlugSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyFollowsShopsSlugRequest extends SpeakeasyBase {
    pathParams: GetMyFollowsShopsSlugPathParams;
    security: GetMyFollowsShopsSlugSecurity;
}
export declare class GetMyFollowsShopsSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
