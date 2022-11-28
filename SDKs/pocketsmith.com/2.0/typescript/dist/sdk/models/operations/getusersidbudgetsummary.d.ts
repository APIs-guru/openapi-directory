import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersIdBudgetSummaryPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetUsersIdBudgetSummaryPeriodEnum {
    Weeks = "weeks",
    Months = "months",
    Years = "years",
    Event = "event"
}
export declare class GetUsersIdBudgetSummaryQueryParams extends SpeakeasyBase {
    endDate: string;
    interval: number;
    period: GetUsersIdBudgetSummaryPeriodEnum;
    startDate: string;
}
export declare class GetUsersIdBudgetSummaryRequest extends SpeakeasyBase {
    pathParams: GetUsersIdBudgetSummaryPathParams;
    queryParams: GetUsersIdBudgetSummaryQueryParams;
}
export declare class GetUsersIdBudgetSummaryResponse extends SpeakeasyBase {
    budgetAnalysisPackages?: shared.BudgetAnalysisPackage[];
    contentType: string;
    statusCode: number;
}
