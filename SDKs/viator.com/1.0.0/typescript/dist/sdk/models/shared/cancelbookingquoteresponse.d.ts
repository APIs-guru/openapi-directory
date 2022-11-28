import { SpeakeasyBase } from "../../../internal/utils";
import { RefundDetails } from "./refunddetails";
export declare enum CancelBookingQuoteResponseStatusEnum {
    Cancellable = "CANCELLABLE",
    Cancelled = "CANCELLED",
    NotCancellable = "NOT_CANCELLABLE"
}
export declare class CancelBookingQuoteResponse extends SpeakeasyBase {
    bookingId?: string;
    refundDetails?: RefundDetails;
    status?: CancelBookingQuoteResponseStatusEnum;
}
