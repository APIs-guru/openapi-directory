import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { BudgetAnalysis } from "./budgetanalysis";
export declare class BudgetAnalysisPackage extends SpeakeasyBase {
    category?: Category;
    expense?: BudgetAnalysis;
    income?: BudgetAnalysis;
    isTransfer?: boolean;
}
