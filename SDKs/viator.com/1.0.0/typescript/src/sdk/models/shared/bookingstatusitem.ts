import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BookingStatusItemLevelEnum {
    Item = "ITEM",
    Itinerary = "ITINERARY"
}

export enum BookingStatusItemTypeEnum {
    Waiting = "WAITING",
    Confirmed = "CONFIRMED",
    Unavailable = "UNAVAILABLE",
    Pending = "PENDING",
    Failed = "FAILED",
    Cancelled = "CANCELLED",
    Expired = "EXPIRED",
    Amended = "AMENDED",
    PendingAmend = "PENDING_AMEND",
    Rejected = "REJECTED",
    OnHold = "ON_HOLD"
}


// BookingStatusItem
/** 
 * **object** containing item booking status information
**/
export class BookingStatusItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amended" })
  amended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cancelled" })
  cancelled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=failed" })
  failed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: BookingStatusItemLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=pending" })
  pending?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: BookingStatusItemTypeEnum;
}
