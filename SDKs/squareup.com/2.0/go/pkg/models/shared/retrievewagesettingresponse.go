package shared

type RetrieveWageSettingResponse struct {
	Errors      []Error      `json:"errors,omitempty"`
	WageSetting *WageSetting `json:"wage_setting,omitempty"`
}
