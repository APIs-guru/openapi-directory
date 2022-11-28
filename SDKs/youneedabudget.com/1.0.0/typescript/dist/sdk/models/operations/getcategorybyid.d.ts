import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoryByIdPathParams extends SpeakeasyBase {
    budgetId: string;
    categoryId: string;
}
export declare class GetCategoryByIdRequest extends SpeakeasyBase {
    pathParams: GetCategoryByIdPathParams;
}
export declare class GetCategoryByIdResponse extends SpeakeasyBase {
    categoryResponse?: shared.CategoryResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
