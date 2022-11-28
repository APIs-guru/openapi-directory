import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BookingStatusItineraryLevelEnum {
    Item = "ITEM",
    Itinerary = "ITINERARY"
}
export declare enum BookingStatusItineraryTypeEnum {
    Waiting = "WAITING",
    Confirmed = "CONFIRMED",
    Pending = "PENDING",
    Failed = "FAILED",
    Cancelled = "CANCELLED",
    Amended = "AMENDED",
    PendingAmend = "PENDING_AMEND"
}
/**
 * **object** containing itinerary booking status information
**/
export declare class BookingStatusItinerary extends SpeakeasyBase {
    amended?: boolean;
    cancelled?: boolean;
    confirmed?: boolean;
    failed?: boolean;
    level?: BookingStatusItineraryLevelEnum;
    pending?: boolean;
    status?: number;
    text?: string;
    type?: BookingStatusItineraryTypeEnum;
}
