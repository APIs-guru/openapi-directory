package shared




type CancelBookingQuoteResponseStatusEnum string

const (
    CancelBookingQuoteResponseStatusEnumCancellable CancelBookingQuoteResponseStatusEnum = "CANCELLABLE"
CancelBookingQuoteResponseStatusEnumCancelled CancelBookingQuoteResponseStatusEnum = "CANCELLED"
CancelBookingQuoteResponseStatusEnumNotCancellable CancelBookingQuoteResponseStatusEnum = "NOT_CANCELLABLE"
)


type CancelBookingQuoteResponse struct {
    BookingID *string `json:"bookingId,omitempty"`
    RefundDetails *RefundDetails `json:"refundDetails,omitempty"`
    Status *CancelBookingQuoteResponseStatusEnum `json:"status,omitempty"`
    
}

