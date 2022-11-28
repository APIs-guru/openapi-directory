import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyFollowsCategoriesCategorySubcategoryPathParams extends SpeakeasyBase {
    category: string;
    subcategory: string;
}
export declare class GetMyFollowsCategoriesCategorySubcategorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyFollowsCategoriesCategorySubcategoryRequest extends SpeakeasyBase {
    pathParams: GetMyFollowsCategoriesCategorySubcategoryPathParams;
    security: GetMyFollowsCategoriesCategorySubcategorySecurity;
}
export declare class GetMyFollowsCategoriesCategorySubcategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
