import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersIdBudgetPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdBudgetQueryParams extends SpeakeasyBase {
    rollUp?: boolean;
}
export declare class GetUsersIdBudgetRequest extends SpeakeasyBase {
    pathParams: GetUsersIdBudgetPathParams;
    queryParams: GetUsersIdBudgetQueryParams;
}
export declare class GetUsersIdBudgetResponse extends SpeakeasyBase {
    budgetAnalysisPackages?: shared.BudgetAnalysisPackage[];
    contentType: string;
    statusCode: number;
}
