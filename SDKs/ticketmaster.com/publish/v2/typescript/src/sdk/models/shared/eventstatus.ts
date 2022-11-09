import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EventStatusCodeEnum {
    Onsale = "onsale"
,    Offsale = "offsale"
,    Canceled = "canceled"
,    Postponed = "postponed"
,    Rescheduled = "rescheduled"
}


// EventStatus
/** 
 * Event's Status
**/
export class EventStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: EventStatusCodeEnum;
}
