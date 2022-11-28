import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyFollowsCategoriesIdentifierPathParams extends SpeakeasyBase {
    identifier: string;
}
export declare class PostMyFollowsCategoriesIdentifierSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyFollowsCategoriesIdentifierRequest extends SpeakeasyBase {
    pathParams: PostMyFollowsCategoriesIdentifierPathParams;
    security: PostMyFollowsCategoriesIdentifierSecurity;
}
export declare class PostMyFollowsCategoriesIdentifierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
