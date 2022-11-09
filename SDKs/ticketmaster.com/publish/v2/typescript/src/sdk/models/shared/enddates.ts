import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocalTime } from "./localtime";


// EndDates
/** 
 * Event's End Dates
**/
export class EndDates extends SpeakeasyBase {
  @Metadata({ data: "json, name=approximate" })
  approximate?: boolean;

  @Metadata({ data: "json, name=dateTime" })
  dateTime?: Date;

  @Metadata({ data: "json, name=localTime" })
  localTime?: LocalTime;
}
