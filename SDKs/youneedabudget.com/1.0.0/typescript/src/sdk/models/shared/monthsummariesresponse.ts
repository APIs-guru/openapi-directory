import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MonthSummary } from "./monthsummary";


export class MonthSummariesResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=months", elemType: shared.MonthSummary })
  months: MonthSummary[];

  @Metadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;
}


export class MonthSummariesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: MonthSummariesResponseData;
}
