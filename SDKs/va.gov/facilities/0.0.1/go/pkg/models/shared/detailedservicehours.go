package shared

type DetailedServiceHours struct {
	Friday    *string `json:"Friday"`
	Monday    *string `json:"Monday"`
	Saturday  *string `json:"Saturday"`
	Sunday    *string `json:"Sunday"`
	Thursday  *string `json:"Thursday"`
	Tuesday   *string `json:"Tuesday"`
	Wednesday *string `json:"Wednesday"`
}
