import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DutySummaryInfo } from "./dutysummaryinfo";



export class TeamDutySummaryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dutyAssistEnabled" })
  dutyAssistEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dutySummaries", elemType: DutySummaryInfo })
  dutySummaries?: DutySummaryInfo[];
}
