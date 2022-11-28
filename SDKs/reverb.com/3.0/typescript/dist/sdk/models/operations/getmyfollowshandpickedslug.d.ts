import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyFollowsHandpickedSlugPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class GetMyFollowsHandpickedSlugSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyFollowsHandpickedSlugRequest extends SpeakeasyBase {
    pathParams: GetMyFollowsHandpickedSlugPathParams;
    security: GetMyFollowsHandpickedSlugSecurity;
}
export declare class GetMyFollowsHandpickedSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
