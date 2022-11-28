import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllEntityTypeEnum } from "./allentitytypeenum";
import { SortByClause } from "./sortbyclause";
import { TimeRange } from "./timerange";



export class SearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: AllEntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=sort_by" })
  sortBy?: SortByClause;

  @SpeakeasyMetadata({ data: "json, name=time_range" })
  timeRange?: TimeRange;
}
