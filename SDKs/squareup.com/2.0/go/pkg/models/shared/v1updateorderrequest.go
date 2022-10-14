package shared

type V1UpdateOrderRequest struct {
	Action                string  `json:"action"`
	CanceledNote          *string `json:"canceled_note,omitempty"`
	CompletedNote         *string `json:"completed_note,omitempty"`
	RefundedNote          *string `json:"refunded_note,omitempty"`
	ShippedTrackingNumber *string `json:"shipped_tracking_number,omitempty"`
}
