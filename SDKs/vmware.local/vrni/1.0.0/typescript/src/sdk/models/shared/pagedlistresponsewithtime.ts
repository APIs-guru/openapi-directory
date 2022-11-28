import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityIdWithTime } from "./entityidwithtime";



export class PagedListResponseWithTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: EntityIdWithTime })
  results?: EntityIdWithTime[];

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: number;

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount?: number;
}
