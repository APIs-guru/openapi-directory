import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetDetail } from "./budgetdetail";
export declare class BudgetDetailResponseData extends SpeakeasyBase {
    budget: BudgetDetail;
    serverKnowledge: number;
}
export declare class BudgetDetailResponse extends SpeakeasyBase {
    data: BudgetDetailResponseData;
}
