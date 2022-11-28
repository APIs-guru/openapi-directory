import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetSummary } from "./budgetsummary";
export declare class BudgetSummaryResponseData extends SpeakeasyBase {
    budgets: BudgetSummary[];
    defaultBudget?: BudgetSummary;
}
export declare class BudgetSummaryResponse extends SpeakeasyBase {
    data: BudgetSummaryResponseData;
}
