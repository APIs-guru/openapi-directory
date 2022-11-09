import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Category } from "./category";
import { BudgetAnalysis } from "./budgetanalysis";
import { BudgetAnalysis } from "./budgetanalysis";


export class BudgetAnalysisPackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: Category;

  @Metadata({ data: "json, name=expense" })
  expense?: BudgetAnalysis;

  @Metadata({ data: "json, name=income" })
  income?: BudgetAnalysis;

  @Metadata({ data: "json, name=is_transfer" })
  isTransfer?: boolean;
}
