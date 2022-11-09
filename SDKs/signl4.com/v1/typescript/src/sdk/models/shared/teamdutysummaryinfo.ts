import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DutySummaryInfo } from "./dutysummaryinfo";


export class TeamDutySummaryInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=dutyAssistEnabled" })
  dutyAssistEnabled?: boolean;

  @Metadata({ data: "json, name=dutySummaries", elemType: shared.DutySummaryInfo })
  dutySummaries?: DutySummaryInfo[];
}
