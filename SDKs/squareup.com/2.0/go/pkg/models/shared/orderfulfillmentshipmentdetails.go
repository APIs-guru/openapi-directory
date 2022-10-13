package shared

type OrderFulfillmentShipmentDetails struct {
	CancelReason      *string                    `json:"cancel_reason"`
	CanceledAt        *string                    `json:"canceled_at"`
	Carrier           *string                    `json:"carrier"`
	ExpectedShippedAt *string                    `json:"expected_shipped_at"`
	FailedAt          *string                    `json:"failed_at"`
	FailureReason     *string                    `json:"failure_reason"`
	InProgressAt      *string                    `json:"in_progress_at"`
	PackagedAt        *string                    `json:"packaged_at"`
	PlacedAt          *string                    `json:"placed_at"`
	Recipient         *OrderFulfillmentRecipient `json:"recipient"`
	ShippedAt         *string                    `json:"shipped_at"`
	ShippingNote      *string                    `json:"shipping_note"`
	ShippingType      *string                    `json:"shipping_type"`
	TrackingNumber    *string                    `json:"tracking_number"`
	TrackingURL       *string                    `json:"tracking_url"`
}
