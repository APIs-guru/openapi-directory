package shared

type RetrieveWageSettingResponse struct {
	Errors      []Error      `json:"errors"`
	WageSetting *WageSetting `json:"wage_setting"`
}
