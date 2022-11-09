import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AttendancePeriodsResponseDataAttributes extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=is_holiday" })
  isHoliday: boolean;

  @Metadata({ data: "json, name=is_on_time_off" })
  isOnTimeOff: boolean;

  @Metadata({ data: "json, name=start_time" })
  startTime: string;
}


export class AttendancePeriodsResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.AttendancePeriodsResponseDataAttributes })
  attributes: AttendancePeriodsResponseDataAttributes[];

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class AttendancePeriodsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.AttendancePeriodsResponseData })
  data: AttendancePeriodsResponseData[];

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=success" })
  success: boolean;
}
