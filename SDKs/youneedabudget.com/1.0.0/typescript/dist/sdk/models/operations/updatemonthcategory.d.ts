import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateMonthCategoryPathParams extends SpeakeasyBase {
    budgetId: string;
    categoryId: string;
    month: Date;
}
export declare class UpdateMonthCategoryRequest extends SpeakeasyBase {
    pathParams: UpdateMonthCategoryPathParams;
    request: shared.SaveMonthCategoryWrapper;
}
export declare class UpdateMonthCategoryResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    saveCategoryResponse?: shared.SaveCategoryResponse;
    statusCode: number;
}
