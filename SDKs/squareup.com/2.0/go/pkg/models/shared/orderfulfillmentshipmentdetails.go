package shared



type OrderFulfillmentShipmentDetails struct {
    CancelReason *string `json:"cancel_reason,omitempty"`
    CanceledAt *string `json:"canceled_at,omitempty"`
    Carrier *string `json:"carrier,omitempty"`
    ExpectedShippedAt *string `json:"expected_shipped_at,omitempty"`
    FailedAt *string `json:"failed_at,omitempty"`
    FailureReason *string `json:"failure_reason,omitempty"`
    InProgressAt *string `json:"in_progress_at,omitempty"`
    PackagedAt *string `json:"packaged_at,omitempty"`
    PlacedAt *string `json:"placed_at,omitempty"`
    Recipient *OrderFulfillmentRecipient `json:"recipient,omitempty"`
    ShippedAt *string `json:"shipped_at,omitempty"`
    ShippingNote *string `json:"shipping_note,omitempty"`
    ShippingType *string `json:"shipping_type,omitempty"`
    TrackingNumber *string `json:"tracking_number,omitempty"`
    TrackingURL *string `json:"tracking_url,omitempty"`
    
}

