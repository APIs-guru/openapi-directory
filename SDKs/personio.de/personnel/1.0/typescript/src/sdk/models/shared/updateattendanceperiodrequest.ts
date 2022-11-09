import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateAttendancePeriodRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=break" })
  break?: number;

  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=end_time" })
  endTime?: string;

  @Metadata({ data: "json, name=start_time" })
  startTime?: string;
}
