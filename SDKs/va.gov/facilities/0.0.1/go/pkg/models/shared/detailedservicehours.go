package shared

type DetailedServiceHours struct {
	Friday    *string `json:"Friday,omitempty"`
	Monday    *string `json:"Monday,omitempty"`
	Saturday  *string `json:"Saturday,omitempty"`
	Sunday    *string `json:"Sunday,omitempty"`
	Thursday  *string `json:"Thursday,omitempty"`
	Tuesday   *string `json:"Tuesday,omitempty"`
	Wednesday *string `json:"Wednesday,omitempty"`
}
