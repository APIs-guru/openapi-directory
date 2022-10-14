package shared

type ReportOutput struct {
	Checks string  `json:"checks"`
	Report Report  `json:"report"`
	Self   *string `json:"self,omitempty"`
}
