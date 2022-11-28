import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyFollowsBrandsSlugPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class GetMyFollowsBrandsSlugSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyFollowsBrandsSlugRequest extends SpeakeasyBase {
    pathParams: GetMyFollowsBrandsSlugPathParams;
    security: GetMyFollowsBrandsSlugSecurity;
}
export declare class GetMyFollowsBrandsSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
