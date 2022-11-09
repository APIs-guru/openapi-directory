import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Break
/** 
 * A record of an employee's break during a shift.
**/
export class Break extends SpeakeasyBase {
  @Metadata({ data: "json, name=break_type_id" })
  breakTypeId: string;

  @Metadata({ data: "json, name=end_at" })
  endAt?: string;

  @Metadata({ data: "json, name=expected_duration" })
  expectedDuration: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_paid" })
  isPaid: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=start_at" })
  startAt: string;
}
