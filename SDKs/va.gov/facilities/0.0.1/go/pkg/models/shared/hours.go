package shared

// Hours
// Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.
type Hours struct {
	Friday    *string `json:"friday,omitempty"`
	Monday    *string `json:"monday,omitempty"`
	Saturday  *string `json:"saturday,omitempty"`
	Sunday    *string `json:"sunday,omitempty"`
	Thursday  *string `json:"thursday,omitempty"`
	Tuesday   *string `json:"tuesday,omitempty"`
	Wednesday *string `json:"wednesday,omitempty"`
}
