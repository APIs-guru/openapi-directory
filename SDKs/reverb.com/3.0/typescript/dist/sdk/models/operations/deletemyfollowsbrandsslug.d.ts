import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteMyFollowsBrandsSlugPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class DeleteMyFollowsBrandsSlugSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteMyFollowsBrandsSlugRequest extends SpeakeasyBase {
    pathParams: DeleteMyFollowsBrandsSlugPathParams;
    security: DeleteMyFollowsBrandsSlugSecurity;
}
export declare class DeleteMyFollowsBrandsSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
