import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BookingStatusItineraryLevelEnum {
    Item = "ITEM"
,    Itinerary = "ITINERARY"
}

export enum BookingStatusItineraryTypeEnum {
    Waiting = "WAITING"
,    Confirmed = "CONFIRMED"
,    Pending = "PENDING"
,    Failed = "FAILED"
,    Cancelled = "CANCELLED"
,    Amended = "AMENDED"
,    PendingAmend = "PENDING_AMEND"
}


// BookingStatusItinerary
/** 
 * **object** containing itinerary booking status information
**/
export class BookingStatusItinerary extends SpeakeasyBase {
  @Metadata({ data: "json, name=amended" })
  amended?: boolean;

  @Metadata({ data: "json, name=cancelled" })
  cancelled?: boolean;

  @Metadata({ data: "json, name=confirmed" })
  confirmed?: boolean;

  @Metadata({ data: "json, name=failed" })
  failed?: boolean;

  @Metadata({ data: "json, name=level" })
  level?: BookingStatusItineraryLevelEnum;

  @Metadata({ data: "json, name=pending" })
  pending?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=type" })
  type?: BookingStatusItineraryTypeEnum;
}
