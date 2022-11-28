import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonthSummary } from "./monthsummary";



export class MonthSummariesResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=months", elemType: MonthSummary })
  months: MonthSummary[];

  @SpeakeasyMetadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;
}


export class MonthSummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: MonthSummariesResponseData;
}
