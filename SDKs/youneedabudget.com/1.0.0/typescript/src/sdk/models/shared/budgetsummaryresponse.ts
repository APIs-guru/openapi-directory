import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BudgetSummary } from "./budgetsummary";
import { BudgetSummary } from "./budgetsummary";


export class BudgetSummaryResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=budgets", elemType: shared.BudgetSummary })
  budgets: BudgetSummary[];

  @Metadata({ data: "json, name=default_budget" })
  defaultBudget?: BudgetSummary;
}


export class BudgetSummaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: BudgetSummaryResponseData;
}
