package shared

type UpdateWageSettingResponse struct {
	Errors      []Error      `json:"errors"`
	WageSetting *WageSetting `json:"wage_setting"`
}
