import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocalTime } from "./localtime";


// StartDates
/** 
 * Event's Start Dates
**/
export class StartDates extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateTBA" })
  dateTba?: boolean;

  @Metadata({ data: "json, name=dateTBD" })
  dateTbd?: boolean;

  @Metadata({ data: "json, name=dateTime" })
  dateTime?: Date;

  @Metadata({ data: "json, name=localDate" })
  localDate?: Date;

  @Metadata({ data: "json, name=localTime" })
  localTime?: LocalTime;

  @Metadata({ data: "json, name=noSpecificTime" })
  noSpecificTime?: boolean;

  @Metadata({ data: "json, name=timeTBA" })
  timeTba?: boolean;
}
