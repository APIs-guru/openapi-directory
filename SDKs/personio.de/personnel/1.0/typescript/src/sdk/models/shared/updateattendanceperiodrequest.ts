import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateAttendancePeriodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=break" })
  break?: number;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: string;
}
