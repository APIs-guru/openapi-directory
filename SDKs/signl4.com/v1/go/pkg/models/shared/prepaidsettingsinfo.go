package shared

type PrepaidSettingsInfo struct {
	TopUpAmount  *int32 `json:"topUpAmount"`
	TopUpEnabled *bool  `json:"topUpEnabled"`
	TopUpLimit   *int32 `json:"topUpLimit"`
}
