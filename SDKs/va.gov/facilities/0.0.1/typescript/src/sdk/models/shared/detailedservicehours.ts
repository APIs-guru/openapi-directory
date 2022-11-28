import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DetailedServiceHours
/** 
 * Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.
**/
export class DetailedServiceHours extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Friday" })
  friday?: string;

  @SpeakeasyMetadata({ data: "json, name=Monday" })
  monday?: string;

  @SpeakeasyMetadata({ data: "json, name=Saturday" })
  saturday?: string;

  @SpeakeasyMetadata({ data: "json, name=Sunday" })
  sunday?: string;

  @SpeakeasyMetadata({ data: "json, name=Thursday" })
  thursday?: string;

  @SpeakeasyMetadata({ data: "json, name=Tuesday" })
  tuesday?: string;

  @SpeakeasyMetadata({ data: "json, name=Wednesday" })
  wednesday?: string;
}
