import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: number;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: number;
}
