package shared




type CancelBookingResponseReasonEnum string

const (
    CancelBookingResponseReasonEnumAlreadyCancelled CancelBookingResponseReasonEnum = "ALREADY_CANCELLED"
CancelBookingResponseReasonEnumNotCancellable CancelBookingResponseReasonEnum = "NOT_CANCELLABLE"
)



type CancelBookingResponseStatusEnum string

const (
    CancelBookingResponseStatusEnumAccepted CancelBookingResponseStatusEnum = "ACCEPTED"
CancelBookingResponseStatusEnumDeclined CancelBookingResponseStatusEnum = "DECLINED"
)


type CancelBookingResponse struct {
    BookingID *string `json:"bookingId,omitempty"`
    Reason *CancelBookingResponseReasonEnum `json:"reason,omitempty"`
    Status *CancelBookingResponseStatusEnum `json:"status,omitempty"`
    
}

