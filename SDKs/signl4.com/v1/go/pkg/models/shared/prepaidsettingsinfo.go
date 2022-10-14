package shared

type PrepaidSettingsInfo struct {
	TopUpAmount  *int32 `json:"topUpAmount,omitempty"`
	TopUpEnabled *bool  `json:"topUpEnabled,omitempty"`
	TopUpLimit   *int32 `json:"topUpLimit,omitempty"`
}
