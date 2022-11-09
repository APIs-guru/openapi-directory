import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Hours
/** 
 * Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.
**/
export class Hours extends SpeakeasyBase {
  @Metadata({ data: "json, name=friday" })
  friday?: string;

  @Metadata({ data: "json, name=monday" })
  monday?: string;

  @Metadata({ data: "json, name=saturday" })
  saturday?: string;

  @Metadata({ data: "json, name=sunday" })
  sunday?: string;

  @Metadata({ data: "json, name=thursday" })
  thursday?: string;

  @Metadata({ data: "json, name=tuesday" })
  tuesday?: string;

  @Metadata({ data: "json, name=wednesday" })
  wednesday?: string;
}
