import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccessDates
/** 
 * Event's Access Date
**/
export class AccessDates extends SpeakeasyBase {
  @Metadata({ data: "json, name=endApproximate" })
  endApproximate?: boolean;

  @Metadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=startApproximate" })
  startApproximate?: boolean;

  @Metadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;
}
