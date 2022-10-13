package shared

type V1UpdateOrderRequest struct {
	Action                string  `json:"action"`
	CanceledNote          *string `json:"canceled_note"`
	CompletedNote         *string `json:"completed_note"`
	RefundedNote          *string `json:"refunded_note"`
	ShippedTrackingNumber *string `json:"shipped_tracking_number"`
}
