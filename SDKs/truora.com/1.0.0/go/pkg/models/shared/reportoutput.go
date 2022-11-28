package shared

// ReportOutput
// Reprents the report creation result
type ReportOutput struct {
	Checks string  `json:"checks"`
	Report Report  `json:"report"`
	Self   *string `json:"self,omitempty"`
}
