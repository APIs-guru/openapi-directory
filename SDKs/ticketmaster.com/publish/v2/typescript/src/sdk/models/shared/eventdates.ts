import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessDates } from "./accessdates";
import { EndDates } from "./enddates";
import { StartDates } from "./startdates";
import { EventStatus } from "./eventstatus";


// EventDates
/** 
 * Event's Dates
**/
export class EventDates extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: AccessDates;

  @Metadata({ data: "json, name=end" })
  end?: EndDates;

  @Metadata({ data: "json, name=start" })
  start?: StartDates;

  @Metadata({ data: "json, name=status" })
  status?: EventStatus;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;
}
