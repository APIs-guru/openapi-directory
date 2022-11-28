import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BookingStatusItemLevelEnum {
    Item = "ITEM",
    Itinerary = "ITINERARY"
}
export declare enum BookingStatusItemTypeEnum {
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
/**
 * **object** containing item booking status information
**/
export declare class BookingStatusItem extends SpeakeasyBase {
    amended?: boolean;
    cancelled?: boolean;
    confirmed?: boolean;
    failed?: boolean;
    level?: BookingStatusItemLevelEnum;
    pending?: boolean;
    status?: number;
    text?: string;
    type?: BookingStatusItemTypeEnum;
}
