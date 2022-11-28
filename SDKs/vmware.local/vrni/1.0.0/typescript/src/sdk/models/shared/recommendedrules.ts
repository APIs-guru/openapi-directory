import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommendedRule } from "./recommendedrule";
import { TimeRange } from "./timerange";



export class RecommendedRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: RecommendedRule })
  results?: RecommendedRule[];

  @SpeakeasyMetadata({ data: "json, name=time_range" })
  timeRange?: TimeRange;
}
