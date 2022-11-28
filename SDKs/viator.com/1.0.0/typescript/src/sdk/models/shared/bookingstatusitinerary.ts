import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BookingStatusItineraryLevelEnum {
    Item = "ITEM",
    Itinerary = "ITINERARY"
}

export enum BookingStatusItineraryTypeEnum {
    Waiting = "WAITING",
    Confirmed = "CONFIRMED",
    Pending = "PENDING",
    Failed = "FAILED",
    Cancelled = "CANCELLED",
    Amended = "AMENDED",
    PendingAmend = "PENDING_AMEND"
}


// BookingStatusItinerary
/** 
 * **object** containing itinerary booking status information
**/
export class BookingStatusItinerary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amended" })
  amended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cancelled" })
  cancelled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=failed" })
  failed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: BookingStatusItineraryLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=pending" })
  pending?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: BookingStatusItineraryTypeEnum;
}
