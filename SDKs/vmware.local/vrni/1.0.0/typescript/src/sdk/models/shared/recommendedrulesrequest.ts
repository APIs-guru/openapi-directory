import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MicroSecGroup } from "./microsecgroup";
import { MicroSecGroup } from "./microsecgroup";
import { TimeRange } from "./timerange";


export class RecommendedRulesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=group_1" })
  group1?: MicroSecGroup;

  @Metadata({ data: "json, name=group_2" })
  group2?: MicroSecGroup;

  @Metadata({ data: "json, name=time_range" })
  timeRange?: TimeRange;
}
