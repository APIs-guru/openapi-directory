import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateTimeOffPeriodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=employee_id" })
  employeeId: number;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "json, name=half_day_end" })
  halfDayEnd: boolean;

  @SpeakeasyMetadata({ data: "json, name=half_day_start" })
  halfDayStart: boolean;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate: Date;

  @SpeakeasyMetadata({ data: "json, name=time_off_type_id" })
  timeOffTypeId: number;
}
