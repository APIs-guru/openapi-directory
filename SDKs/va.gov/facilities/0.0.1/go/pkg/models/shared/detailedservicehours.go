package shared

// DetailedServiceHours
// Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.
type DetailedServiceHours struct {
	Friday    *string `json:"Friday,omitempty"`
	Monday    *string `json:"Monday,omitempty"`
	Saturday  *string `json:"Saturday,omitempty"`
	Sunday    *string `json:"Sunday,omitempty"`
	Thursday  *string `json:"Thursday,omitempty"`
	Tuesday   *string `json:"Tuesday,omitempty"`
	Wednesday *string `json:"Wednesday,omitempty"`
}
