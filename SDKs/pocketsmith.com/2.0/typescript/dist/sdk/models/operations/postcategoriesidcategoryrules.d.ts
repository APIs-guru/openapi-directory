import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCategoriesIdCategoryRulesPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostCategoriesIdCategoryRulesRequestBody extends SpeakeasyBase {
    applyToAll?: boolean;
    applyToUncategorised?: boolean;
    payeeMatches: string;
}
export declare class PostCategoriesIdCategoryRulesRequest extends SpeakeasyBase {
    pathParams: PostCategoriesIdCategoryRulesPathParams;
    request?: PostCategoriesIdCategoryRulesRequestBody;
}
export declare class PostCategoriesIdCategoryRulesResponse extends SpeakeasyBase {
    categoryRule?: shared.CategoryRule;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
