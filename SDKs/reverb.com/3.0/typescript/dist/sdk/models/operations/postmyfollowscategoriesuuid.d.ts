import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyFollowsCategoriesUuidPathParams extends SpeakeasyBase {
    uuid: string;
}
export declare class PostMyFollowsCategoriesUuidSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyFollowsCategoriesUuidRequest extends SpeakeasyBase {
    pathParams: PostMyFollowsCategoriesUuidPathParams;
    security: PostMyFollowsCategoriesUuidSecurity;
}
export declare class PostMyFollowsCategoriesUuidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
