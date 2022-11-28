import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalTime } from "./localtime";



// StartDates
/** 
 * Event's Start Dates
**/
export class StartDates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateTBA" })
  dateTba?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dateTBD" })
  dateTbd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dateTime" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=localDate" })
  localDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=localTime" })
  localTime?: LocalTime;

  @SpeakeasyMetadata({ data: "json, name=noSpecificTime" })
  noSpecificTime?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timeTBA" })
  timeTba?: boolean;
}
