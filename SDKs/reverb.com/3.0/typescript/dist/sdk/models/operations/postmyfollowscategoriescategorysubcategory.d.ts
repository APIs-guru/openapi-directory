import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyFollowsCategoriesCategorySubcategoryPathParams extends SpeakeasyBase {
    category: string;
    subcategory: string;
}
export declare class PostMyFollowsCategoriesCategorySubcategorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyFollowsCategoriesCategorySubcategoryRequest extends SpeakeasyBase {
    pathParams: PostMyFollowsCategoriesCategorySubcategoryPathParams;
    security: PostMyFollowsCategoriesCategorySubcategorySecurity;
}
export declare class PostMyFollowsCategoriesCategorySubcategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
