import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AttendancePeriodsResponseDataAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=break" })
  break: number;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=employee" })
  employee: number;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime: string;

  @SpeakeasyMetadata({ data: "json, name=is_holiday" })
  isHoliday: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_on_time_off" })
  isOnTimeOff: boolean;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime: string;
}


export class AttendancePeriodsResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: AttendancePeriodsResponseDataAttributes })
  attributes: AttendancePeriodsResponseDataAttributes[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class AttendancePeriodsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: AttendancePeriodsResponseData })
  data: AttendancePeriodsResponseData[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}
