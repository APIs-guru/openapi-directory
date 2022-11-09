import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BudgetDetail } from "./budgetdetail";


export class BudgetDetailResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=budget" })
  budget: BudgetDetail;

  @Metadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;
}


export class BudgetDetailResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: BudgetDetailResponseData;
}
