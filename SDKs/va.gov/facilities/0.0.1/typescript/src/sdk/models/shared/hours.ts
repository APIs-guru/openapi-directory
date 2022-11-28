import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Hours
/** 
 * Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.
**/
export class Hours extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=friday" })
  friday?: string;

  @SpeakeasyMetadata({ data: "json, name=monday" })
  monday?: string;

  @SpeakeasyMetadata({ data: "json, name=saturday" })
  saturday?: string;

  @SpeakeasyMetadata({ data: "json, name=sunday" })
  sunday?: string;

  @SpeakeasyMetadata({ data: "json, name=thursday" })
  thursday?: string;

  @SpeakeasyMetadata({ data: "json, name=tuesday" })
  tuesday?: string;

  @SpeakeasyMetadata({ data: "json, name=wednesday" })
  wednesday?: string;
}
