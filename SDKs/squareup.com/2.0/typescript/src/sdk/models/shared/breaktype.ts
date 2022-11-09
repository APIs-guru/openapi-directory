import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BreakType
/** 
 * A defined break template that sets an expectation for possible `Break`
 * instances on a `Shift`.
**/
export class BreakType extends SpeakeasyBase {
  @Metadata({ data: "json, name=break_name" })
  breakName: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=expected_duration" })
  expectedDuration: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_paid" })
  isPaid: boolean;

  @Metadata({ data: "json, name=location_id" })
  locationId: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
