import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteMyFollowsCategoriesCategorySubcategoryPathParams extends SpeakeasyBase {
    category: string;
    subcategory: string;
}
export declare class DeleteMyFollowsCategoriesCategorySubcategorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteMyFollowsCategoriesCategorySubcategoryRequest extends SpeakeasyBase {
    pathParams: DeleteMyFollowsCategoriesCategorySubcategoryPathParams;
    security: DeleteMyFollowsCategoriesCategorySubcategorySecurity;
}
export declare class DeleteMyFollowsCategoriesCategorySubcategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
