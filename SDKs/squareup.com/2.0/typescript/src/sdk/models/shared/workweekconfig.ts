import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkweekConfig
/** 
 * Sets the day of the week and hour of the day that a business starts a
 * workweek. This is used to calculate overtime pay.
**/
export class WorkweekConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=start_of_day_local_time" })
  startOfDayLocalTime: string;

  @Metadata({ data: "json, name=start_of_week" })
  startOfWeek: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
