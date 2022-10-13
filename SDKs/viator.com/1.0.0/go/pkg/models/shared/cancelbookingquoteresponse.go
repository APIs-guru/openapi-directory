package shared

type CancelBookingQuoteResponseStatusEnum string

const (
	CancelBookingQuoteResponseStatusEnumCancellable    CancelBookingQuoteResponseStatusEnum = "CANCELLABLE"
	CancelBookingQuoteResponseStatusEnumCancelled      CancelBookingQuoteResponseStatusEnum = "CANCELLED"
	CancelBookingQuoteResponseStatusEnumNotCancellable CancelBookingQuoteResponseStatusEnum = "NOT_CANCELLABLE"
)

type CancelBookingQuoteResponse struct {
	BookingID     *string                               `json:"bookingId"`
	RefundDetails *RefundDetails                        `json:"refundDetails"`
	Status        *CancelBookingQuoteResponseStatusEnum `json:"status"`
}
