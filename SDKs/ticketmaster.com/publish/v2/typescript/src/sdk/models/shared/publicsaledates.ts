import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PublicSaleDates
/** 
 * Event's Public Onsales Dates
**/
export class PublicSaleDates extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;

  @Metadata({ data: "json, name=startTBD" })
  startTbd?: boolean;
}
