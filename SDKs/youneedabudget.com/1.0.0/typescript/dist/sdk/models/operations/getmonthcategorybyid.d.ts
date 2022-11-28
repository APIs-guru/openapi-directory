import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMonthCategoryByIdPathParams extends SpeakeasyBase {
    budgetId: string;
    categoryId: string;
    month: Date;
}
export declare class GetMonthCategoryByIdRequest extends SpeakeasyBase {
    pathParams: GetMonthCategoryByIdPathParams;
}
export declare class GetMonthCategoryByIdResponse extends SpeakeasyBase {
    categoryResponse?: shared.CategoryResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
