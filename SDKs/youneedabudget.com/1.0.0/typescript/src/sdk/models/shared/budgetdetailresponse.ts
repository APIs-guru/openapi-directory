import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BudgetDetail } from "./budgetdetail";



export class BudgetDetailResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=budget" })
  budget: BudgetDetail;

  @SpeakeasyMetadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;
}


export class BudgetDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: BudgetDetailResponseData;
}
