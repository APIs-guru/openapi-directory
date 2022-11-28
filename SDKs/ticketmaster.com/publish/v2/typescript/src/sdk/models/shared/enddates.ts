import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalTime } from "./localtime";



// EndDates
/** 
 * Event's End Dates
**/
export class EndDates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approximate" })
  approximate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dateTime" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=localTime" })
  localTime?: LocalTime;
}
