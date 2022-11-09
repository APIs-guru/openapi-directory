import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_time" })
  endTime?: number;

  @Metadata({ data: "json, name=start_time" })
  startTime?: number;
}
