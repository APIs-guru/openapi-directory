import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateTimeOffPeriodRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=employee_id" })
  employeeId: number;

  @Metadata({ data: "json, name=end_date" })
  endDate: Date;

  @Metadata({ data: "json, name=half_day_end" })
  halfDayEnd: boolean;

  @Metadata({ data: "json, name=half_day_start" })
  halfDayStart: boolean;

  @Metadata({ data: "json, name=start_date" })
  startDate: Date;

  @Metadata({ data: "json, name=time_off_type_id" })
  timeOffTypeId: number;
}
