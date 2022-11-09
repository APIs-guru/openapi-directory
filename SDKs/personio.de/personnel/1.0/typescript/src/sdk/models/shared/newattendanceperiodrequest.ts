import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NewAttendancePeriodRequestAttendances extends SpeakeasyBase {
  @Metadata({ data: "json, name=break" })
  break: number;

  @Metadata({ data: "json, name=comment" })
  comment: string;

  @Metadata({ data: "json, name=date" })
  date: Date;

  @Metadata({ data: "json, name=employee" })
  employee: number;

  @Metadata({ data: "json, name=end_time" })
  endTime: string;

  @Metadata({ data: "json, name=start_time" })
  startTime: string;
}


export class NewAttendancePeriodRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attendances", elemType: shared.NewAttendancePeriodRequestAttendances })
  attendances?: NewAttendancePeriodRequestAttendances[];
}
