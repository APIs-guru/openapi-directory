import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBudgetMonthsPathParams extends SpeakeasyBase {
    budgetId: string;
}
export declare class GetBudgetMonthsQueryParams extends SpeakeasyBase {
    lastKnowledgeOfServer?: number;
}
export declare class GetBudgetMonthsRequest extends SpeakeasyBase {
    pathParams: GetBudgetMonthsPathParams;
    queryParams: GetBudgetMonthsQueryParams;
}
export declare class GetBudgetMonthsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    monthSummariesResponse?: shared.MonthSummariesResponse;
    statusCode: number;
}
