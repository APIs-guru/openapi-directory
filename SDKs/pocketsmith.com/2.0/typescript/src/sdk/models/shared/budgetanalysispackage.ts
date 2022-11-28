import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { BudgetAnalysis } from "./budgetanalysis";



export class BudgetAnalysisPackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: Category;

  @SpeakeasyMetadata({ data: "json, name=expense" })
  expense?: BudgetAnalysis;

  @SpeakeasyMetadata({ data: "json, name=income" })
  income?: BudgetAnalysis;

  @SpeakeasyMetadata({ data: "json, name=is_transfer" })
  isTransfer?: boolean;
}
