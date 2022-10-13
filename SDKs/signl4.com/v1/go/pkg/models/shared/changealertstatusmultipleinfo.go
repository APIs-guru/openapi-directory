package shared

type ChangeAlertStatusMultipleInfo struct {
	AlertIds    []string `json:"alertIds"`
	Description *string  `json:"description"`
	UserID      *string  `json:"userId"`
}
