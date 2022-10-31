package shared

type Hours struct {
	Friday    *string `json:"friday,omitempty"`
	Monday    *string `json:"monday,omitempty"`
	Saturday  *string `json:"saturday,omitempty"`
	Sunday    *string `json:"sunday,omitempty"`
	Thursday  *string `json:"thursday,omitempty"`
	Tuesday   *string `json:"tuesday,omitempty"`
	Wednesday *string `json:"wednesday,omitempty"`
}
