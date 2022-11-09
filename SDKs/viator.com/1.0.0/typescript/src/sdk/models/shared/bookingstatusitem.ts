import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BookingStatusItemLevelEnum {
    Item = "ITEM"
,    Itinerary = "ITINERARY"
}

export enum BookingStatusItemTypeEnum {
    Waiting = "WAITING"
,    Confirmed = "CONFIRMED"
,    Unavailable = "UNAVAILABLE"
,    Pending = "PENDING"
,    Failed = "FAILED"
,    Cancelled = "CANCELLED"
,    Expired = "EXPIRED"
,    Amended = "AMENDED"
,    PendingAmend = "PENDING_AMEND"
,    Rejected = "REJECTED"
,    OnHold = "ON_HOLD"
}


// BookingStatusItem
/** 
 * **object** containing item booking status information
**/
export class BookingStatusItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=amended" })
  amended?: boolean;

  @Metadata({ data: "json, name=cancelled" })
  cancelled?: boolean;

  @Metadata({ data: "json, name=confirmed" })
  confirmed?: boolean;

  @Metadata({ data: "json, name=failed" })
  failed?: boolean;

  @Metadata({ data: "json, name=level" })
  level?: BookingStatusItemLevelEnum;

  @Metadata({ data: "json, name=pending" })
  pending?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=type" })
  type?: BookingStatusItemTypeEnum;
}
