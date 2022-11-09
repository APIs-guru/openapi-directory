import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DetailedServiceHours
/** 
 * Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.
**/
export class DetailedServiceHours extends SpeakeasyBase {
  @Metadata({ data: "json, name=Friday" })
  friday?: string;

  @Metadata({ data: "json, name=Monday" })
  monday?: string;

  @Metadata({ data: "json, name=Saturday" })
  saturday?: string;

  @Metadata({ data: "json, name=Sunday" })
  sunday?: string;

  @Metadata({ data: "json, name=Thursday" })
  thursday?: string;

  @Metadata({ data: "json, name=Tuesday" })
  tuesday?: string;

  @Metadata({ data: "json, name=Wednesday" })
  wednesday?: string;
}
