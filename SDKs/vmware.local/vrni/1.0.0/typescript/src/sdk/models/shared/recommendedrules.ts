import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecommendedRule } from "./recommendedrule";
import { TimeRange } from "./timerange";


export class RecommendedRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.RecommendedRule })
  results?: RecommendedRule[];

  @Metadata({ data: "json, name=time_range" })
  timeRange?: TimeRange;
}
