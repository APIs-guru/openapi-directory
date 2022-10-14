package shared

type DeviceCheckoutOptions struct {
	DeviceID          string       `json:"device_id"`
	SkipReceiptScreen *bool        `json:"skip_receipt_screen,omitempty"`
	TipSettings       *TipSettings `json:"tip_settings,omitempty"`
}
