import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessDates
/** 
 * Event's Access Date
**/
export class AccessDates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endApproximate" })
  endApproximate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=startApproximate" })
  startApproximate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;
}
