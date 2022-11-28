import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityId } from "./entityid";



export class PagedListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: EntityId })
  results?: EntityId[];

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: number;

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount?: number;
}
