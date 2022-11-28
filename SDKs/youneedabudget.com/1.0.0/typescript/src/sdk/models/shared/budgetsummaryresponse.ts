import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BudgetSummary } from "./budgetsummary";



export class BudgetSummaryResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=budgets", elemType: BudgetSummary })
  budgets: BudgetSummary[];

  @SpeakeasyMetadata({ data: "json, name=default_budget" })
  defaultBudget?: BudgetSummary;
}


export class BudgetSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: BudgetSummaryResponseData;
}
