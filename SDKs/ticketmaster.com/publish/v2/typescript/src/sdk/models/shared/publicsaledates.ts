import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicSaleDates
/** 
 * Event's Public Onsales Dates
**/
export class PublicSaleDates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=startTBD" })
  startTbd?: boolean;
}
