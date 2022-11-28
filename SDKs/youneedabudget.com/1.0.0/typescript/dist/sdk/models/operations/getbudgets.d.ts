import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBudgetsQueryParams extends SpeakeasyBase {
    includeAccounts?: boolean;
}
export declare class GetBudgetsRequest extends SpeakeasyBase {
    queryParams: GetBudgetsQueryParams;
}
export declare class GetBudgetsResponse extends SpeakeasyBase {
    budgetSummaryResponse?: shared.BudgetSummaryResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
