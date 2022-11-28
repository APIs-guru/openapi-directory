import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessDates } from "./accessdates";
import { EndDates } from "./enddates";
import { StartDates } from "./startdates";
import { EventStatus } from "./eventstatus";



// EventDates
/** 
 * Event's Dates
**/
export class EventDates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: AccessDates;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: EndDates;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: StartDates;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: EventStatus;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}
