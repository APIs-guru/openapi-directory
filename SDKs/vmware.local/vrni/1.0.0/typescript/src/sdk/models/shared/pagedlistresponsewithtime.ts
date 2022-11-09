import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityIdWithTime } from "./entityidwithtime";


export class PagedListResponseWithTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=end_time" })
  endTime?: number;

  @Metadata({ data: "json, name=results", elemType: shared.EntityIdWithTime })
  results?: EntityIdWithTime[];

  @Metadata({ data: "json, name=start_time" })
  startTime?: number;

  @Metadata({ data: "json, name=total_count" })
  totalCount?: number;
}
