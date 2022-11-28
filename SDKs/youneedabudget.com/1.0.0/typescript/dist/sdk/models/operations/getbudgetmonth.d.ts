import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBudgetMonthPathParams extends SpeakeasyBase {
    budgetId: string;
    month: Date;
}
export declare class GetBudgetMonthRequest extends SpeakeasyBase {
    pathParams: GetBudgetMonthPathParams;
}
export declare class GetBudgetMonthResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    monthDetailResponse?: shared.MonthDetailResponse;
    statusCode: number;
}
