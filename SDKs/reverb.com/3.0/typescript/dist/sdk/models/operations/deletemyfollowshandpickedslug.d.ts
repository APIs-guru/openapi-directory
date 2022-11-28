import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteMyFollowsHandpickedSlugPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class DeleteMyFollowsHandpickedSlugSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteMyFollowsHandpickedSlugRequest extends SpeakeasyBase {
    pathParams: DeleteMyFollowsHandpickedSlugPathParams;
    security: DeleteMyFollowsHandpickedSlugSecurity;
}
export declare class DeleteMyFollowsHandpickedSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
