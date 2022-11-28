import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoriesPathParams extends SpeakeasyBase {
    budgetId: string;
}
export declare class GetCategoriesQueryParams extends SpeakeasyBase {
    lastKnowledgeOfServer?: number;
}
export declare class GetCategoriesRequest extends SpeakeasyBase {
    pathParams: GetCategoriesPathParams;
    queryParams: GetCategoriesQueryParams;
}
export declare class GetCategoriesResponse extends SpeakeasyBase {
    categoriesResponse?: shared.CategoriesResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
