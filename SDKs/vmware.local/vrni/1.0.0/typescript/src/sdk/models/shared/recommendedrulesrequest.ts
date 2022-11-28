import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MicroSecGroup } from "./microsecgroup";
import { TimeRange } from "./timerange";



export class RecommendedRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group_1" })
  group1?: MicroSecGroup;

  @SpeakeasyMetadata({ data: "json, name=group_2" })
  group2?: MicroSecGroup;

  @SpeakeasyMetadata({ data: "json, name=time_range" })
  timeRange?: TimeRange;
}
