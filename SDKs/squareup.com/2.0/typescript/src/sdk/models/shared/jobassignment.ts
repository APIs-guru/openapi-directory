import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";


// JobAssignment
/** 
 * An object describing a job that a team member is assigned to.
**/
export class JobAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=annual_rate" })
  annualRate?: Money;

  @Metadata({ data: "json, name=hourly_rate" })
  hourlyRate?: Money;

  @Metadata({ data: "json, name=job_title" })
  jobTitle: string;

  @Metadata({ data: "json, name=pay_type" })
  payType: string;

  @Metadata({ data: "json, name=weekly_hours" })
  weeklyHours?: number;
}
