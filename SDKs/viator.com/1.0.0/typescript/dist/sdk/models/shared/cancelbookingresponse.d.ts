import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CancelBookingResponseReasonEnum {
    AlreadyCancelled = "ALREADY_CANCELLED",
    NotCancellable = "NOT_CANCELLABLE"
}
export declare enum CancelBookingResponseStatusEnum {
    Accepted = "ACCEPTED",
    Declined = "DECLINED"
}
export declare class CancelBookingResponse extends SpeakeasyBase {
    bookingId?: string;
    reason?: CancelBookingResponseReasonEnum;
    status?: CancelBookingResponseStatusEnum;
}
