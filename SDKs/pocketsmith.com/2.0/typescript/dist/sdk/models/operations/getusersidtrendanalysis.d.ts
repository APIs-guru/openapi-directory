import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersIdTrendAnalysisPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetUsersIdTrendAnalysisPeriodEnum {
    Weeks = "weeks",
    Months = "months",
    Years = "years",
    Event = "event"
}
export declare class GetUsersIdTrendAnalysisQueryParams extends SpeakeasyBase {
    categories: string;
    endDate: string;
    interval: number;
    period: GetUsersIdTrendAnalysisPeriodEnum;
    scenarios: string;
    startDate: string;
}
export declare class GetUsersIdTrendAnalysisRequest extends SpeakeasyBase {
    pathParams: GetUsersIdTrendAnalysisPathParams;
    queryParams: GetUsersIdTrendAnalysisQueryParams;
}
export declare class GetUsersIdTrendAnalysisResponse extends SpeakeasyBase {
    budgetAnalysisPackages?: shared.BudgetAnalysisPackage[];
    contentType: string;
    statusCode: number;
}
