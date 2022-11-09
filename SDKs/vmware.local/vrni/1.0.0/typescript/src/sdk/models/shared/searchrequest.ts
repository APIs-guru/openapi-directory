import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AllEntityTypeEnum } from "./allentitytypeenum";
import { SortByClause } from "./sortbyclause";
import { TimeRange } from "./timerange";


export class SearchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: AllEntityTypeEnum;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=sort_by" })
  sortBy?: SortByClause;

  @Metadata({ data: "json, name=time_range" })
  timeRange?: TimeRange;
}
