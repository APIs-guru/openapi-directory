package shared

// RefundDetails
// Details of the refund
//
// **Note**: Bookings that have not been confirmed by the supplier and have a status of `"PENDING"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking has been accepted by the supplier and its status is `"CONFIRMED"`.
type RefundDetails struct {
	CurrencyCode     *string  `json:"currencyCode,omitempty"`
	ItemPrice        *float64 `json:"itemPrice,omitempty"`
	RefundAmount     *float64 `json:"refundAmount,omitempty"`
	RefundPercentage *float64 `json:"refundPercentage,omitempty"`
}
